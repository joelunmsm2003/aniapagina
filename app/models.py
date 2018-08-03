# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = True` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals
from django.contrib.auth.models import Group, User
from django.db import models

class Animal(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'animal'

class Estado(models.Model):
    nombre = models.CharField('Primera imagen de portada?',max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'estado'

    def __unicode__(self):
        return self.nombre


class Cliente(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING, db_column='user', blank=True, null=True)
    color = models.CharField(max_length=1000, blank=True, null=True)
    nombre = models.CharField(max_length=1000, blank=True, null=True)
    imagen = models.FileField(max_length=1000,upload_to='static', blank=True, null=True)
    class Meta:
        managed = True
        db_table = 'cliente'




class Categoria(models.Model):
    nombre = models.CharField(max_length=100, blank=True, null=True)
    #icon = models.CharField(max_length=1000, blank=True, null=True)
    descripcion = models.TextField(max_length=10000, blank=True, null=True)
    #imagen = models.FileField(upload_to='static', blank=True, null=True)
    color = models.CharField(max_length=1000, blank=True, null=True)
    relink = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'categoria'

    
    def __unicode__(self):
        return self.nombre

class Subcategoria(models.Model):
    categoria = models.ForeignKey(Categoria, models.DO_NOTHING, db_column='categoria', blank=True, null=True)
    nombre = models.CharField(max_length=100, blank=True, null=True)
    subtitulo = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.TextField(max_length=10000, blank=True, null=True)
    imagen = models.FileField(upload_to='static',blank=True, null=True)
    imagen2 = models.FileField(upload_to='static',blank=True, null=True)
    imagen3 = models.FileField(upload_to='static',blank=True, null=True)
    check_imagen = models.BooleanField('Imagen para portada?',max_length=100, default=0)
    activo = models.ForeignKey(Estado, models.DO_NOTHING, db_column='activo', blank=True, null=True)
    relink = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'subcategoria'
        verbose_name = 'Imagene'

    def __unicode__(self):
        return self.nombre


class Provincia(models.Model):
    name = models.CharField(max_length=110, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'provincia'

    def __unicode__(self):
        return self.name


class Datodepagina(models.Model):
    titulo = models.CharField(max_length=110, blank=True, null=True)
    direccion = models.CharField(max_length=110, blank=True, null=True)
    icono = models.FileField(upload_to='static',blank=True, null=True)
    lema = models.CharField(max_length=110, blank=True, null=True)
    telefono = models.CharField(max_length=110, blank=True, null=True)
    descripcion_tienda = models.CharField(max_length=110, blank=True, null=True)
    imagen_tienda = models.FileField(upload_to='static',blank=True, null=True)


    class Meta:
        managed = True
        db_table = 'datodepagina'

    def __unicode__(self):
        return self.titulo




class Photo(models.Model):
    photo = models.FileField(upload_to='static')

    class Meta:
        managed = True
        db_table = 'photo'

class Video(models.Model):
    video = models.FileField(upload_to='static')

    class Meta:
        managed = True
        db_table = 'video'


class Photoproducto(models.Model):
    photo = models.ForeignKey(Photo, models.DO_NOTHING, db_column='photo', blank=True, null=True)
    producto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='producto', blank=True, null=True)
    photo_olx = models.CharField(max_length=10000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'photoproducto'

class Videoproducto(models.Model):
    video = models.ForeignKey(Video, models.DO_NOTHING, db_column='video', blank=True, null=True)
    producto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='producto', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'videoproducto'


class Marca(models.Model):
    nombre = models.CharField(max_length=10000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'marca'

    def __unicode__(self):

        return self.nombre


class Modelo(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'modelo'

    def __unicode__(self):

        return self.nombre

class Tipo(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'tipo'

class Color(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'color'

    def __unicode__(self):
        return self.nombre


class Distrito(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)
    provincia = models.ForeignKey('Provincia', models.DO_NOTHING, db_column='provincia', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'distrito'

    def __unicode__(self):
        return self.nombre



class Auto(models.Model):
    marca = models.ForeignKey('Marca', models.DO_NOTHING, db_column='marca', blank=True, null=True)
    modelo = models.ForeignKey('Modelo', models.DO_NOTHING, db_column='modelo', blank=True, null=True)
    tipo = models.ForeignKey('Tipo', models.DO_NOTHING, db_column='tipo', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'auto'

    def __unicode__(self):

        print 'self.marca',self.id

        if self.marca:
            return self.marca.nombre+' '+self.modelo.nombre

class Servicios(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'servicios'

class Empleo(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'empleo'

class Cursos(models.Model):
    nombre = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'cursos'


class Producto(models.Model):
    
    user = models.ForeignKey(User, models.DO_NOTHING, db_column='user', blank=True, null=True)
    categoria = models.ForeignKey(Categoria, models.DO_NOTHING, db_column='categoria', blank=True, null=True)
    titulo = models.CharField(max_length=1000, blank=True, null=True)
    descripcion = models.TextField(max_length=10000, blank=True, null=True)
    precio = models.CharField(max_length=1000,blank=True, null=True)
    subcategoria = models.ForeignKey(Subcategoria, models.DO_NOTHING, db_column='subcategoria', blank=True, null=True)
    auto = models.ForeignKey(Auto, models.DO_NOTHING, db_column='auto', blank=True, null=True)
    anio = models.CharField(max_length=100, blank=True, null=True)
    kilometraje = models.CharField(max_length=1000, blank=True, null=True)
    color = models.ForeignKey(Color, models.DO_NOTHING, db_column='color', blank=True, null=True)
    cilindros = models.CharField(max_length=1000, blank=True, null=True)
    transmision = models.CharField(max_length=100, blank=True, null=True)
    combustible = models.CharField(max_length=1000, blank=True, null=True)
    condicion = models.CharField(max_length=1000, blank=True, null=True)
    moneda = models.CharField(max_length=1000, blank=True, null=True)
    id_olx = models.CharField(max_length=1000, blank=True, null=True)
    transaction = models.CharField(max_length=1000, blank=True, null=True)
    distrito = models.ForeignKey(Distrito, models.DO_NOTHING, db_column='distrito', blank=True, null=True)
    provincia = models.ForeignKey(Provincia, models.DO_NOTHING, db_column='provincia', blank=True, null=True)
    telefono = models.CharField(max_length=1000, blank=True, null=True)
    animal = models.IntegerField(blank=True, null=True)
    metros2 = models.CharField(max_length=1000, blank=True, null=True)
    ubicacion = models.CharField(max_length=1000, blank=True, null=True)
    empleo = models.ForeignKey(Empleo, models.DO_NOTHING, db_column='empleo', blank=True, null=True)
    experiencia = models.CharField(max_length=100, blank=True, null=True)
    salarioestimado = models.CharField(max_length=10000, blank=True, null=True)
    servicio = models.ForeignKey('Servicios', models.DO_NOTHING, db_column='servicio', blank=True, null=True)
    detalleservicio = models.CharField(max_length=1000, blank=True, null=True)
    dormitorios = models.IntegerField(blank=True, null=True)
    banios = models.IntegerField(db_column='banios', blank=True, null=True)  # Field renamed to remove unsuitable characters.
    piscina = models.IntegerField(blank=True, null=True)
    jardin = models.IntegerField(blank=True, null=True)
    amueblado = models.IntegerField(blank=True, null=True)
    gimnasio = models.IntegerField(blank=True, null=True)
    sauna = models.IntegerField(blank=True, null=True)
    jacuzzi = models.IntegerField(blank=True, null=True)
    ambientes = models.IntegerField(blank=True, null=True)
    curso = models.ForeignKey('Cursos', models.DO_NOTHING, db_column='curso', blank=True, null=True)
    antiguedad = models.CharField(max_length=1000, blank=True, null=True)
    user_olx = models.CharField(max_length=1000, blank=True, null=True)
    #photo = models.ForeignKey('Photo', models.DO_NOTHING, db_column='photo', blank=True, null=True)


    class Meta:
        managed = True
        db_table = 'producto'

    def __unicode__(self):
        return str(self.id)+'-'+self.titulo


        
class Chat(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING, db_column='user', blank=True, null=True, related_name='user')
    destino = models.ForeignKey(User, models.DO_NOTHING, db_column='destino', blank=True, null=True, related_name='destino')
    mensaje = models.CharField(max_length=1000, blank=True, null=True)
    producto = models.ForeignKey(Producto, models.DO_NOTHING, db_column='producto', blank=True, null=True)
    fecha = models.DateTimeField(blank=True, null=True)


    class Meta:
        managed = True
        db_table = 'chat'


class Favoritoproducto(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING, db_column='user', blank=True, null=True)
    producto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='producto', blank=True, null=True)
    estado = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'favoritoproducto'

class Notificacion(models.Model):
    payload = models.TextField(blank=True, null=True)
    p256dh = models.TextField(blank=True, null=True)
    auth = models.TextField(blank=True, null=True)
    endpoint = models.TextField(blank=True, null=True)
    user = models.ForeignKey(User, models.DO_NOTHING, db_column='user', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'notificacion'





class Marketing(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING, db_column='user', blank=True, null=True)
    subcategoria = models.ForeignKey(Subcategoria, models.DO_NOTHING, db_column='subcategoria', blank=True, null=True)
    ip = models.CharField(max_length=1000, blank=True, null=True)
    fecha = models.DateTimeField(blank=True, null=True)
    datocategoria = models.ForeignKey(Categoria, models.DO_NOTHING, db_column='datocategoria', blank=True, null=True)


    class Meta:
        managed = True
        db_table = 'marketing'

    
    def __unicode__(self):
        return self.subcategoria.nombre


class Scrap(models.Model):

    nombre = models.CharField('Slug',max_length=1000,blank=True, null=True)
    link = models.CharField(max_length=1000,blank=True, null=True)
    iid = models.CharField(max_length=1000,blank=True, null=True)
    fecha = models.DateTimeField(blank=True, null=True)
    telefono=models.CharField(max_length=1000,blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'Scrap'
        db_table = 'scrap'

    def __unicode__(self):
        return self.nombre