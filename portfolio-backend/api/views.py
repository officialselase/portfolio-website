# portfolio-backend/api/views.py
from rest_framework import viewsets
from .models import WorkExperience, CartItem, Product
from .serializers import WorkExperienceSerializer, CartItemSerializer, ProductSerializer
from django.utils import timezone
from django.contrib.sessions.models import Session

class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer

class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer

    def get_queryset(self):
        session_key = self.request.session.session_key
        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key
        return CartItem.objects.filter(session_key=session_key) or CartItem.objects.none()

    def perform_create(self, serializer):
        session_key = self.request.session.session_key
        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key
        serializer.save(session_key=session_key)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer