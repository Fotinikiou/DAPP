from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image

# Create your models here.
class User(AbstractUser):
    pass


class Person(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "player", blank = True)
    text_clarity_setting = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    brightness = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    text_size = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank = True )
    text_size_bool = models.BooleanField(default=False)
   
    def save(self, *args, **kwargs):
        kwargs.pop('force_insert', None)
        super().save(*args, **kwargs)

    def serialize(self):
        return {
            "id": self.id,
            "player": self.player.username,
            "text_clarity_setting": self.text_clarity_setting,
            "brightness": self.brightness,
            "text_size": self.text_size,
            "text_size_bool": self.text_size_bool
        }