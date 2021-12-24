from typing_extensions import Required
from django.db import models
import uuid
from django.db.models.fields import CharField, DateTimeField, IntegerField, TextField, UUIDField
from django.db.models.fields.files import ImageField 
# Create your models here.

class book(models.Model):
    id = UUIDField(default=uuid.uuid4,primary_key=True,unique=True,editable=False)
    title = CharField(max_length=200)
    image = ImageField(upload_to="books/",default="static/player/image.png") 
    description= TextField(blank=True,null=True)
    created = DateTimeField(auto_now_add=True)
    genre=models.ManyToManyField('genre')
    author= models.CharField(max_length=200,default='string')
    pdf = models.FileField(upload_to='uploads',null='True')
    # audio = models.FileField(upload_to='music',null='True')
    
    def __str__(self):
        return self.title


class genre(models.Model):
    id = UUIDField(default=uuid.uuid4,primary_key=True,unique=True,editable=False)
    name=CharField(max_length=200)
    description=TextField(blank=True,null=True)
        
    def __str__(self):
        return self.name


class playlist(models.Model):
    name = CharField(max_length=200)
    books= models.ManyToManyField('book')
    # image = ImageField()
    def __str__(self):
        return str(self.name)




