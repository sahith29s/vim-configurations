# I have created this file - Sahith 

from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request , "index.html")

def analyze(request):

    djangoText = request.GET['text']

    print(djangoText)

    return render(request , "analyze.html" , { "removePunc" : djangoText} )

