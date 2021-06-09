from django.urls import path
from ..views import user_views as views




urlpatterns =[
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),

    path('list-all/', views.getUsers, name='get-users'),
    path('profile/', views.getUserProfile, name='user-profile'),
    
    path('profile/update/', views.updateUserProfile, name='user-update'),

    path('<str:pk>/', views.getUserById, name='user-profile-by-id'),

    path('edit/<str:pk>/', views.editUser, name='edit-user'),
    path('delete/<str:pk>/', views.userDelete, name='user-delete'),
    path('', views.getUsers, name='users'),

]