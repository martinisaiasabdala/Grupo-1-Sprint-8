from django.db import models

# Create your models here.
from clientes.models import Customer  # Importar relaciones externas

class CardBrand(models.Model):
    card_brand_id = models.AutoField(primary_key=True)
    card_brand_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'CardBrand'

    def __str__(self):
        return self.card_brand_name


class Card(models.Model):
    card_id = models.AutoField(primary_key=True)
    card_number = models.CharField(max_length=20)
    card_cvv = models.IntegerField()
    card_grand_date = models.DateField(null=True, blank=True)
    card_expire_date = models.DateField(null=True, blank=True)
    card_type = models.CharField(max_length=25, null=True, blank=True)
    fk_card_brand = models.ForeignKey(CardBrand, on_delete=models.CASCADE, db_column='fk_card_brand_id')
    fk_card_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, db_column='fk_card_customer_id')

    class Meta:
        db_table = 'Card'

    def __str__(self):
        return f"{self.card_type.capitalize()} Card {self.card_number}"