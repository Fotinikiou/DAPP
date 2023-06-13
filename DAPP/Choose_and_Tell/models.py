from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image

# Create your models here.
class User(AbstractUser):
    pass


class Person(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "player", blank = True)
    #image = models.ImageField(upload_to='person_images', null=True, blank=True)
    text_clarity_setting = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    #speed = models.DecimalField(max_digits=5, decimal_places=2)
    #preference = models.CharField(max_length=10, choices=(
       # ('mouse', 'Mouse'),
        #('button', 'Button'),
   # ))

    def save(self, *args, **kwargs):
        kwargs.pop('force_insert', None)
        super().save(*args, **kwargs)

    def serialize(self):
        return {
            "id": self.id,
            "player": self.player.username,
            "text_clarity_setting": self.text_clarity_setting
        }