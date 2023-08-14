from django.db import models

# Create your models here.

class Todo(models.Model):
    todoTitle = models.CharField(max_length=30)
    todoDescription = models.CharField(max_length=301)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task