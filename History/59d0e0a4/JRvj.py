from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    if(request.method == "POST"):
        insTodoTitle = request.POST['todoTitle']
        insTodoDescription = request.POST['todoDescription']
        instance = Task(
            todoTitle = insTodoTitle ,
            todoDescription = insTodoDescription
        )
        instance.save()
    return render(request , "index.html")

def tasks(request):
    return render(request , "tasks.html")