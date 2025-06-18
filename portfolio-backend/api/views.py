from rest_framework import viewsets
from .models import WorkExperience, CartItem, Product
from .serializers import WorkExperienceSerializer, CartItemSerializer, ProductSerializer
from django.utils import timezone
from django.contrib.sessions.models import Session
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction
from django.contrib.auth.decorators import login_required

class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer
    
class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    queryset = CartItem.objects.none()  # Default empty queryset

    def get_queryset(self):
        session_key = self.request.session.session_key
        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key
        return CartItem.objects.filter(session_key=session_key)

    def perform_create(self, serializer):
        session_key = self.request.session.session_key
        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key
        serializer.save(session_key=session_key)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(status='available')
    serializer_class = ProductSerializer
    
    
@login_required
@api_view(['POST'])
@transaction.atomic
def claim_product(request, product_id):
    try:
        product = Product.objects.select_for_update().get(id=product_id)
        if product.status != 'available':
            return Response({'error': 'Product is not available'}, status=status.HTTP_400_BAD_REQUEST)
        product.status = 'pending'
        product.claimed_by = request.user.username
        product.claimed_until = timezone.now() + timezone.timedelta(minutes=30)
        product.save()
        return Response({'message': 'Product claimed successfully', 'claimed_until': product.claimed_until.isoformat()}, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def wishlist_item(request, product_id):
    try:
        session_key = request.session.session_key
        if not session_key:
            request.session.create()
            session_key = request.session.session_key
        product = Product.objects.get(id=product_id)
        if product.status != 'available':
            return Response({'error': 'Product is not available for wishlist'}, status=status.HTTP_400_BAD_REQUEST)
        CartItem.objects.update_or_create(
            session_key=session_key,
            name=product.name,
            defaults={'price': product.price, 'quantity': 1, 'added_at': timezone.now()}
        )
        return Response({'message': 'Item added to wishlist'}, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)