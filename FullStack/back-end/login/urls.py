from django.contrib.auth.views import LogoutView  # Vista de logout incorporada
from . import views
from django.urls import path

urlpatterns = [
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', views.register, name='register'),    
    path('login/', views.custom_login, name='login'),  
    path('home/', views.home, name='home'),
]