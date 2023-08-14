from django.urls import path
from django.shortcuts import render


urlpatterns = [
    path("" , render("index.html"))
    
]
