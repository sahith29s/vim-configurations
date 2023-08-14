# I have created this file - Sahith 

from django.shortcuts import render


def index(request):
    return render(request , "index.html")
