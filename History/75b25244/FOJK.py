from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def index(request):
    return render(request, "shop/index.html")

def about(request):
    return HttpResponse("this is me in about")

def tracker(request):
    return HttpResponse("this is me in tracker")

def about(request):
    return HttpResponse("this is me in about")

def about(request):
    return HttpResponse("this is me in about")

def about(request):
    return HttpResponse("this is me in about")

def about(request):
    return HttpResponse("this is me in about")