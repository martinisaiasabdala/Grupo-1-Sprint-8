from django.db import models
from Sucursal.models import Branch, Address

# Create your models here.
class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.CharField(max_length=50)
    employee_surname = models.CharField(max_length=50)
    employee_hire_date = models.DateField()
    employee_DNI = models.CharField(max_length=10)
    fk_employee_branch = models.ForeignKey(Branch, on_delete=models.CASCADE, db_column='fk_employee_branch_id')
    fk_employee_address = models.ForeignKey(Address, on_delete=models.CASCADE, db_column='fk_employee_address_id')

    class Meta:
        db_table = 'Employee'

    def __str__(self):
        return f"{self.employee_name} {self.employee_surname}"



