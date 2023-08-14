from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    id = request.GET.get('id')
    print(id)
    return HttpResponse("this is me in vim")
    