# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_card, name='create_card'),
    path('mis_tarjetas/', views.client_cards, name='client_cards'),
]