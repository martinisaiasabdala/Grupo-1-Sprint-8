# Generated by Django 5.1.2 on 2024-12-08 01:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sucursales', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='branch',
            name='branch_address',
        ),
    ]