from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import GameResource

@api_view(['GET'])
def resource_list(request):
    resources = GameResource.objects.all()
    resource_data = [{"title": resource.title, "image": resource.image.url} for resource in resources]
    return Response(resource_data)

