from django.db.models import fields
from django.forms import ModelForm
from .models import user

class userlogin(ModelForm):
    class Meta:
        model = user
        fields = '__all__'
        

class usersignup(ModelForm):
    class Meta:
        model = user
        fields = '__all__'

class Passwordreset(ModelForm):
    pass
