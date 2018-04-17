from django.contrib import admin
from app.models import *
from django.contrib.admin.filters import RelatedOnlyFieldListFilter

from django.contrib.admin import AdminSite
from django.utils.translation import ugettext_lazy
from PIL import Image
from resizeimage import resizeimage
import os.path
from PIL import Image
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import logging
import requests
from bs4 import BeautifulSoup

def resize_and_crop(img_path, modified_path, size, crop_type='top'):
    """
    Resize and crop an image to fit the specified size.
    args:
        img_path: path for the image to resize.
        modified_path: path to store the modified image.
        size: `(width, height)` tuple.
        crop_type: can be 'top', 'middle' or 'bottom', depending on this
            value, the image will cropped getting the 'top/left', 'midle' or
            'bottom/rigth' of the image to fit the size.
    raises:
        Exception: if can not open the file in img_path of there is problems
            to save the image.
        ValueError: if an invalid `crop_type` is provided.
    """
    # If height is higher we resize vertically, if not we resize horizontally
    img = Image.open(img_path)
    # Get current and desired ratio for the images
    img_ratio = img.size[0] / float(img.size[1])
    ratio = size[0] / float(size[1])
    #The image is scaled/cropped vertically or horizontally depending on the ratio
    if ratio > img_ratio:
        img = img.resize((size[0], size[0] * img.size[1] / img.size[0]),
                Image.ANTIALIAS)
        # Crop in the top, middle or bottom
        if crop_type == 'top':
            box = (0, 0, img.size[0], size[1])
        elif crop_type == 'middle':
            box = (0, (img.size[1] - size[1]) / 2, img.size[0], (img.size[1] + size[1]) / 2)
        elif crop_type == 'bottom':
            box = (0, img.size[1] - size[1], img.size[0], img.size[1])
        else :
            raise ValueError('ERROR: invalid value for crop_type')
        img = img.crop(box)
    elif ratio < img_ratio:
        img = img.resize((size[1] * img.size[0] / img.size[1], size[1]),
                Image.ANTIALIAS)
        # Crop in the top, middle or bottom
        if crop_type == 'top':
            box = (0, 0, size[0], img.size[1])
        elif crop_type == 'middle':
            box = ((img.size[0] - size[0]) / 2, 0, (img.size[0] + size[0]) / 2, img.size[1])
        elif crop_type == 'bottom':
            box = (img.size[0] - size[0], 0, img.size[0], img.size[1])
        else :
            raise ValueError('ERROR: invalid value for crop_type')
        img = img.crop(box)
    else :
        img = img.resize((size[0], size[1]),
                Image.ANTIALIAS)
        # If the scale is the same, we do not need to crop
    img.save(modified_path)


# @admin.register(Anio)
# class AnioAdmin(admin.ModelAdmin):
#     list_display = ('id_anio','anio_antig')

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id','nombre','descripcion','icon','imagen')



    def save_model(self, request, obj, form, change):
        
        super(CategoriaAdmin, self).save_model(request, obj, form, change)
        c = Categoria.objects.get(id=obj.id)
        c.relink=c.nombre.replace(' ','_')
        c.save()
        

@admin.register(Marketing)
class MarketingAdmin(admin.ModelAdmin):
    list_display = ('id','subcategoria')
    list_filter = ('subcategoria__nombre',)

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id','titulo','descripcion','moneda')
    list_editable = ('titulo',)

    def marca(self, obj):
        if obj.auto:
            return obj.auto.marca.nombre

    def modelo(self, obj):
        if obj.auto:
            return obj.auto.modelo.nombre

@admin.register(Photoproducto)
class PhotoproductoAdmin(admin.ModelAdmin):
    list_display = ('id','photo','producto')


@admin.register(Scrap)
class ScrapAdmin(admin.ModelAdmin):
    list_display = ('id','nombre','link','iid','telefono')
    list_filter = ('nombre',)
    actions=['scrapping']

    def scrapping(self, request, queryset):

        for obj in queryset:



            s = Scrap.objects.get(id=obj.id)

            page = requests.get(s.link)
            precio = ''
            user_olx=''
            nombre=''
            telefono=''

            if obj.telefono:

                telefono=obj.telefono

            soup = BeautifulSoup(page.content, 'html.parser')

            if len(soup.find_all('h1'))==1:

                titulo =  soup.find_all('h1')[0].string.encode('utf-8')

            else:

                titulo =  soup.find_all('h1')[1].string.encode('utf-8')



            if len(soup.find_all("p", class_="item_partials_description_view"))==1:

                descripcion = list(soup.find_all("p", class_="item_partials_description_view")[0].children)[0].encode('utf-8')

            else:

                descripcion =''

            fotos =  list(soup.find_all("a", class_="thumbnail",href=True))

            if len(soup.find_all("p", class_="name"))==1:

                nombre = soup.find_all("p", class_="name")[0].string.encode('utf-8')

            if len(soup.find_all("strong", class_="price"))==1:

                if soup.find_all("strong", class_="price")[0].string:

                    precio = soup.find_all("strong", class_="price")[0].string.encode('utf-8')
                else:
                    precio=''


            if len(soup.find_all("p", class_="name"))==1:

                user_olx = soup.find_all("p", class_="name")[0].string.encode('utf-8')

            if titulo:

                titulo = titulo.replace('  ','')
            else:

                titulo=None

            print 'id',obj.id


            if Producto.objects.filter(id_olx=obj.iid).count()==0:

                Producto(titulo=titulo,descripcion=descripcion,categoria_id=1,id_olx=obj.iid,precio=precio,telefono=telefono,user_olx=user_olx).save()

                id_producto = Producto.objects.all().values('id').order_by('-id')[0]['id']

                for f in fotos:


                    Photoproducto(photo_olx=f['href'],producto_id=id_producto).save()

            
            print 'Fin del producto... '



        return 'Ok'

    def getcategoria(self, obj):
        return obj.nombre

# @admin.register(Color)
# class ColorAdmin(admin.ModelAdmin):
#     list_display = ('id','nombre')

@admin.register(Subcategoria)
class SubcategoriaAdmin(admin.ModelAdmin):
    list_display = ('getcategoria','nombre','check_imagen','activo')
    list_filter = ('categoria__nombre',)

    def getcategoria(self, obj):
		return obj.categoria.nombre

    def save_model(self, request, obj, form, change):
        
        super(SubcategoriaAdmin, self).save_model(request, obj, form, change)
        
        if Subcategoria.objects.get(id=obj.id).imagen and obj.check_imagen==1:

            caption = '/home/joel/proyectos/ania/'+str(Subcategoria.objects.get(id=obj.id).imagen)

            resize_and_crop(caption, caption, (2000,500), crop_type='top')

        else:

            caption = '/home/joel/proyectos/ania/'+str(Subcategoria.objects.get(id=obj.id).imagen)

            resize_and_crop(caption, caption, (1000,1500), crop_type='top')





