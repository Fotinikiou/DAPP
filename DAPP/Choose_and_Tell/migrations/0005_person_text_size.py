# Generated by Django 4.2.1 on 2023-06-16 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Choose_and_Tell', '0004_person_brightness'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='text_size',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=4, null=True),
        ),
    ]
