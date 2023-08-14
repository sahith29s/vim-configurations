from django.urls import path
from home import views

urlpatterns = [
    path("boy/<string:id>" , views.index)
]
