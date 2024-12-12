from django.contrib import admin
from .models import CustomerAccount, AccountType
# Register your models here.

admin.site.register(CustomerAccount)
admin.site.register(AccountType)