from django.http import HttpResponse
def home(request):
    print("home page requested")
    return HttpResponse("this is me in vim")
