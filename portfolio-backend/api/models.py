from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField(max_length=200, blank=True, null=True)  # New field for image URL
    status = models.CharField(max_length=20, choices=[('available', 'Available'), ('pending', 'Pending'), ('sold', 'Sold')], default='available')
    claimed_by = models.CharField(max_length=100, blank=True, null=True)
    claimed_until = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    session_key = models.CharField(max_length=40)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('session_key', 'product')

    def __str__(self):
        return f"{self.session_key} - {self.product.name} (${self.price})"

class Order(models.Model):
    order_id = models.CharField(max_length=20, unique=True)
    customer_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    shipping_address = models.TextField()
    items = models.JSONField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('processed', 'Processed'), ('failed', 'Failed')], default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.order_id

class WorkExperience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.role} at {self.company}"