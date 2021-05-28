from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(null=True, blank=True,default='/default_product.png' )
    brand = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField( blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    countInStock = models.IntegerField(blank=True, null=True, default=0)
    rating = models.DecimalField(max_digits=7,decimal_places=2,blank=True, null=True)
    numReviews = models.IntegerField(blank=True, null=True, default=0)
    dateCreated = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):

        return self.name

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    name=models.CharField(max_length=200, blank=True, null=True)
    rating = models.DecimalField(max_digits=7,decimal_places=2,blank=True, null=True)
    comment = models.TextField( blank=True, null=True)
    dateCreated=models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    paymentMethod = models.CharField(max_length=200, blank=True, null=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    dateCreated = models.DateTimeField(auto_now_add=True)
    _id= models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return str(self.dateCreated)[0:16]

class OrderItems(models.Model):
    product=models.ForeignKey(Product, on_delete=models.CASCADE)
    order=models.ForeignKey(Order, on_delete=models.CASCADE)
    name=models.CharField(max_length=200, blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    image = models.ImageField(null=True, blank=True, )
    _id=models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    address = models.CharField(max_length=200, blank=True, null=True)
    city = models.CharField(max_length=200, blank=True, null=True)
    postalCode = models.CharField(max_length=200, blank=True, null=True)
    country = models.CharField(max_length=200, blank=True, null=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2,blank=True, null=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        
        return self.address