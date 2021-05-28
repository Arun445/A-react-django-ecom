from django.urls import path
from ..views import product_views as views




urlpatterns =[

    path('', views.getProducts, name='products'),
    path('create/', views.createProduct, name='create-product'),
    path('upload/', views.uploadImage, name='image-upload'),

    path('delete/selected/', views.deleteSelectedProducts, name='delete-selected-product'),
    path('update/<str:pk>/', views.updateProduct, name='update-product'),
    path('delete/<str:pk>/', views.deleteProduct, name='delete-product'),
    
    
    path('<str:pk>/', views.getProduct, name='product'),
]