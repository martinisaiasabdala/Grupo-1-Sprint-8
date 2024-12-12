from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_customer_account, name='create_account'),
    path('list/', views.client_accounts, name='list_accounts'),
]