# Generated by Django 3.2.9 on 2021-12-17 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0003_auto_20211216_1241'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='image',
            field=models.ImageField(default='static/player/image.png', upload_to='books/'),
        ),
    ]
