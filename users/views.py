from django.http.response import HttpResponse
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.shortcuts import render,redirect
from django.contrib import messages
from .models import user
from .form import userlogin,usersignup
# Create your views here.

def login(request):
    return render(request,'users/login.html')

def signup(request):
    return render(request,'users/sign_up.html')

def forgotpassword(request):
    return render(request,'users/forgot_password.html')

def loginuser(request): 
    
    if request.user.is_authenticated:
        return redirect('../')

    if request.method == "POST":
        username = request.POST.get('username','').lower()
        password = request.POST.get('password','')
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'Username does not exist')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(request.GET['next'] if 'next' in request.GET else 'account')
        else:
            messages.error(request, 'Username OR password is incorrect')
        return render(request, 'player/home.html')

def logoutUser(request):
    logout(request)
    messages.info(request, 'User was logged out!')
    return redirect('login')

def resetpassword(request):
    pass

def edit_profile(request):
    pass

def view_profile(request):
    pass
