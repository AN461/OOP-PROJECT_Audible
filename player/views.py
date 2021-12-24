from django.shortcuts import redirect, render
import pyttsx3,PyPDF2
from django.db.models import FileField
from .models import book
from .forms import bookForm
# Create your views here.

def home(request):
    return render(request,'player/homepage.html')

def uploadbook(request):
    form=bookForm()
    if request.method == "POST":
        form = bookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    return render(request,'player/upload_page.html',{'form':form})

# def addaudio(pdf_path,request):
#     with open(pdf_path,'rb') as f:
#         k=book.objects.create()
#         pdf = PyPDF2.PdfFileReader(f)
#         k=pyttsx3.init()
#         k.runAndWait(pdf)
#         k.save_to_file(pdf,book.title)
#         book.audio=FileField(upload_to='audio',default='')
#         m.save()
        