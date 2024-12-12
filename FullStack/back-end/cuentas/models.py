from django.db import models

# Create your models here.
from clientes.models import Customer  # Importar relaciones externas

class AccountType(models.Model):
    account_type_id = models.AutoField(primary_key=True)
    account_type_name = models.CharField(max_length=50)
    account_type_currency = models.CharField(max_length=10)

    class Meta:
        db_table = 'AccountType'

    def __str__(self):
        return self.account_type_name


class CustomerAccount(models.Model):
    customer_account_id = models.AutoField(primary_key=True)
    customer_account_balance = models.IntegerField()
    fk_customer_account_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, db_column='fk_customer_account_customer_id')
    fk_customer_account_account_type = models.ForeignKey(AccountType, on_delete=models.CASCADE, db_column='fk_customer_account_account_type_id')

    class Meta:
        db_table = 'CustomerAccount'

    def __str__(self):
        return f"Cuenta {self.customer_account_id} - Saldo: {self.customer_account_balance}"