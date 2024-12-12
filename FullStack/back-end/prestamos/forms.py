from django import forms
from .models import Loan
from django.utils.timezone import now

class LoanForm(forms.ModelForm):
    class Meta:
        model = Loan
        fields = ['loan_type', 'loan_total', 'loan_date',]
        labels = {
            'loan_type': 'Tipo de Prestamo',
            'loan_total': 'Total de Prestamo',
            'loan_date': 'Fecha de vencimiento',
        }
    def __init__(self, *args, **kwargs):
        self.customer = kwargs.pop('customer', None)
        super().__init__(*args, **kwargs)

    def clean_fk_loan_customer(self):
        fk_loan_customer = self.customer
        if not fk_loan_customer:
            raise forms.ValidationError(
                f"Cliente invalido"
            )
        return fk_loan_customer

    def clean_loan_total(self):
        loan_type = self.cleaned_data.get('loan_type')
        loan_total = self.cleaned_data.get('loan_total')
        limits = {
            'BLACK': 500000,
            'GOLD': 300000,
            'CLASSIC': 100000,
        }
        max_limit = limits.get(loan_type, 0)
        if loan_total > max_limit:
            raise forms.ValidationError(
                f"El monto no puede exceder el limite ${max_limit} por tipo de cliente: {loan_type}"
            )
        return loan_total
    def clean_loan_date(self):
        loan_date = self.cleaned_data.get('loan_date')
        if loan_date < now().date():
            raise forms.ValidationError(
                f"Fecha invalida"
            )
        return loan_date