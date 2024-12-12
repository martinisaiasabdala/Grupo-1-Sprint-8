from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import LoanForm
from clientes.models import Customer
from .models import Loan

# Create your views here.
@login_required
def solicitar_prestamo(request):
    if request.method == 'POST':
        form = LoanForm(request.POST)
        if form.is_valid():
            loan=form.save(commit=False)
            loan.fk_loan_customer = Customer.objects.get(user=request.user)
            loan.save()
            redirect('home')
    else:
        form = LoanForm()
    
    return render(request, 'solicitar_prestamo.html', {'form': form})

@login_required
def mis_prestamos(request):
    loans = Loan.objects.filter(fk_loan_customer=Customer.objects.get(user=request.user))
    return render(request, 'listar_prestamo.html', {'loans': loans})