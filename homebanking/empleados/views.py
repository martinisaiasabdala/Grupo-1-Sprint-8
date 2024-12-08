from django.shortcuts import render
from .models import Employee
from cuentas.models import CustomerAccount
from clientes.models import Customer
from tarjetas.models import Card
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import LoanSerializer, CardSerializer
from prestamos.models import Loan
from rest_framework.exceptions import PermissionDenied
# Create your views here.

class BranchLoansListAPIView(ListAPIView):
    serializer_class = LoanSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [BasicAuthentication]

    def get_queryset(self):
        # Obtener el empleado autenticado
        user = self.request.user

        # Obtener la sucursal a partir de la URL
        branch_id = self.kwargs['pk']

        # Filtrar los préstamos por la sucursal solicitada
        loans = Loan.objects.filter(fk_loan_branch=branch_id)

        
        #Verificar si el usuario tiene un empleado asociado
        try:
            employee = Employee.objects.get(user=user)  
        except Employee.DoesNotExist:
            raise PermissionDenied("No tienes un empleado asociado, no tienes permiso para acceder a esta API.")
        
        
        return loans
    
class CustomerCardsListAPIView(ListAPIView):
    serializer_class = CardSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [BasicAuthentication]

    def get_queryset(self):
        # Obtener el empleado autenticado
        user = self.request.user

        # Obtener la sucursal a partir de la URL
        customer_id = self.kwargs['pk']

        # Filtrar los préstamos por la sucursal solicitada
        cards = Card.objects.filter(fk_card_customer=customer_id)

        
        #Verificar si el usuario tiene un empleado asociado
        try:
            employee = Employee.objects.get(user=user)  
        except Employee.DoesNotExist:
            raise PermissionDenied("No tienes un empleado asociado, no tienes permiso para acceder a esta API.")
        
        
        return cards


class LoanCreateAPIView(CreateAPIView):
    serializer_class = LoanSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [BasicAuthentication]

    def perform_create(self, serializer):
        user = self.request.user

        #Verificar si el usuario tiene un empleado asociado
        try:
            employee = Employee.objects.get(user=user)  
        except Employee.DoesNotExist:
            raise PermissionDenied("No tienes un empleado asociado, no tienes permiso para acceder a esta API.")
        
class LoanDeleteAPIView(DestroyAPIView):
    serializer_class = LoanSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [BasicAuthentication]

    def get_queryset(self):
        # Obtener el empleado autenticado
        user = self.request.user

        # Obtener el ID del préstamo a partir de la URL
        loan_id = self.kwargs['pk']

        # Filtrar los préstamos por la sucursal solicitada
        loans = Loan.objects.filter(loan_id=loan_id)

        
        #Verificar si el usuario tiene un empleado asociado
        if not Employee.objects.filter(user=user).exists():
            raise PermissionDenied("No tienes un empleado asociado, no tienes permiso para acceder a esta API.")
        
        return loans
        
    
