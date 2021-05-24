
from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product
from ..serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

def nuts(request):
    return Response('nuts')