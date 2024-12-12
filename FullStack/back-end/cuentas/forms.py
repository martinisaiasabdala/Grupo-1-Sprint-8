from django import forms
from .models import CustomerAccount, AccountType
from clientes.models import Customer

class CustomerAccountForm(forms.ModelForm):
    class Meta:
        model = CustomerAccount
        fields = ['fk_customer_account_customer', 'fk_customer_account_account_type', 'customer_account_balance']
        labels = {
            'fk_customer_account_customer': 'Cliente',
            'fk_customer_account_account_type': 'Tipo de Cuenta',
            'customer_account_balance': 'Saldo Inicial',
        }
        widgets = {
            'fk_customer_account_customer': forms.Select(attrs={'class': 'form-control'}),
            'fk_customer_account_account_type': forms.Select(attrs={'class': 'form-control'}),
            'customer_account_balance': forms.NumberInput(attrs={'class': 'form-control'}),
        }

