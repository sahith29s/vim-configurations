from django.shortcuts import render
from home.

# Create your views here.

def index(request):
    if(request.method == "POST"):
        todoTitle = request.POST['todoTitle']
        todoDescription = request.POST['todoDescription']
        print(f"this is todoTitle {todoTitle} this is todoDescription {todoDescription}")
        
    return render(request , "index.html")

def tasks(request):
    return render(request ,  "tasks.html")
