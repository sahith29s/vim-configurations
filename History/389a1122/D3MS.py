from django.shortcuts import render

# Create your views here.

def index(request):
    if(request.method == "POST"):
        
    return render(request , "index.html")

def tasks(request):
    return render(request ,  "tasks.html")
