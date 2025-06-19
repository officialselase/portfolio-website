from django.core.management.base import BaseCommand
from django.utils import timezone
from api.models import Product
import logging

logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = 'Clears expired product claims'

    def handle(self, *args, **options):
        now = timezone.now()
        expired_claims = Product.objects.filter(claimed_until__lt=now, status='pending')
        for product in expired_claims:
            product.status = 'available'
            product.claimed_by = ''
            product.claimed_until = None
            product.save()
            logger.info(f"Cleared expired claim for product {product.id}")
        logger.info(f"Checked {expired_claims.count()} expired claims at {now}")