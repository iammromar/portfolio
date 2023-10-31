from django.contrib import admin
from django.urls import path,include
from frontend.views import mydatas

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
]
