from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    if(request.method == "POST"):
        todoTitle = request.POST['todoTitle']
        todoTitle = request.POST['todoTitle']

    return render(request , "index.html")

def tasks(request):
    return render(request , "tasks.html")