from rest_framework import serializers
from clientes.models import Customer
from cuentas.models import CustomerAccount
from sucursales.models import Branch, Address
from tarjetas.models import Card
from prestamos.models import Loan


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
        read_only_fields = ('customer_id', )

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('address_name', )

class LoanSerializer(serializers.ModelSerializer):

    branch_name = serializers.StringRelatedField(source='fk_loan_branch', read_only=True)

    class Meta:
        model = Loan
        fields = ('loan_id', 'loan_total', 'branch_name')

class LoanCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = ('fk_loan_branch', 'fk_loan_customer', 'loan_total')

class CardSerializer(serializers.ModelSerializer):

    marca = serializers.StringRelatedField(source='fk_card_brand', read_only=True)
    cliente = serializers.StringRelatedField(source='fk_card_customer', read_only=True)

    
    class Meta:
        model = Card
        fields = ('card_id', 'card_number', 'marca', 'cliente')
        read_only_fields = ('card_id', 'fk_card_customer_account')




