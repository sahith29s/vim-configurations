from django.shortcuts import render
from home.models import Todo
from django.http import HttpResponse

# Create your views here.

def index(request):
    if(request.method == "POST"):
        insTodoTitle = request.POST['todoTitle']
        insTodoDescription = request.POST['todoDescription']
        instance = Todo(
            todoTitle = insTodoTitle ,
            todoDescription = insTodoDescription
        )
        instance.save()
    #         todoTitle = models.CharField(max_length=30)
    # todoDescription = models.CharField(max_length=300)

    return render(request , "index.html")

def tasks(request):
    return render(request , "tasks.html")