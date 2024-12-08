from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import SignUpForm, CustomAuthenticationForm  # Usamos nuestro formulario
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required

# Vista de home
@login_required
def home(request):
    # El objeto 'request.user' tiene toda la información del usuario autenticado
    return render(request, 'login/home.html', {'user': request.user})

def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        
        if form.is_valid():
           
            user = form.save()

            
            login(request, user)

            
            return redirect('home')  
    else:
        form = SignUpForm()

    return render(request, 'login/register.html', {'form': form})

def custom_login(request):
    if request.user.is_authenticated:
        return redirect('home')  # Si el usuario ya está autenticado, redirigirlo
    if request.method == 'POST':
        form = CustomAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            # Autenticamos al usuario
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            
            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                # Iniciar sesión
                login(request, user)
                messages.success(request, '¡Bienvenido de nuevo!')
                return redirect('home')  # Redirige a la página principal u otra página
            else:
                messages.error(request, 'Usuario o contraseña incorrectos.')
        else:
            messages.error(request, 'Por favor corrige los errores en el formulario.')
    else:
        form = CustomAuthenticationForm()

    return render(request, 'login/login.html', {'form': form})