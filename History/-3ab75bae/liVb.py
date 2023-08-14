from django.db import models

# Create your models here.

class Todo(models.Model):
    todoTitle = models.CharField(max_length=50)
    todoDescription = models.CharField(max_length=300)

    def __str__(self):
        return self.todoTitle
        

