# Generated by Django 4.2.1 on 2023-06-15 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Choose_and_Tell', '0003_remove_person_contrast_setting_remove_person_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='brightness',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]