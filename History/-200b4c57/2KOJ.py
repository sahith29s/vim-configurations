from django.urls import path
from home import views

urlpatterns = [
    path("boy/<int:id>" , views.index)
]
