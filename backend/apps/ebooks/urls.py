

from django.urls import path
from .views import EbookView

urlpatterns = [
    path('', EbookView.as_view(), name='ebook-view'),
]