
from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product, Order, OrderItems, ShippingAddress
from ..serializers import ProductSerializer, OrderSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import serializers, status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data= request.data

    cartItems = data['cartItems']

    if cartItems and len(cartItems) == 0:
        return Response({'detail':'No order items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            totalPrice=data['totalPrice'],
            shippingPrice=data['shippingPrice'],
            #isPaid=data['isPaid'],
            #paidAt=data['paidAt'],
            #isDelivered=data['isDelivered'],
            #deliveredAt=data['deliveredAt'],
        )
        shippingAddress = ShippingAddress.objects.create(
            order = order,
            address = data['shippingAddress']['address'],
            city = data['shippingAddress']['city'],
            postalCode = data['shippingAddress']['zipcode'],
            country = data['shippingAddress']['country'],
         )
        for i in cartItems:
            product = Product.objects.get(_id=i['product'])
            item = OrderItems.objects.create(
                product=product,
                order=order,
                name=product.name,
                quantity=i['quantity'],
                price=i['price'],
                image=product.image.url
            )
            product.countInStock -= item.quantity
            product.save()
        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)