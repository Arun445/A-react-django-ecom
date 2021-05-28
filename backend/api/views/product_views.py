from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product
from ..serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import serializers, status



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


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    try:
        data=request.data
        product = Product.objects.get(_id=pk)
     
        product.name=data['name']
        #product.image=data['image']
        product.brand=data['brand']
        product.category=data['category']
        product.description=data['description']
        product.price=data['price']
        product.countInStock=data['countInStock']
        product.save()
        serializer= ProductSerializer(product,many=False)

        return Response(serializer.data)
    except:
        return Response({'detail':'The product you are trying to delete dosent exist.'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    try:
        product = Product.objects.get(_id=pk)
        product.delete()
        return Response('product deleted')
    except:
        return Response({'detail':'The product you are trying to delete dosent exist.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def deleteSelectedProducts(request):  
    try:
        data= request.data
        for i in data:      
            newData= (data[i])
            for id in newData:
                if id != -1:
                    Product.objects.get(_id=id).delete()

        return Response('products deleted')
    except:
        return Response({'detail':'The product you are trying to delete dosent exist.'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def uploadImage(request):  
    data = request.data

    product_id = data['product_id']

    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()
    return Response('image uploaded')