# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2018-04-22 18:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_auto_20180422_1823'),
    ]

    operations = [
        migrations.AddField(
            model_name='subcategoria',
            name='imagen2',
            field=models.FileField(blank=True, null=True, upload_to='static'),
        ),
        migrations.AddField(
            model_name='subcategoria',
            name='imagen3',
            field=models.FileField(blank=True, null=True, upload_to='static'),
        ),
    ]