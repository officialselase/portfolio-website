from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class WorkExperience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    duration = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f"{self.title} at {self.company}"

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    session_key = models.CharField(max_length=40, null=True, blank=True)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity}x {self.name} (${self.price}) for {self.user.username if self.user else self.session_key}"

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=10,
        choices=[
            ('available', 'Available'),
            ('pending', 'Pending'),
            ('sold', 'Sold')
        ],
        default='available'
    )
    claimed_by = models.CharField(max_length=100, blank=True, null=True)  # User ID or session key
    claimed_until = models.DateTimeField(blank=True, null=True)  # 30-minute timeout
    sold_at = models.DateTimeField(blank=True, null=True)  # Sale completion time

    def __str__(self):
        return self.name