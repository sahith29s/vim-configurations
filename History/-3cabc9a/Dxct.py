from django.db import models

# Create your models here.

class Student(models.Model):
    naam = models.CharField(max_length=50),
    city = models.CharField(max_length=100)
    def __str__(self):
        return self.city
        