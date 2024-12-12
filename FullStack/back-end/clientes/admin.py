from django.contrib import admin
from .models import Customer, ClientType
# Register your models here.

admin.site.register(Customer)
admin.site.register(ClientType)