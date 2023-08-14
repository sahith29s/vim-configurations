# I have created this file - Sahith 
from django.http import HttpResponse


def index(request):
    return HttpResponse("<h1> this is me in vim </h1>")

def about(request):
    return HttpResponse("this is me in about ")

