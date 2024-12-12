from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import CardForm
from django.contrib.auth.decorators import login_required
from clientes.models import Customer
from .models import Card

@login_required  
def create_card(request):
    if request.method == 'POST':
        form = CardForm(request.POST)
        if form.is_valid():
            # Obtener el cliente logueado
            customer = Customer.objects.get(user=request.user) 
            
            # Asignamos automáticamente el cliente logueado a la tarjeta
            card = form.save(commit=False) 
            card.fk_card_customer = customer  
            card.save()  

            return redirect('home')  

    else:
        form = CardForm()

    return render(request, 'create_card.html', {'form': form})

@login_required
def client_cards(request):
    # Obtener las cuentas asociadas al cliente logueado
   
    customer = Customer.objects.get(user=request.user)

    # Filtrar las cuentas de ese cliente
    targetas = Card.objects.filter(fk_card_customer=customer)

    return render(request, 'mis_targetas.html', {'cards': targetas})