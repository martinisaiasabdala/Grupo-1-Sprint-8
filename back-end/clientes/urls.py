from django.urls import path
from . import views

urlpatterns = [
    path('detail/', views.customer_detail, name='detail'),
]