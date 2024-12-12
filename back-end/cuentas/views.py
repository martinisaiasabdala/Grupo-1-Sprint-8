from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import CustomerAccountForm
from django.contrib.auth.decorators import login_required
from clientes.models import Customer
from .models import CustomerAccount

@login_required
def create_customer_account(request):
    if request.method == 'POST':
        form = CustomerAccountForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('create_account')  
        else:
            messages.error(request, "Hubo un error al crear la cuenta.")
    else:
        form = CustomerAccountForm()
    
    return render(request, 'create_account.html', {'form': form})

@login_required
def client_accounts(request):
    # Obtener las cuentas asociadas al cliente logueado
   
    customer = Customer.objects.get(user=request.user)

    # Filtrar las cuentas de ese cliente
    accounts = CustomerAccount.objects.filter(fk_customer_account_customer=customer)

    return render(request, 'mis_cuentas.html', {'accounts': accounts})