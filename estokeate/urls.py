from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [

    url(r'^admin/', admin.site.urls),
    url(r'^$', 'app.views.home'),
    url(r'^autentificacion$', 'app.views.autentificacion'),
    url(r'^autentificacion/$', 'app.views.autentificacion'),
    url(r'^productos/$', 'app.views.productos'),
    url(r'^ingresar/(\w+)$', 'app.views.ingresar'),
    url(r'^ingresar/(\w+)/$', 'app.views.ingresar'),
    url(r'^ingresar/$', 'app.views.ingresarone'),
    url(r'^registra/$', 'app.views.registra'),
    url(r'^salir/$', 'app.views.salir'),
    url(r'^distritos$', 'app.views.distritos'),
    url(r'^perfil/$', 'app.views.perfil'),
    url(r'^vender/$', 'app.views.vender'),
    url(r'^productos/(\d+)$', 'app.views.productos'),
    url(r'^producto/(\d+)$', 'app.views.producto'),
    url(r'^productojson/(\d+)$', 'app.views.productojson'),
    url(r'^usuario/(\d+)$', 'app.views.usuario'),
    url(r'^editarproducto/(\d+)$', 'app.views.editarproducto'),
    url(r'^chat/(\d+)/(\d+)$', 'app.views.chat'),
    url(r'^chatin/(\d+)$', 'app.views.chatin'),
    url(r'^enviamensaje/$', 'app.views.enviamensaje'),
    url(r'^enviamensaje_perfil/$', 'app.views.enviamensaje_perfil'),
    url(r'^enviamensaje_perfil_web/$', 'app.views.enviamensaje_perfil_web'),
    url(r'^listamensajes/(\d+)/(\d+)$', 'app.views.listamensajes'),
    url(r'^listamensajes/(\d+)$', 'app.views.listamensajes'),
    url(r'^busqueda/$', 'app.views.busqueda'),
    url(r'^actualizaperfil/$', 'app.views.actualizaperfil'),
    url(r'^filtrarcategoria/(\w+)/(\d+)/', 'app.views.filtrarcategoria'),
    url(r'^filtrarsubcategoria/(\w+)/(\d+)/', 'app.views.filtrarsubcategoria'),
    url(r'^traesubcategorias/(\d+)', 'app.views.traesubcategorias'),
    url(r'^uploadphoto/', 'app.views.uploadphoto'),
    url(r'^uploadvideo/', 'app.views.uploadvideo'),
    url(r'^categorias/', 'app.views.categorias'),
    url(r'^productocategoria/(\w+)/', 'app.views.productocategoria'),
    url(r'^busquedacategoria/(\w+)/(\w+)/', 'app.views.busquedacategoria'),
    url(r'^loginxfacebook/$', 'app.views.loginxfacebook'),
    url(r'^verificalogin/$', 'app.views.verificalogin'),
    url(r'^productosjson$', 'app.views.productosjson'),
    url(r'^productosjson/$', 'app.views.productosjson'),
    url(r'^detallechat/(\w+)/(\w+)/$', 'app.views.detallechat'),
    url(r'^detallechatpc/(\w+)/(\w+)/$', 'app.views.detallechatpc'),
    url(r'^detallechatpc/(\w+)/$', 'app.views.detallechatpc_1'),
    url(r'^prueba/$', 'app.views.prueba'),
    url(r'^noti/$', 'app.views.noti'),
    url(r'^detalleproducto/(\d+)', 'app.views.detalleproducto'),
    url(r'^eliminarphoto/(\d+)', 'app.views.eliminarphoto'),
    url(r'^addfavorito/(\d+)/(\d+)', 'app.views.addfavorito'),
    url(r'^estadofavorito/(\d+)', 'app.views.estadofavorito'),
    url(r'^misfavoritos/', 'app.views.misfavoritos'),

]