from django.http import HttpResponse, JsonResponse
def home(request):
    print("home page requested")
    return JsonResponse({"sahith" : "this is me sahith"})
