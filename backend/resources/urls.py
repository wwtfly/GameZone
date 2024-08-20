from django.urls import path
from .views import resource_list

urlpatterns = [
    path('api/resources/', resource_list),
]
