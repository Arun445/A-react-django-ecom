from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product
from ..serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status



@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    data=request.data
    user = request.user
    product = Product.objects.create(
        user=user,
        name=data['name'],
        #image=data['image'],
        brand=data['brand'],
        category=data['category'],
        description=data['description'],
        price=data['price'],
        countInStock=data['countInStock'],
        
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

