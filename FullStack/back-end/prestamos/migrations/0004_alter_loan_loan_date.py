# Generated by Django 5.1.2 on 2024-12-13 00:47

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prestamos', '0003_loan_fk_loan_branch'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loan',
            name='loan_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]