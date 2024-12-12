from django.db import models

# Create your models here.
class Address(models.Model):
    address_id = models.AutoField(primary_key=True)
    address_name = models.CharField(max_length=45)

    class Meta:
        db_table = 'Address'

    def __str__(self):
        return self.address_name


class Branch(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_name = models.CharField(max_length=50)
    fk_branch_address = models.ForeignKey(Address, on_delete=models.CASCADE, db_column='fk_branch_address_id')

    class Meta:
        db_table = 'Branch'

    def __str__(self):
        return self.branch_name