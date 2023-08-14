from django.db import models

# Create your models here.

class Students(models.Model):
    naam = models.CharField(max_length=100),
    city = models.CharField(max_length=200),
    
