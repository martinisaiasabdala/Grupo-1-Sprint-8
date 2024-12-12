from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Customer
from cuentas.models import CustomerAccount
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import CustomerSerializer, CustomerAccountSerializer, LoanSerializer, CustomerSerializerDireccion
from prestamos.models import Loan
from rest_framework.exceptions import PermissionDenied

@login_required
def customer_detail(request):
    customer = Customer.objects.get(user=request.user)
    cuenta = CustomerAccount.objects.get(fk_customer_account_customer=customer)
    return render(request, 'detail.html', {'customer': customer, 'cuenta': cuenta})

# Vista para listar y crear clientes
class CustomerListCreateAPIView(ListCreateAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerSerializer

    def get_queryset(self):
        user = self.request.user
        try:
            customer = Customer.objects.get(user=user)  
        except Customer.DoesNotExist:
            raise PermissionDenied("No tienes un cliente asociado, no tienes permiso para acceder a esta API.")
        # Filtra los clientes para devolver solo los del usuario autenticado
        return Customer.objects.filter(user=user)
    
# Vista para obtener, actualizar y eliminar un clientes por ID
class CustomerCambiaDireccion(RetrieveUpdateAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerSerializerDireccion

    def get_object(self):
        user = self.request.user
        try:
            customer = Customer.objects.get(user=user)  
        except Customer.DoesNotExist:
            raise PermissionDenied("No tienes un cliente asociado, no tienes permiso para acceder a esta API.")
        # Obtiene el cliente asociado al usuario autenticado
        return Customer.objects.get(user=user)

# Vista para listar y crear cuentas de clientes
class CustomerAccountListCreateAPIView(ListCreateAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerAccountSerializer

    def get_queryset(self):
        user = self.request.user
        try:
            customer = Customer.objects.get(user=user)  
        except Customer.DoesNotExist:
            raise PermissionDenied("No tienes un cliente asociado, no tienes permiso para acceder a esta API.")
        # Filtra los clientes para devolver solo los del usuario autenticado
        return CustomerAccount.objects.filter(fk_customer_account_customer=Customer.objects.get(user=user))
    
class LoanListAPIView(ListCreateAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = LoanSerializer

    def get_queryset(self):
        user = self.request.user
        try:
            customer = Customer.objects.get(user=user)  
        except Customer.DoesNotExist:
            raise PermissionDenied("No tienes un cliente asociado, no tienes permiso para acceder a esta API.")
        # Filtra los clientes para devolver solo los del usuario autenticado
        return Loan.objects.filter(fk_loan_customer=Customer.objects.get(user=user))

