from django.db import models

# Create your models here.

class Company(models.Model):
    company_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    about = models.TextField()

    type = models.CharField(max_length=100, choices=(
        ("IT" , "IT"), 
        ("NON IT" , "NON IT"),
        ("LODU" , "LODU"),
        ("MOBILE PHONES" , "MOBILE PHONES")
        ))

    added_date = models.DateField(auto_now_add=True)
    active = models.BooleanField(default=True)


    
class Employee(models.Model);
