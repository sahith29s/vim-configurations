from django.urls import path
from home import views

urlpatterns = [
    path("boy/<str:id>" , views.index)
]
