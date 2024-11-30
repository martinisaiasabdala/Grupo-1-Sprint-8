from django.db import models
from Sucursal.models import Branch, Address

class AccountType(models.Model):
    account_type_id = models.AutoField(primary_key=True)
    account_type_name = models.CharField(max_length=50)
    account_type_currency = models.CharField(max_length=10)

    class Meta:
        db_table = 'AccountType'

    def __str__(self):
        return self.account_type_name

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

    class Meta:
        db_table = 'Customer'

    def __str__(self):
        return f"{self.customer_name} {self.customer_surname}"
    
class CustomerAccount(models.Model):
    customer_account_id = models.AutoField(primary_key=True)
    customer_account_balance = models.IntegerField()
    fk_customer_account_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, db_column='fk_customer_account_customer_id')
    fk_customer_account_account_type = models.ForeignKey(AccountType, on_delete=models.CASCADE, db_column='fk_customer_account_account_type_id')

    class Meta:
        db_table = 'CustomerAccount'

    def __str__(self):
        return f"Cuenta {self.customer_account_id} - Saldo: {self.customer_account_balance}"


class Loan(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_payment = models.CharField(max_length=50)
    loan_date = models.DateField()
    loan_total = models.IntegerField()
    fk_loan_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, db_column='fk_loan_customer_id')

    class Meta:
        db_table = 'Loan'

    def __str__(self):
        return f"Préstamo {self.loan_id} - Total: {self.loan_total}"

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
    card_grand_date = models.DateField(null=True, blank=True)  # Fecha de otorgamiento
    card_expire_date = models.DateField(null=True, blank=True)
    card_type = models.CharField(max_length=25, null=True, blank=True)  # Débito o Crédito
    fk_card_brand = models.ForeignKey(CardBrand, on_delete=models.CASCADE, db_column='fk_card_brand_id')
    fk_card_customer = models.ForeignKey(Customer, on_delete=models.CASCADE, db_column='fk_card_customer_id')

    class Meta:
        db_table = 'Card'

    def __str__(self):
        return f"{self.card_type.capitalize()} Card {self.card_number}"

