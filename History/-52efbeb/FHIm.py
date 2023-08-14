# I have created this file - Sahith 
from django.http import HttpResponse


def index(request):
    return HttpResponse("this is me in vim")
    
def about(request):
    return HttpResponse("this is me in about ")

