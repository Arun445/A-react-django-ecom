
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', include('api.urls.product_urls')),
    path('api/users/', include('api.urls.users_urls')),
    path('api/orders/', include('api.urls.orders_urls')),
    path('auth/', include('djoser.urls')),
    #path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)