from rest_framework import serializers
from .models import Customer
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

class CustomerSerializerDireccion(serializers.ModelSerializer):
    direccion = AddressSerializer(source='customer_address', )
    class Meta:
        model = Customer
        fields = ('direccion',)
    
    def update(self, instance, validated_data):
        # Obtener los datos de la dirección
        direccion_data = validated_data.pop('customer_address', None)
        
        if direccion_data:
            # Si hay datos para la dirección, actualizamos o creamos una nueva dirección
            direccion_instance = instance.customer_address
            for attr, value in direccion_data.items():
                setattr(direccion_instance, attr, value)
            direccion_instance.save()

        # Actualizar los campos del cliente
        return super().update(instance, validated_data)

class CustomerAccountSerializer(serializers.ModelSerializer):
    # Usamos StringRelatedField para mostrar el nombre del tipo de cuenta
    tipo = serializers.StringRelatedField(source='fk_customer_account_account_type', read_only=True)

    class Meta:
        model = CustomerAccount
        fields = ('customer_account_balance', 'tipo')  # Devuelve el saldo y tipo de cuenta
        read_only_fields = ('customer_account_id', 'fk_customer_account_customer')

class LoanSerializer(serializers.ModelSerializer):

    branch_name = serializers.StringRelatedField(source='fk_loan_branch', read_only=True)


    class Meta:
        model = Loan
        fields = ('loan_id', 'loan_total', 'loan_status', 'loan_date', 'branch_name')
        read_only_fields = ('loan_id', 'fk_loan_customer')

class CardSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all(), source='fk_card_customer', write_only=True)
    class Meta:
        model = Card
        fields = '__all__'
        read_only_fields = ('card_id', 'fk_card_customer_account')




