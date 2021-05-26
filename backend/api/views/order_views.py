
from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product, Order, OrderItems, ShippingAddress
from ..serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data= request.data

    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response({'detail':'No order items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        


        return Response('order')