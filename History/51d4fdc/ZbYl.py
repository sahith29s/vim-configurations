from django.db import models

# Create your models here.
class Todo(models.Model):
    task = models.CharField(max_length=30)
    desc = models.CharField(max_length=300)
