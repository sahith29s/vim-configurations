from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    if(request.method == "POST"):
        todoTitle = request.POST['todoTitle']
        todoDescription = request.POST['todoDescription']
        print(f"the title is {todoTitle} the description is {todoDescription}")

    return render(request , "index.html")

def tasks(request):
    return render(request , "tasks.html")