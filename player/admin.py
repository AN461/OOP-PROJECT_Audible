from django.contrib import admin
from .models import book,genre, playlist
# Register your models here.
admin.site.register(book)
admin.site.register(genre)
admin.site.register(playlist)



