"""
URL configuration for homebanking project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from sucursales.views import BranchListCreateAPIView
from clientes.views import CustomerListCreateAPIView, CustomerCambiaDireccion, CustomerAccountListCreateAPIView, LoanListAPIView
from empleados.views import BranchLoansListAPIView, CustomerCardsListAPIView, LoanCreateAPIView, LoanDeleteAPIView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/clientes/', CustomerListCreateAPIView.as_view(), name='customer-list-create'),
    path('api/clientes/direccion', CustomerCambiaDireccion.as_view(), name='customer-retrieve-update'),
    path('api/clientes/prestamos/', LoanListAPIView.as_view(), name='loan-list'),
    path('api/sucursales/', BranchListCreateAPIView.as_view(), name='branch-list-create'),
    path('api/cuentas/', CustomerAccountListCreateAPIView.as_view(), name='customer-account-list-create'),
    path('api/empleados/prestamosXsucursal/<int:pk>', BranchLoansListAPIView.as_view(), name='loan-list'),
    path('api/empleados/tarjetasXcliente/<int:pk>', CustomerCardsListAPIView.as_view(), name='card-list'),
    path('api/empleados/solicitudPrestamo/',LoanCreateAPIView.as_view(), name='loan-create'),
    path('api/empleados/eliminarPrestamo/<int:pk>',LoanDeleteAPIView.as_view(), name='loan-destroy'),
    path('clientes/', include('clientes.urls')),
    path('cuentas/', include('cuentas.urls')),
    path('tarjetas/', include('tarjetas.urls')),
    path('prestamos/', include('prestamos.urls')),
    path('login/', include('login.urls')),
]
