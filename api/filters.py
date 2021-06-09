import django_filters
from django_filters import DateFilter

from .models import *

class ProductsFilter(django_filters.FilterSet):

    class Meta:
        model= Product
        fields=('name','category','price','_id')