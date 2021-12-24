from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('',views.home,name='home'),
    path('uploadbook',views.uploadbook,name='upload'),
    # path('player',views.player,name="")
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
