from django.db import models

# Create your models here.

class Todo(models.Model):
    task = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    time = models.DateTimeField(auto_now_add=True)