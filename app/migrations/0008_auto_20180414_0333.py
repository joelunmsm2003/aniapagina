# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2018-04-14 03:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20180414_0332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='imagen',
            field=models.FileField(blank=True, null=True, upload_to='static'),
        ),
    ]
