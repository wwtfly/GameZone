from django.db import models

# Create your models here.
from django.db import models

class GameResource(models.Model):
    title = models.CharField(max_length=200)
    platform = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    upload_date = models.DateTimeField(auto_now_add=True)
    popularity = models.IntegerField(default=0)
    image = models.ImageField(upload_to='resources/')
    
    def __str__(self):
        return self.title

