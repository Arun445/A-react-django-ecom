
from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product, Order, ShippingAddress, OrderItems
from ..serializers import ProductSerializer,OrderSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status


#SUKURTI ORDERI PRIE JO PRISKIRT ORDERITEMSUS IR SHIPPINGADRESA
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data= request.data

    order = Order.objects.create(
        user = user,
        paymentMethod = data['paymentMethod'],
        shippingPrice = data['shippingPrice'],
        totalPrice = data['totalPrice'],
    )
    
    shippingAddress = ShippingAddress.objects.create(
        order= order,
        address= data['shippingAddress']['address'],
        city= data['shippingAddress']['city'],
        country= data['shippingAddress']['country'],
        postalCode= data['shippingAddress']['zipcode'],
    )

    for i in data['cartItems']:
        product = Product.objects.get(_id=i['product'])
        item = OrderItems.objects.create(
            product=product,
            order=order,
            name=product.name,
            quantity=i['quantity'],
            price=i['price'],
            image=product.image.url
        )
        product.countInStock -= int(item.quantity)
        product.save()

    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data)