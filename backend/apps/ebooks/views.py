from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response

class EbookView(APIView):
    def get(self, request):
        return Response({"message": "Hello, this is the Ebook API!"})