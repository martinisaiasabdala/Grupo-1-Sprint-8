from django.db import models
from django.contrib.auth.models import User

# Create your models here .
from sucursales.models import Branch, Address

class ClientType(models.Model):
    client_type_id = models.AutoField(primary_key=True)
    client_type_name = models.CharField(max_length=50)
    client_type_card_amount = models.IntegerField()
    client_type_withdraw_limit = models.IntegerField()
    client_type_fee = models.FloatField()
    

    class Meta:
        db_table = 'ClientType'

    def __str__(self):
        return self.client_type_name


class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_DNI = models.CharField(max_length=10)
    customer_name = models.CharField(max_length=50)
    customer_surname = models.CharField(max_length=50)
    customer_birth = models.DateField()
    customer_address = models.ForeignKey(Address, on_delete=models.CASCADE, db_column='fk_customer_address_id')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="customer", default=None)

    class Meta:
        db_table = 'Customer'

    def __str__(self):
        return f"{self.customer_name} {self.customer_surname}"