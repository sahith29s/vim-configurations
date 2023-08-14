from django.http import HttpResponse
def home(request):
    print("home page requested")
    return HttpResponse("<h1>this is me in vim</h1>")
