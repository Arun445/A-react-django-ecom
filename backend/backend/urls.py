
from django.contrib import admin
from django.urls import path, include,re_path

from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/products/', include('api.urls.product_urls')),
    path('api/users/', include('api.urls.users_urls')),
    path('api/orders/', include('api.urls.orders_urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]