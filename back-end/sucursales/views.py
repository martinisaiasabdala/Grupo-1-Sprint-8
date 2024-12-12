from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import Branch
from .serializers import BranchSerializer

# Create your views here.

class BranchListCreateAPIView(ListCreateAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

