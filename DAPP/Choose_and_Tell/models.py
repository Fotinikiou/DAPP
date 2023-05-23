from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image

# Create your models here.
class User(AbstractUser):
    pass


class Person(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "player", blank = True)
    image = models.ImageField(upload_to='person_images', null=True, blank=True)
    contrast_setting = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    speed = models.DecimalField(max_digits=5, decimal_places=2)
    preference = models.CharField(max_length=10, choices=(
        ('mouse', 'Mouse'),
        ('button', 'Button'),
    ))

    def save(self):
        super().save()
        img = Image.open(self.image.path)
        if img.width > 150 or img.height > 150:
            new_dim = (150, 150)
            img.thumbnail(new_dim)
            img.save(self.image.path) 

    def __str__(self):
        return str(self.player)