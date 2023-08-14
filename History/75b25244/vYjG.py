from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def index(request):
    return render(request, "shop/index.html")

def about(request):
    return HttpResponse("this is me in about")

def contact(request):
    return HttpResponse("this is me in contact")

def tracker(request):
    return HttpResponse("this is me in tracker")

def search(request):
    return HttpResponse("this is me in search")

def productview(request):
    return HttpResponse("this is me in productview")

def checkout(request):
    return HttpResponse("this is me in checkout")