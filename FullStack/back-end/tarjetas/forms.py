from django import forms
from .models import Card
from .models import CardBrand

class CardForm(forms.ModelForm):
    class Meta:
        model = Card
        fields = ['card_number', 'card_cvv', 'card_grand_date', 'card_expire_date', 'card_type', 'fk_card_brand']
        labels = {
            'card_number': 'Número de Tarjeta',
            'card_cvv': 'CVV',
            'card_grand_date': 'Fecha de Otorgamiento',
            'card_expire_date': 'Fecha de Expiración',
            'card_type': 'Tipo de Tarjeta',
            'fk_card_brand': 'Marca de la Tarjeta'
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['fk_card_brand'].queryset = CardBrand.objects.all()  # Filtrar marcas de tarjeta