# Generated by Django 3.2.3 on 2021-06-05 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='shippingaddress',
            name='shippingLocation',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='shippingMethod',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
