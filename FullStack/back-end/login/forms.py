from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from clientes.models import Customer

class CustomAuthenticationForm(AuthenticationForm):
    username = forms.CharField(max_length=255, label="Usuario")
    password = forms.CharField(widget=forms.PasswordInput, label="Contraseña")



class SignUpForm(forms.ModelForm):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput)
    email = forms.EmailField()
    dni = forms.CharField(max_length=10)  # DNI del cliente
    customer_name = forms.CharField(max_length=50)  # Nombre del cliente
    customer_surname = forms.CharField(max_length=50)  # Apellido del cliente
    customer_birth = forms.DateField(widget=forms.SelectDateWidget(years=range(1900, 2025)))  # Fecha de nacimiento del cliente
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def save(self, commit=True):
        # Primero, guardar el usuario
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])  # Encriptar la contraseña

        if commit:
            user.save()

        # Crear el cliente con los datos proporcionados
        customer = Customer.objects.create(
            customer_DNI=self.cleaned_data['dni'],
            customer_name=self.cleaned_data['customer_name'],
            customer_surname=self.cleaned_data['customer_surname'],
            customer_birth=self.cleaned_data['customer_birth'],
            user=user  # Asocia al usuario creado con este cliente
        )

        return user  # Devuelve el usuario creado