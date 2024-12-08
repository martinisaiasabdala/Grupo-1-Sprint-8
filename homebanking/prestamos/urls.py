from . import views
from django.urls import path

urlpatterns = [path('solicitar/', views.solicitar_prestamo, name='solicitar_prestamo'),
                path('mis_prestamos/', views.mis_prestamos, name='mis_prestamos')
]
               