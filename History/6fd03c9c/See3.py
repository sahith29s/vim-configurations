from django.shortcuts import render
from django import http
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse("Home Page")

def room(request):
    return HttpResponse("room")

