from rest_framework import viewsets
from .models import CartItem, Product, Order, WorkExperience
from .serializers import CartItemSerializer, ProductSerializer, OrderSerializer, WorkExperienceSerializer
from django.utils import timezone
from django.contrib.sessions.models import Session
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction
from django.contrib.auth.decorators import login_required
import uuid
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    queryset = CartItem.objects.none()

    def get_queryset(self):
        session_key = self.request.session.session_key
        logger.debug("Fetching cart items for session_key: %s", session_key)
        if not session_key:
            logger.warning("No session_key, creating new session")
            self.request.session.create()
            session_key = self.request.session.session_key
        queryset = CartItem.objects.filter(session_key=session_key)
        logger.debug("Queried cart items: %s", list(queryset.values()))
        return queryset

    def perform_create(self, serializer):
        session_key = self.request.session.session_key
        if not session_key:
            logger.warning("No session_key, creating new session")
            self.request.session.create()
            session_key = self.request.session.session_key
        logger.debug("Creating cart item with session_key: %s", session_key)
        serializer.save(session_key=session_key)
        logger.info("Cart item created: %s", serializer.instance)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()  # Changed to include all products
    serializer_class = ProductSerializer

class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer

@login_required
@api_view(['POST'])
@transaction.atomic
def claim_product(request, product_id):
    logger.debug("Claim product request for product_id: %s", product_id)
    try:
        product = Product.objects.select_for_update().get(id=product_id)
        logger.debug("Product found: %s", product)
        if product.status != 'available':
            logger.warning("Product not available: %s", product.status)
            return Response({'error': 'Product is not available'}, status=status.HTTP_400_BAD_REQUEST)
        product.status = 'pending'
        product.claimed_by = request.user.username
        product.claimed_until = timezone.now() + timezone.timedelta(minutes=30)
        product.save()
        logger.info("Product claimed: %s by %s", product.id, product.claimed_by)
        return Response({'message': 'Product claimed successfully', 'claimed_until': product.claimed_until.isoformat()}, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        logger.error("Product not found for id: %s", product_id)
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        logger.error("Unexpected error in claim_product: %s", str(e), exc_info=True)
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def wishlist_item(request, product_id):
    logger.debug("Wishlist item request for product_id: %s", product_id)
    try:
        session_key = request.session.session_key
        if not session_key:
            logger.warning("No session_key, creating new session")
            request.session.create()
            session_key = request.session.session_key
            request.session.modified = True
        logger.debug("Using session_key: %s", session_key)
        product = Product.objects.get(id=product_id)
        logger.debug("Product found: %s", product)
        if product.status != 'available':
            logger.warning("Product not available: %s", product.status)
            return Response({'error': 'Product is not available for wishlist'}, status=status.HTTP_400_BAD_REQUEST)
        cart_item, created = CartItem.objects.update_or_create(
            session_key=session_key,
            product=product,
            defaults={'price': product.price, 'added_at': timezone.now()}
        )
        logger.info("Wishlist item %s for product %s (created: %s)", cart_item, product_id, created)
        return Response({'message': 'Item added to wishlist'}, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        logger.error("Product not found for id: %s", product_id)
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        logger.error("Unexpected error in wishlist_item: %s", str(e), exc_info=True)
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@transaction.atomic
def create_order(request):
    logger.debug("Create order request received with data: %s", request.data)
    try:
        data = request.data
        required_fields = ['name', 'email', 'phone', 'address', 'items', 'total_amount']
        missing_fields = [field for field in required_fields if field not in data or not data[field]]
        if missing_fields:
            logger.error("Missing required fields: %s", missing_fields)
            return Response({'error': f'Missing required fields: {", ".join(missing_fields)}'}, status=status.HTTP_400_BAD_REQUEST)

        order_id = f'MYSHOP-ORD-{uuid.uuid4().hex[:6].upper()}'
        logger.debug("Generating order_id: %s", order_id)

        # Update product statuses to 'sold' based on items
        for item in data['items']:
            try:
                product = Product.objects.get(name=item['name'])
                if product.status == 'available':
                    product.status = 'sold'
                    product.save()
                    logger.info("Product %s marked as sold for order %s", product.id, order_id)
            except Product.DoesNotExist:
                logger.warning("Product %s not found for order %s", item['name'], order_id)

        # Create the order
        order = Order.objects.create(
            order_id=order_id,
            customer_name=data['name'],
            email=data['email'],
            phone=data['phone'],
            shipping_address=data['address'],
            items=data['items'],
            total_amount=data['total_amount']
        )
        logger.info("Order created successfully: %s", order_id)
        logger.debug("Order details: %s", {
            'order_id': order.order_id,
            'customer_name': order.customer_name,
            'total_amount': order.total_amount,
            'status': order.status
        })

        # Clear the cart (optional, based on wishlist items)
        session_key = request.session.session_key
        if session_key:
            CartItem.objects.filter(session_key=session_key).delete()
            logger.info("Cart cleared for session_key: %s", session_key)

        return Response({'message': 'Order placed', 'order_id': order_id}, status=status.HTTP_201_CREATED)
    except Exception as e:
        logger.error("Failed to create order: %s", str(e), exc_info=True)
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)