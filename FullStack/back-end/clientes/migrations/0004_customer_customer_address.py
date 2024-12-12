# Generated by Django 5.1.2 on 2024-12-08 01:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0003_remove_customer_fk_customer_address_and_more'),
        ('sucursales', '0002_remove_branch_branch_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='customer_address',
            field=models.ForeignKey(db_column='fk_customer_address_id', default=1, on_delete=django.db.models.deletion.CASCADE, to='sucursales.address'),
            preserve_default=False,
        ),
    ]