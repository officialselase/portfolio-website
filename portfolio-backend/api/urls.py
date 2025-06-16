from rest_framework.routers import DefaultRouter
from .views import WorkExperienceViewSet, CartItemViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'work', WorkExperienceViewSet)
router.register(r'cart', CartItemViewSet, basename='cartitem')  # Add basename='cartitem'
router.register(r'products', ProductViewSet)

urlpatterns = router.urls