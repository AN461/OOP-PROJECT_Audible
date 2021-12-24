from typing_extensions import Required
from django.db import models
import uuid
from django.db.models.fields import CharField, DateTimeField, EmailField, IntegerField, TextField, UUIDField
from django.db.models.fields.files import ImageField 
# Create your models here.

class user(models.Model):
    id = IntegerField(primary_key='True')
    username = CharField(max_length=200)
    password = CharField(max_length=20)   
    mailid = EmailField(max_length=450,unique=True)
    image = ImageField(null='true',blank='true',default='user')
    def __str__(self):
        return self.username

