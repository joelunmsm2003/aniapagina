# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2018-04-15 21:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_photoproducto_photo_olx'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='descripcion',
            field=models.TextField(blank=True, max_length=10000, null=True),
        ),
    ]