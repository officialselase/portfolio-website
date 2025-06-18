from django.core.management.base import BaseCommand
from django.utils import timezone
from api.models import Product

class Command(BaseCommand):
    help = 'Checks for expired pending products and releases them'

    def handle(self, *args, **options):
        expired = Product.objects.filter(status='pending', claimed_until__lt=timezone.now())
        for product in expired:
            product.status = 'available'
            product.claimed_by = None
            product.claimed_until = None
            product.save()
            self.stdout.write(self.style.SUCCESS(f'Released product {product.id} due to expiration'))