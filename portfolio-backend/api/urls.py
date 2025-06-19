from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CartItemViewSet, ProductViewSet, WorkExperienceViewSet, claim_product, wishlist_item, create_order

router = DefaultRouter()
router.register(r'cart', CartItemViewSet, basename='cartitem')
router.register(r'products', ProductViewSet, basename='product')
router.register(r'work', WorkExperienceViewSet, basename='workexperience')

urlpatterns = [
    path('', include(router.urls)),
    path('claim/<int:product_id>/', claim_product, name='claim_product'),
    path('wishlist/<int:product_id>/', wishlist_item, name='wishlist_item'),
    path('create-order/', create_order, name='create_order'),
]