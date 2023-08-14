from django.urls import path , include
from . import views


urlpatterns = [

    path("" , views.index, name="index"),
    path("about/" , views.about , name="about"),
    path("contact/" , views.contact , name="contact"),
    path("tracker/" , views.tracker , name="tracker"),
    path("search/" , views.search , name="search"),
    path("productview/" , views.productview , name="productview"),
    path("checkout/" , views.checkout, name="checkout")

]
