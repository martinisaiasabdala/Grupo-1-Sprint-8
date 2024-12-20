# Generated by Django 5.1.2 on 2024-12-08 03:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prestamos', '0002_remove_loan_loan_payment_loan_created_at_and_more'),
        ('sucursales', '0002_remove_branch_branch_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='loan',
            name='fk_loan_branch',
            field=models.ForeignKey(db_column='fk_loan_branch_id', default=1, on_delete=django.db.models.deletion.CASCADE, to='sucursales.branch'),
            preserve_default=False,
        ),
    ]
