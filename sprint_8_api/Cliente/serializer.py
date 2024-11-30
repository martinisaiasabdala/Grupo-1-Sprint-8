from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
        read_only_fields = ('customer_id', )

class CustomerAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAccount
        fields = '__all__'
        read_only_fields = ('customer_account_id', 'fk_customer_account_customer', 'fk_customer_account_account_type')

class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = '__all__'
        read_only_fields = ('loan_id', 'fk_loan_customer')

class AccountTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountType
        fields = '__all__'
        read_only_fields = ('account_type_id', )

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'
        read_only_fields = ('card_id', 'fk_card_customer_account')

class CardTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardType
        fields = '__all__'
        read_only_fields = ('card_type_id', )


