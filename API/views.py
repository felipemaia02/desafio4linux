from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import requests
import json

class HelloView(APIView):
    permission_classes = (IsAuthenticated, ) 

    def get(self, request):
        content = requests.get('https://api.publicapis.org/entries')

        return Response(content.json())