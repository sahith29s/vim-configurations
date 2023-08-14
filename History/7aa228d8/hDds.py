from django.urls import path , render
from . import views

urlpatterns = [
    path("" , views.index , name="index")
]
