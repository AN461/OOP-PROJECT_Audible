from django.db.models import fields
from .models import book
from django.forms import ModelForm
class bookForm(ModelForm):
    class Meta:
        model = book
        fields = '__all__'