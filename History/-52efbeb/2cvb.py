# I have created this file - Sahith 

from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request , "index.html")

def analyze(request):

    symbols = """!@#$%^&*()_-+=,./;:"'[{}]\|"""
    emptyString= ""
    djangoText = request.GET['text']

    for char in djangoText:
        if not(char in symbols):
            emptyString += char

    print(djangoText)
    return render(request , "analyze.html" , { "removePunc" : emptyString} )