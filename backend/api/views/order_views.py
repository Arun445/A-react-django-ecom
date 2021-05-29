
from django.shortcuts import render
from django.contrib.auth.models import User

from ..models import Product, Order, ShippingAddress, OrderItems
from ..serializers import ProductSerializer,OrderSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

from datetime import datetime

#SUKURTI ORDERI PRIE JO PRISKIRT ORDERITEMSUS IR SHIPPINGADRESA



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):
    user = request.user
    

    try:
        order = Order.objects.get(_id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order,many=False)
            return Response(serializer.data)
        else:
            Response({'detail':'Not authorized to view this order'}, status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail':'Order does not exist'}, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    
    user=request.user
    order = user.order_set.all()
    
    if len(order) == 0:
        return Response({'detail':'You dont have any orders yet'},status=status.HTTP_400_BAD_REQUEST)
    else:
        serialier = OrderSerializer(order,many=True)
        return Response(serialier.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrders(request):
    

    order = Order.objects.all()
    
    if len(order) == 0:
        return Response({'detail':'No orders'},status=status.HTTP_400_BAD_REQUEST)
    else:
        serialier = OrderSerializer(order,many=True)
        return Response(serialier.data)


    

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def orderIsDelivered(request):
    data = request.data
    
    order = Order.objects.get(_id=data)
    order.isDelivered = True
    order.deliveredAt = datetime.now()
    order.save()
    return Response('Order is delivered')
    
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
            image=product.image
        )
        product.countInStock -= int(item.quantity)
        product.save()

    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPay(request,pk):
    order = Order.objects.get(_id=pk)

    order.isPaid = True
    order.paidAt = datetime.now()
    
    order.save()
    return Response('Order was paid')