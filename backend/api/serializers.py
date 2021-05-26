from rest_framework import serializers
from .models import Product, Order, OrderItems, ShippingAddress
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields= '__all__'

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)


    class Meta :
        model = User
        fields = ['id','_id', 'username', 'email', 'name','isAdmin']
    
    def get_isAdmin(self, obj):
        return obj.is_staff
        
    def get_name(self, obj):
        name = obj.first_name
        if name =='':
            name = obj.email
        return name

    def get__id(self, obj):
        return obj.id


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields= ['id','_id', 'username', 'email', 'name','isAdmin', 'token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=ShippingAddress
        fields= '__all__'

class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model=OrderItems
        fields= '__all__'

class OrderSerializer(serializers.ModelSerializer):
    orders = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=Order
        fields= '__all__'

    def get_orders(self,obj):

        items = obj.orderitems_set.all()
        serializer = OrderItemsSerializer(items,many=True)
        return serializer.data

    def get_shippingAddress(self,obj):

        try:
            address = ShippingAddressSerializer(obj.shippingAddress,many=False)
        except:
            address = False
        return address

    def get_user(self,obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data