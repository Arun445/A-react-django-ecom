from django.shortcuts import render
from django.contrib.auth.models import User
from django.core.paginator import Paginator,PageNotAnInteger, EmptyPage

from ..models import Product,Review
from ..serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import serializers, status



@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query=''
    products = Product.objects.filter(name__icontains=query)
    page = request.query_params.get('page')
    
    
    paginator = Paginator(products,2)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page ==None:
        page=1
    

    page=int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({'products' :serializer.data, 'page':page, 'pages':paginator.num_pages})



@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:5]
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
    print(data)
    user = request.user
    product = Product.objects.create(
        user=user,
        name=data['name'],
        image = request.FILES.get('image'),
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

#----------------REVIEWS---------------

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    data= request.data
    product= Product.objects.get(_id=pk)

    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        return Response({'detail':'You have already wrote a review on this product'}, status=status.HTTP_400_BAD_REQUEST)
    elif data['rating'] ==0:
        return Response({'detail':'Please select a rating from 1-5'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment =data['comment'],
        )
        reviews = product.review_set.all()
        product.numReviews = len(reviews)
        total = 0
        for review in reviews:
            total += review.rating 

        product.rating = total / len(reviews)
        product.save()

        
        
        return Response('Review was added')
 