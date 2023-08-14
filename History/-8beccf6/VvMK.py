from django.shortcuts import render 
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request , "home.html")

def add(request):
    num1 = int(request.GET.get('num1'))
    num2 = int(request.GET.get('num2'))
    added = num1 + num2
    return render(request , "add.html" , {"num1" : num1 , "num2" : num2})
    
