from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('login',views.login,name='login_page'),
    path('signup',views.signup,name='signup_page'),
    path('forgotpassword',views.forgotpassword,name='forgotpassword_page'),
    path('loginuser/',views.loginuser,name='loginuser')
]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)