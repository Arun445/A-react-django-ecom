from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from ..serializers import UserSerializer, UserSerializerWithToken

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import serializers, status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        
        for k,v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        detail = {'detail':'User with this email already exists'}
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    
    serializer = UserSerializerWithToken(user, many=False)
    
    data = request.data
    
    if user.first_name == data['name'] and user.email == data['email'] and data['password'] == '':
        detail = {'detail':"You didn't change anything"}
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)
    elif user.password == data['password']:
        detail = {'detail':"You didn't change anything"}
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)

    else:
        
        user.first_name = data['name']
        user.username = data['email']
        user.email = data['email']

        if data['password'] != '':
            user.password = make_password(data['password'])

        user.save()
        return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def editUser(request,pk):
    user = User.objects.get(id=pk)  
    data = request.data   

    if user.first_name == data['name'] and user.email == data['email'] and user.is_staff == data['isAdmin']:
        detail = {'detail':"You didn't change anything"}
        return Response(detail, status=status.HTTP_400_BAD_REQUEST)
    else:     
        user.first_name = data['name']
        user.username = data['email']
        user.email = data['email']
        user.is_staff = data['isAdmin']
        

        user.save()
        serializer = UserSerializer(user,many=False)
        
        return Response(serializer.data)
    


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def userDelete(request, pk):
    user = User.objects.get(id=pk)
    user.delete()
    
    return Response('deleted')
