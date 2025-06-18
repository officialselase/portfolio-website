from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkExperienceViewSet, CartItemViewSet, ProductViewSet, claim_product, wishlist_item

router = DefaultRouter()
router.register(r'work', WorkExperienceViewSet)
router.register(r'cart', CartItemViewSet, basename='cartitem')
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls)),
    path('claim/<int:product_id>/', claim_product, name='claim_product'),
    path('wishlist/<int:product_id>/', wishlist_item, name='wishlist_item'),
]
    # Add any additional paths here
    # path('another_endpoint/', another_view, name='another_view'),