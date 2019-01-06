webpackJsonp([34],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleservicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DetalleservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleservicioPage = (function () {
    function DetalleservicioPage(modalCtrl, alertCtrl, storage, loadingCtrl, server, device, spinner, toastCtrl, _servicio, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.server = server;
        this.device = device;
        this.spinner = spinner;
        this.toastCtrl = toastCtrl;
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.preciototal = 0;
        this.serv = navParams.get("servicio");
        this.host = this.server.getMyGlobalVar();
    }
    DetalleservicioPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Perfecto nuestra socia vendra hacia ti atenderte',
            duration: 4000
        });
        toast.present();
    };
    DetalleservicioPage.prototype.pagotarjetaToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Esta opcion se habilitara dentro de 1 semana',
            duration: 4000
        });
        toast.present();
    };
    DetalleservicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            console.log('servicos....', data);
            _this.ped = data[0]['pedidos'];
            for (_this.ser in _this.ped) {
                console.log('que.....', _this.ped[_this.ser]);
                _this.todoser = _this.ped[_this.ser].subcategoria__nombre + ' S/. ' + _this.ped[_this.ser].subcategoria__precio + '<br>' + _this.todoser;
                _this.preciototal = _this.ped[_this.ser].precio_con_descuento + _this.preciototal;
                _this.precio = _this.preciototal;
                _this.precio = _this.precio.toFixed(2);
            }
            _this.codigo_servicio = data[0]['id'];
            _this.fecha = data[0]['fecha'];
            _this.fecha_inicio = data[0]['fecha_inicio'];
            _this.nombre = data[0]['cliente__nombre'];
            _this.estado = data[0]['estado__nombre'];
            _this.socia = data[0]['socia__nombre'];
            _this.referencia = data[0]['referencia'];
            _this.socia__photo = data[0]['socia__photo'];
            _this.precio_promo = data[0]['precio_promo'];
            console.log('jsjsj', _this.socia__photo);
        });
    };
    DetalleservicioPage.prototype.aceptar = function (servicio) {
        var _this = this;
        this.spinner.load();
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            _this._servicio.aceptaservicio(data[0]['id'])
                .subscribe(function (data) {
                _this._servicio.detalleservicio(_this.navParams.get("servicio"))
                    .subscribe(function (data) {
                    _this.estado = data[0]['estado__nombre'];
                    _this.spinner.dismiss();
                    _this.presentToast();
                });
            });
        });
    };
    DetalleservicioPage.prototype.pagar = function () {
        this.navCtrl.popToRoot();
        window.open('https://mylookxpress.com/culqui.php?precio=' + this.precio + '&codigo=' + this.codigo_servicio + '&nombre=' + this.nombre + '&pedidos=' + this.todoser);
    };
    DetalleservicioPage.prototype.confirmapago_antiguo = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Gracias por tu preferencia, en breve nuestro personal se pondra en contacto con usted',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        //this.actualiza(this.nombre,this.email,data.telefono)
                        //this.pagarefectivoToast() 
                        _this.pagarenefectivo();
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleservicioPage.prototype.confirmapago = function () {
        // this.pagarefectivoToast() 
        //this.presentLoadingDefault()
        this.pagarenefectivo();
        this.storage.remove('pedido');
    };
    DetalleservicioPage.prototype.pagarenefectivo_antiguo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Estamos procesando tu pedido.',
        });
        this.spinner.load();
        loader.present().then(function () {
            _this._servicio.pagarenefectivo(_this.navParams.get("servicio"))
                .subscribe(function (data) {
                _this._servicio.detalleservicio(_this.navParams.get("servicio"))
                    .subscribe(function (data) {
                    _this.estado = data[0]['estado__nombre'];
                    console.log('estado', _this.estado);
                });
                _this.navCtrl.popToRoot();
                _this.storage.set('newservice', 1);
                _this.spinner.dismiss();
                _this.presentToast();
            });
            loader.dismiss();
        });
    };
    DetalleservicioPage.prototype.pagarenefectivo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Gracias por su preferencia, Estamos procesando tu pedido.',
            duration: 50000
        });
        //this.spinner.load();
        loader.present().then(function () {
            _this._servicio.pagarenefectivo(_this.navParams.get("servicio"))
                .subscribe(function (data) {
                _this.refresca(_this.navParams.get("servicio"));
                _this.storage.remove('pedido');
            });
            setTimeout(function () {
                loader.dismiss();
            }, 3000);
        });
    };
    DetalleservicioPage.prototype.cancelar = function (servicio) {
        var _this = this;
        this.spinner.load();
        this._servicio.detalleservicio(this.navParams.get("servicio"))
            .subscribe(function (data) {
            _this._servicio.cancelarservicio(data[0]['id'])
                .subscribe(function (data) {
                _this._servicio.detalleservicio(_this.navParams.get("servicio"))
                    .subscribe(function (data) {
                    _this.estado = data[0]['estado__nombre'];
                    _this.spinner.dismiss();
                    //this.presentToast()
                });
            });
        });
    };
    DetalleservicioPage.prototype.alertaPago = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Como desea pagar?',
            cssClass: 'alertDanger',
            buttons: [
                {
                    cssClass: 'pagos',
                    text: 'Pago en Efectivo',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.confirmapago();
                    }
                },
                {
                    cssClass: 'pagos',
                    text: 'Pago con Tarjeta',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    cssClass: 'tunki',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.pagotulki();
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleservicioPage.prototype.refresca = function (id_servicio) {
        var _this = this;
        this._servicio.detalleservicio(id_servicio).subscribe(function (data) { _this.estado = data[0]['estado__nombre']; });
        this.navCtrl.popToRoot();
        this.storage.set('newservice', 1);
        this.presentToast();
    };
    DetalleservicioPage.prototype.pagoyape = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Pago Yape',
            duration: 50000
        });
        //this.spinner.load();
        loader.present().then(function () {
            _this._servicio.pagoyape(_this.navParams.get("servicio"))
                .subscribe(function (data) {
                _this.refresca(_this.navParams.get("servicio"));
            });
            setTimeout(function () {
                loader.dismiss();
            }, 3000);
        });
    };
    DetalleservicioPage.prototype.pagotulki = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Pago Tulki. No te olvides enviarnos tu constancia de pago por Whatsapp.',
            duration: 50000
        });
        loader.present().then(function () {
            _this._servicio.pagotulki(_this.navParams.get("servicio"))
                .subscribe(function (data) {
                _this.refresca(_this.navParams.get("servicio"));
            });
            setTimeout(function () {
                loader.dismiss();
            }, 3000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], DetalleservicioPage.prototype, "nav", void 0);
    DetalleservicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalleservicio',template:/*ion-inline-start:"/home/andy/mylook/src/pages/detalleservicio/detalleservicio.html"*/'\n <ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Resumen de tu pedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n<ion-list>\n\n\n\n  <ion-toolbar style=\'text-align: center;\'>\n  \n<button ion-button round style=\'background: #25d366;\'><a style=\'color: #fff;\n    text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola%20soy%20{{nombre}}%20me%20gustaría%20reservar%20una%20cita%20para%20el%20{{dia}}%20a%20las%20{{hora}}%20{{todoservicio}}%20code:#%20{{codigo_servicio}}"> Whatsapp <ion-icon name="logo-whatsapp" style=\'color: #fff;\'></ion-icon></a></button>\n\n\n  <button ion-button round color="light"><a style=\'text-decoration: none;color: #fff;\' href="tel:+910759370"> Llamar <ion-icon name="call" style=\'color: #fff;\'></ion-icon></a></button>\n  \n</ion-toolbar>\n\n\n<!--<ion-item >\n  \n   Codigo Servicio <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\' class=\'_numero\'> {{codigo_servicio}}</span>\n\n</ion-item>\n\n<ion-item >\n  \n   Estado <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\'> {{estado}}</span>\n\n</ion-item>-->\n\n        \n\n  <ion-item ion-item *ngFor="let item of ped" >\n\n     <ion-thumbnail item-start>\n      <img style=\'border-radius:50%;\' src=\'{{host}}{{item.socia__photo}}\'>\n    </ion-thumbnail>\n\n    <ion-row>\n\n      <h6>{{item.socia__nombre}}</h6>\n    </ion-row>\n\n    <ion-row>\n      <h6>{{item.subcategoria__nombre}}</h6>\n     <!--  \n    <button ion-button color="light" (click)=\'detalleModal(item)\'>  {{item.escogido.socia__nombre}} &nbsp; <ion-icon name="play"></ion-icon>   </button>\n   --></ion-row>\n\n<!--     <ion-icon name="ios-remove-circle-outline" style=\'padding-right: 4px;\' [hidden]="!item.muestradescripcion" (click)=\'item.muestradescripcion=false\'></ion-icon>\n\n    <ion-icon name="ios-add-circle-outline" style=\'padding-right: 3px;\' [hidden]="item.muestradescripcion" (click)=\'item.muestradescripcion=true\'></ion-icon>\n -->\n\n\n\n    <ion-row>\n\n    <span> {{item.cantidad}} {{item.nombre | slice:0:25}} </span>\n     </ion-row>\n    \n     <ion-row>\n       <span style=\'float: right;\n    margin-right: -30px;;\n    position: absolute;\n    right: 48px !important;\n\' class=\'_numero\'>S/. {{item.precio_con_descuento.toFixed(2)}}</span> \n\n</ion-row>\n  </ion-item>\n\n\n\n\n\n\n<ion-item >\n  \n   Total a pagar S/. <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\' class=\'_numero\'>S/. {{precio}} </span>\n\n</ion-item>\n\n\n<ion-item *ngIf=\'precio_promo\'>\n  \n \n   Precio Promocional <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\'>S/. {{precio_promo.toFixed(2)}} </span>\n\n</ion-item>\n\n\n<ion-item >\n\n   \n   Fecha: \n\n   <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\' class=\'_numero\'>{{fecha}} </span>\n \n</ion-item>\n\n<ion-item>\n   \n   Hora: \n\n   <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\' class=\'_numero\'> {{fecha_inicio}}</span>\n   \n</ion-item>\n\n\n<ion-item>\n<ion-label>Direccion</ion-label>\n<ion-textarea [attr.rows]="3" name="direccion" disabled type="text" class=\'_numero\' [(ngModel)]="referencia"  ></ion-textarea>\n</ion-item>\n\n\n</ion-list>\n\n\n\n\n\n\n\n\n\n\n</ion-content> \n\n\n<ion-footer>\n  <ion-toolbar style=\'text-align: center;\'>\n  \n<button   ion-button round full color="light" round (click)=\'alertaPago()\'>Pagar</button>\n\n\n\n  <!-- \n\n\n<button  *ngIf="estado==\'Pendiente\'"  ion-button color="light" round (click)=\'confirmapago()\'>Pago en Efectivo</button>\n\n\n<button   *ngIf="estado==\'Pendiente\'" ion-button color="dark" round (click)=\'pagotarjetaToast()\'>Pago Tarjeta</button>\n\n\n<button   ion-button color="dark" round (click)=\'cancelar(ped)\'>Cancelar</button>\n\n\n\n<ion-grid *ngIf="estado==\'Pendiente\'">\n  <ion-row>\n    <ion-col >\n    <img style=\'width: 112px;\n    height: 42px;\n    border-radius: 59px;\' (click)=\'pagotulki()\' src=\'assets/tunki.png\'>\n\n    </ion-col>\n    <ion-col>\n      <img style=\'width: 112px;\n    height: 42px;\n    border-radius: 59px;\' (click)=\'pagotarjetaToast()\' src=\'assets/boton-yape.png\'></ion-col>\n\n   \n  </ion-row>\n</ion-grid> -->\n\n\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/detalleservicio/detalleservicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DetalleservicioPage);
    return DetalleservicioPage;
}());

//# sourceMappingURL=detalleservicio.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MapProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MapProvider = (function () {
    function MapProvider(http) {
        this.http = http;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.google_api_key = 'AIzaSyCopEqGky81dhV56krJ1dqjkqFPKKOpOrI';
        console.log('Hello MapProvider Provider');
    }
    MapProvider.prototype.getAddress = function (params) {
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
        return this.GET(url);
    };
    MapProvider.prototype.getStreetAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
        return this.GET(url);
    };
    MapProvider.prototype.GET = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MapProvider.prototype.POST = function (url, params) {
        // let options = new RequestOptions({
        //   headers: this.contentHeader
        // });
        // return this.http.post(url, params, options).map(res => res.json());
    };
    MapProvider.prototype.DEL = function (url) {
        // let options = new RequestOptions({
        //   headers: this.contentHeader
        // });
        // return this.http.delete(url, options).map(res => res.json());
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subirimagen_subirimagen__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetalleproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleproductoPage = (function () {
    function DetalleproductoPage(modalCtrl, server, navCtrl, navParams, view) {
        this.modalCtrl = modalCtrl;
        this.server = server;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.infomassocias = 'Contactenos por whatsapp para coordinar que vengan a ti mas de 2 socias';
        this.host = this.server.getMyGlobalVar();
        console.log('server..', this.host);
        console.log('navParams', navParams.get('producto'));
        this.numero = 1;
        this.producto = navParams.get('producto');
        console.log('ennnnn', this.producto.categoria_id);
        if (this.producto.categoria_id == 24 || this.producto.categoria_id == 25) {
            this.asignar(this.producto, 1);
        }
        this.socia_detalle = this.producto.socias[0];
        if (this.producto.escogido) {
            this.socia_detalle = this.producto.escogido;
        }
        else {
            this.producto.escogido = this.producto.socias[0];
        }
        this.ahora = (this.producto.precio_descuento).toFixed(2);
        //this.producto.precio = (100-this.producto.descuento)*this.producto.precio/100
        console.log('hdhdhdh', this.producto.descuento, this.producto.precio);
        //this.producto.precio_descuento = (100+this.producto.descuento)*this.producto.precio*0.01;
    }
    DetalleproductoPage.prototype.escogersocia = function (data) {
        console.log(data);
        this.socia_detalle = data;
        for (this.s in this.producto.socias) {
            console.log('nsnnss', this.producto.socias[this.s]);
            this.producto.socias[this.s].escogido = false;
        }
        data.escogido = true;
        this.producto.escogido = data;
        // console.log('producto',this.producto)
        //  let profileModal = this.modalCtrl.create(SociasPage, {_socia_detalle:data });
        //  profileModal.present();
    };
    DetalleproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleproductoPage');
    };
    DetalleproductoPage.prototype.subirimagen = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__subirimagen_subirimagen__["a" /* SubirimagenPage */], { 'producto': this.producto });
        profileModal.onDidDismiss(function (data) {
            console.log('subirimagen', data);
            _this.producto = data.producto;
            _this.closeModal(_this.producto);
        });
        profileModal.present();
    };
    DetalleproductoPage.prototype.asignar = function (producto, numero) {
        console.log('ooo', producto.id);
        if (producto.id == 139 || producto.id == 140) {
            this.subirimagen();
        }
        this.closeModal(this.producto);
        this.producto.cantidad = numero;
        this.producto.check = true;
        //this.producto.precio_descuento = (100+this.producto.descuento)*this.producto.precio*0.01;
    };
    DetalleproductoPage.prototype.actualizaprecio = function (data) {
        console.log(data);
        this.ahora = (data * this.producto.precio_descuento).toFixed(2);
    };
    DetalleproductoPage.prototype.closeModal = function (data) {
        var datax = { 'producto': data };
        this.view.dismiss(datax);
    };
    DetalleproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalleproducto',template:/*ion-inline-start:"/home/andy/mylook/src/pages/detalleproducto/detalleproducto.html"*/'<!--\n  Generated template for the DetalleproductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<!-- \n<img src="{{host}}{{producto.photo}}" style=\'opacity: 0.3;\'> -->\n<!-- \n<ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>Donde y cuando </ion-title>\n\n      \n                     \'>{{book}}</ion-badge> \n                            \n     \n      \n    \n\n        \n\n\n    </ion-navbar>\n  </ion-header>\n -->\n\n\n<ion-content  >\n\n<img src="{{host}}{{producto.photo_descripcion}}">\n\n<div padding style=\'    margin-bottom: -16px;\'>\n<!--<ion-icon (click)=\'closeModal()\'  style=\'font-size: 32px;\n    float: left;\n    position: absolute;\n    top: 19px;\n    right: 15px;\' name="close"></ion-icon>-->\n\n\n\n<img src=\'assets/cerrar.png\' (click)=\'closeModal()\' style=\'float: left;\n    position: absolute;\n    top: 19px;\n    right: 15px;\n    position: fixed;\n    width: 30px;\n    opacity: 1;\' />\n\n\n\n\n<h4  style=\'font-family:"Comfortaa";line-height: 26px;\'>{{producto.nombre}}</h4>\n\n\n\n<h6  style=\'font-family:"Comfortaa";line-height: 25px;\'>{{producto.descripcion}}</h6>\n\n<h6 *ngIf=\'producto.precio_original\' style=\'font-family:"Comfortaa"\'>Precio :  <span style=\'text-decoration:line-through;\' >Antes <span class=\'_numero\'> S/.{{producto.precio_original*numero}}</span></span><span  style=\'margin-left: 14px;\' color=\'light\'>Ahora <span class="_numero">S/.{{ahora}}</span></span>\n</h6> \n\n<h6 *ngIf=\'producto.precio==producto.precio_descuento && producto.precio>0\' style=\'font-family:"Comfortaa"\'>Precio:<span  style=\'margin-left: 14px;\' class=\'_numero\'> S/.{{producto.precio*numero}}</span>\n</h6> \n\n<p *ngIf=\'producto.duracion_servicio>0\'>Duracion <span class=\'_numero\'>{{producto.duracion_servicio}}</span>  min</p> \n\n\n<ion-item >\n  <ion-label>Cuantas servicios deseas?</ion-label>\n  <ion-select [(ngModel)]="numero" interface="popover" (ionChange)="actualizaprecio(numero)">\n    <ion-option value="1">1</ion-option>\n    <ion-option value="2">2</ion-option>\n    <ion-option value="3">3</ion-option>\n    <ion-option value="4">4</ion-option>\n  </ion-select>\n</ion-item>\n\n\n<h6 *ngIf=\'numero>1\'>{{infomassocias}}</h6>\n\n</div>\n\n\n <ion-grid class=\'socia\'>\n  <ion-row>\n    <ion-col style=\'text-align: center;\'>\n      <img class=\'animated fadeIn\' style=\'border-radius:50%;max-width:89px;\' src="{{host}}{{socia_detalle.socia__photo}}">\n\n    </ion-col>\n    <ion-col style=\'text-align: center;\'>\n      \n    <h4>{{socia_detalle.socia__nombre}}</h4>\n    <h6>{{socia_detalle.socia__descripcion_titulo}}</h6>\n\n    </ion-col>\n  </ion-row>\n\n\n\n<p style=\'line-height: 21px;\n    text-align: center;\'>{{socia_detalle.socia__descripcion_socia}}\n<br>Tiempo experiencia: {{socia_detalle.socia__texperiencia}}</p>\n\n\n</ion-grid>\n\n\n<div padding>\n<ion-grid>\n\n\n<h6>Puedes elegir una de nuestras socias </h6>\n\n\n  <ion-row>\n    <ion-col  [ngClass]="{\'escogido\':s.escogido==true}"  (click)= \'escogersocia(s)\' col-4 style=\'text-align: center;padding: 15px;\n    border-radius: 6px;\' *ngFor = \'let s of producto.socias\' >\n\n\n      <img style=\'border-radius:50%;\' src=\'{{host}}{{s.socia__photo}}\'>\n      <div style=\'height: 10px;\'></div>\n      <p>{{s.socia__nombre}}</p>\n    </ion-col>\n\n  </ion-row>\n \n </ion-grid>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n<ion-toolbar>\n\n<button ion-button full round color=\'danger\' (click)=\'asignar(producto,numero)\' class="fadeIn"> Lo quiero</button>\n\n\n</ion-toolbar>\n\n\n</ion-footer>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/detalleproducto/detalleproducto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _e || Object])
    ], DetalleproductoPage);
    return DetalleproductoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=detalleproducto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirimagenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ubicacion_ubicacion__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SubirimagenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubirimagenPage = (function () {
    function SubirimagenPage(storage, server, http, view, navCtrl, navParams) {
        this.storage = storage;
        this.server = server;
        this.http = http;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pedido = new Array();
        this.host = this.server.getMyGlobalVar();
        this.producto = {
            imagen: ''
        };
    }
    SubirimagenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubirimagenPage');
    };
    SubirimagenPage.prototype.subir = function () {
        var formData = new FormData();
        formData.append('photo', this.archivo);
        this.http.post(this.host + 'upload', formData).subscribe(function (res) {
            return alert(res);
        }, function (err) {
            alert(err);
        });
    };
    SubirimagenPage.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.producto.imagen = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        var fileList = event.target.files;
        var file = fileList[0];
        this.producto.archivo = fileList[0];
        console.log(file);
    };
    SubirimagenPage.prototype.closeModal = function (descripcion) {
        this.producto.detalle_lo_quiero = descripcion;
        this.view.dismiss({ 'producto': this.producto });
    };
    SubirimagenPage.prototype.continuar = function (data) {
        this.producto.detalle_lo_quiero = data;
        this.producto.cantidad = 1;
        this.producto.check = true;
        this.producto.precio = 0;
        this.producto.precio_descuento = 0;
        this.producto.descuento = 0;
        this.producto.id = 139;
        this.producto.descripcion = 'Lo quiero';
        this.producto.nombre = 'Cotizar';
        this.producto.escogido = {
            escogido: true,
            socia__descripcion_socia: "Stilo te designa una de nuestr@s especialistas",
            socia__descripcion_titulo: "",
            socia__id: 1,
            socia__nombre: "Stiler Stilo",
            socia__photo: "static/stiler_5LoRI1I.png",
            socia__texperiencia: ""
        };
        this.pedido.push(this.producto);
        this.storage.set('pedido', this.pedido);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ubicacion_ubicacion__["a" /* UbicacionPage */], {});
    };
    SubirimagenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subirimagen',template:/*ion-inline-start:"/home/andy/mylook/src/pages/subirimagen/subirimagen.html"*/'<!--\n  Generated template for the SubirimagenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>Como lo quieres?</ion-title>\n  </ion-navbar>\n\n <ion-icon (click)=\'closeModal()\'  style=\'font-size: 32px;\n    float: left;\n    position: absolute;\n    color:#fff;\n    top: 10px;\n    right: 15px;\' name="close"></ion-icon>\n\n</ion-header>\n<ion-content padding class=\'fondologin\'>\n\n\n\n\n  <p >Escribe una descripcion de como lo quieres</p>\n\n<ion-item>\n    <ion-textarea rows=\'5\' [(ngModel)] = "descripcion" ></ion-textarea>\n  </ion-item>\n\n  <div style=\'height: 12px;\'></div>\n\n  <p >Sube una imagen de referencia de como lo quieres</p>\n\n	<input id="custom-file-upload" type="file" value=""  (change)="fileChange($event)">\n\n\n  \n\n	<div style=\'height: 12px;\'></div>\n\n\n\n<img *ngIf="producto.imagen" [src]="producto.imagen"/>\n\n\n\n    \n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n\n  <ion-toolbar>\n  <button color=\'dark\' full round end ion-button (click)="continuar(descripcion)">Asi lo quiero\n    </button>\n    </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/subirimagen/subirimagen.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _f || Object])
    ], SubirimagenPage);
    return SubirimagenPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=subirimagen.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionPage = (function () {
    function NotificacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionPage');
    };
    NotificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacion',template:/*ion-inline-start:"/home/andy/mylook/src/pages/notificacion/notificacion.html"*/'<!--\n  Generated template for the NotificacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Notificaciones</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/notificacion/notificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NotificacionPage);
    return NotificacionPage;
}());

//# sourceMappingURL=notificacion.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__venta_venta__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ubicacion_ubicacion__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_servicio_servicio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carrito_carrito__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ayuda_ayuda__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notificacion_notificacion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_subirimagen_subirimagen__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















/**
 * Generated class for the MenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenPage = (function () {
    function MenPage(server, appCtrl, toastCtrl, _photo, alertCtrl, http, zone, platform, modalCtrl, socialSharing, storage, _perfil, _categoria, navCtrl, navParams) {
        var _this = this;
        this.server = server;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this._photo = _photo;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.zone = zone;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this._perfil = _perfil;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address = '';
        this.storage.get('sexo').then(function (val) {
            if (val == null) {
                _this.sacasexo1();
            }
        });
        this.primerencuentro();
        this.host = this.server.getMyGlobalVar();
        //alert(this.device.uuid);
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__["a" /* PerfilPage */];
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_11__pages_servicio_servicio__["a" /* ServicioPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_12__historial_historial__["a" /* HistorialPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */];
        this.loginprincipalPage = __WEBPACK_IMPORTED_MODULE_16__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */];
        this.ventaPage = __WEBPACK_IMPORTED_MODULE_6__venta_venta__["a" /* VentaPage */];
        this.ayudaPage = __WEBPACK_IMPORTED_MODULE_15__ayuda_ayuda__["a" /* AyudaPage */];
        ///Por default
        this._categoria.getcategorias(2)
            .subscribe(function (data) { return _this.categoria = data; });
        /////
    }
    MenPage.prototype.sacadistrito = function () {
        var _this = this;
        var alert1 = this.alertCtrl.create();
        alert1.setTitle('Cual es tu distrito?');
        alert1.addInput({
            type: 'radio',
            label: 'Lima',
            value: '1',
            checked: false
        });
        this.http.get(this.server.getMyGlobalVar() + 'distrito/').subscribe(function (data) {
            for (var _i = 0, _a = JSON.parse(data['_body']); _i < _a.length; _i++) {
                var entry = _a[_i];
                console.log(entry['nombre']);
                alert1.addInput({
                    type: 'radio',
                    label: entry['nombre'],
                    value: entry['id'],
                    checked: false
                });
            }
        });
        alert1.addButton('Cancel');
        alert1.addButton({
            text: 'OK',
            handler: function (data) {
                _this.storage.set('distrito', data);
                console.log(data);
                _this.primerencuentro();
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        alert1.present();
    };
    MenPage.prototype.carritoModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__carrito_carrito__["a" /* CarritoPage */], { carrito: this.pedido });
        profileModal.onDidDismiss(function (data) {
            if (data.nivel == 'ubicacion') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_ubicacion_ubicacion__["a" /* UbicacionPage */], {});
            }
            _this.book = data.pedido.length;
        });
        profileModal.present();
    };
    MenPage.prototype.sacasexo1 = function () {
        var _this = this;
        var alertsexo = this.alertCtrl.create({
            title: 'Escoge tu genero',
            cssClass: 'sexocss',
            buttons: [
                {
                    text: '',
                    role: 'cancel',
                    handler: function () {
                        _this.storage.set('sexo', 1);
                        _this.sexo = 1;
                        _this.sacacategoria(1);
                    }
                },
                {
                    text: '',
                    handler: function () {
                        _this.storage.set('sexo', 2);
                        _this.sacacategoria(2);
                    }
                }
            ]
        });
        alertsexo.present();
    };
    MenPage.prototype.sacacategoria = function (sexo) {
        this.navCtrl.popToRoot();
        //     this._categoria.getcategorias(sexo)
        //       .subscribe(data => this.categoria = data);
        //                     this._photo.getfotosdeportada(sexo)
        // .subscribe(data => {
        //      this.photo1=data[0].photo;
        //      this.link1=data[0].enlace
        //      this.photo2=data[1].photo;
        //      this.link2=data[1].enlace
        //      this.photo3=data[2].photo
        //      this.link3=data[2].enlace
        //      this.photo4=data[3].photo
        //      this.link4=data[3].enlace
        // })
        //         this._photo.getfotosdepublicidad()
        // .subscribe(data => {
        //      this.photo5=data[0].photo
        //      this.link5=data[0].enlace
        //      this.photo6=data[1].photo
        //      this.link6=data[1].enlace
        //      this.photo7=data[2].photo
        //      this.link7=data[2].enlace
        //      this.photo8=data[3].photo
        //      this.link8=data[3].enlace
        // })
    };
    MenPage.prototype.primerencuentro = function () {
        var toast = this.toastCtrl.create({
            message: 'Escoge uno de nuestros servicios a delivery que disponemos para ti',
            position: 'bottom',
            duration: 5000
        });
        toast.present();
    };
    MenPage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */]);
        profileModal.present();
    };
    MenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad', 'Intro');
        //this.currentLocation()
    };
    MenPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewWillLoad', 'Intro');
    };
    MenPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter', 'Intro');
        this.storage.get('pedido').then(function (val) {
            if (val) {
                _this.pedido = val;
                _this.book = _this.pedido.length;
                console.log('entre a book');
            }
        });
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
        });
    };
    MenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter', 'Intro');
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
        });
    };
    MenPage.prototype.iraventas = function (data) {
        if (data.id == 24 || data.id == 25) {
            this.subirimagen();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__venta_venta__["a" /* VentaPage */], {
                categoria: data,
            });
        }
    };
    MenPage.prototype.subirimagen = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__pages_subirimagen_subirimagen__["a" /* SubirimagenPage */], {});
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    MenPage.prototype.gonoti = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__notificacion_notificacion__["a" /* NotificacionPage */], {
            user: 'data',
        });
    };
    MenPage.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    ///Saca ubicacion
    // currentLocation() {
    //   this.geolocation.getCurrentPosition().then((position) => {
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     let latLngObj = {'lat': position.coords.latitude, 'long': position.coords.longitude};
    //     // Display  Marker
    //     //this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    //     //alert(latLngObj)
    //     //this.storage.set('ubicacion', latLngObj)
    //     this.ubicacion=latLngObj
    //     this.getAddress(latLngObj);
    //     localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
    //     return latLngObj;
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    // getAddress(latLngObj) {
    //   // Get the address object based on latLngObj
    //   this.mapService.getStreetAddress(latLngObj).subscribe(
    //     s_address => {
    //       if (s_address.status == "ZERO_RESULTS") {
    //         this.mapService.getAddress(latLngObj).subscribe(
    //           address => {
    //             this.address = address.results[0].formatted_address;
    //             //this.getAddressComponentByPlace(address.results[0], latLngObj);
    //           },
    //           err => console.log("Error in getting the street address " + err)
    //         )
    //       } else {
    //         console.log('ingrese.....',s_address)
    //         this.address = s_address.results[0].formatted_address;
    //         this.sacaactualdistrito(this.address)
    //         this.referencia = s_address.results[0].formatted_address;
    //         //this.getAddressComponentByPlace(s_address.results[0], latLngObj);
    //         //alert(latLngObj)
    //         //this.storage.set('ubicacion', latLngObj)
    //         //alert(this.address);
    //       }
    //     },
    //     err => {
    //       //alert('No Address found ' + err);
    //     }
    //   );
    // }
    MenPage.prototype.sacaactualdistrito = function (ubicacion) {
        var _this = this;
        var creds = JSON.stringify({ ubicacion: ubicacion });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post(this.server.getMyGlobalVar() + 'obtienedistrito/', creds, options)
            .subscribe(function (data) {
            _this.storage.set('distrito', data['_body']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
    ], MenPage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]) === "function" && _b || Object)
    ], MenPage.prototype, "slides", void 0);
    MenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-men',template:/*ion-inline-start:"/home/andy/mylook/src/pages/men/men.html"*/'\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>STILO</ion-title>\n\n      \n<ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                \n                            \'>{{book}}</ion-badge> \n\n      <ion-buttons *ngIf=\'book>0\' end>\n      <button end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n\n    \n    </ion-navbar>\n  </ion-header>\n<ion-content>\n\n\n\n\n<!--<ion-slides *ngIf="photo1" autoplay="2000"  speed="4000" pager paginationType=\'bullets\'>\n\n\n  <ion-slide ng-click=\'iradetalle(1)\'>\n\n    <img src="{{host}}{{photo1}}" alt="">\n  </ion-slide>\n\n  <ion-slide ng-click=\'iradetalle(2)\'>\n    <img src="{{host}}{{photo2}}" alt="">\n  </ion-slide>\n\n\n  <ion-slide ng-click=\'iradetalle(3)\'>\n    <img src="{{host}}{{photo3}}" alt="">\n  </ion-slide>\n\n  <ion-slide ng-click=\'iradetalle(4)\'>\n    <img src="{{host}}{{photo4}}" alt="">\n  </ion-slide>\n\n</ion-slides >\n\n\n<ion-slides *ngIf="photo5" effect=\'fade\' autoplay="2000"  speed="3000" style=\'margin-top: -2px;\'>\n\n\n  <ion-slide>\n\n    <a href=\'{{link5}}\'>\n    <img src="{{host}}{{photo5}}" alt="">\n    </a>\n\n  </ion-slide>\n  <ion-slide>\n\n    <a href=\'{{link6}}\'>\n    <img src="{{host}}{{photo6}}" alt="">\n    </a>\n\n  </ion-slide>\n  <ion-slide>\n    <a href=\'{{link7}}\'>\n    <img src="{{host}}{{photo7}}" alt="">\n    </a>\n  </ion-slide>\n\n  <ion-slide>\n    <a href="{{link8}}">\n    <img src="{{host}}{{photo8}}" alt="">\n    </a>\n  </ion-slide>\n\n</ion-slides>-->\n\n\n\n\n<div style=\'margin-top:-2px;\'>\n\n\n<div  *ngFor = \'let c of categoria\' (click)=\'iraventas(c)\' >\n\n\n\n      <a *ngIf=\'c.photo\'  >\n        <img  src="{{host}}{{c.photo}}"  class=\'categoriaimagen\' >\n         <div class=\'categoria\' style=\'color:#fff;\'>{{c.nombre}}</div>\n      </a>\n\n   \n\n<div style="height:2px;"></div>\n\n </div>\n\n </div>\n\n<!-- <div style=\'height: 50px\'></div> \n -->\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/men/men.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__["a" /* PortadaProvider */], __WEBPACK_IMPORTED_MODULE_19__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_19__providers_server_server__["a" /* ServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__providers_server_server__["a" /* ServerProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__["a" /* PortadaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__["a" /* PortadaProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _s || Object])
    ], MenPage);
    return MenPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
}());

//# sourceMappingURL=men.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompartirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginprincipal_loginprincipal__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CompartirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompartirPage = (function () {
    function CompartirPage(appCtrl, modalCtrl, toastCtrl, clipboard, _perfil, socialSharing, navCtrl, navParams) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.clipboard = clipboard;
        this._perfil = _perfil;
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.codigo_compartir = data[0]['codigo_compartir'];
            console.log('perfil...', data);
        }, function (error) {
            console.log(error);
            //this.appCtrl.getRootNav().setRoot(LoginprincipalPage)
        });
    }
    CompartirPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompartirPage');
    };
    CompartirPage.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Comparte la aplicacion con el codigo y recibe un servicio gratis " + this.codigo_compartir, "https://lh3.googleusercontent.com/i7F_CVDccNVkUCP04bfWtBaea3a-ptwfv6Bj4X0WxVD9UyMz4cdZeJ9MV-o87-1zF9c=s180-rw", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    CompartirPage.prototype.copiar = function (data) {
        this.clipboard.copy(data);
        this.presentToast();
    };
    CompartirPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Codigo copiado',
            duration: 4000
        });
        toast.present();
    };
    CompartirPage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */], { userId: 8675309 });
        profileModal.present();
    };
    CompartirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-compartir',template:/*ion-inline-start:"/home/andy/mylook/src/pages/compartir/compartir.html"*/'<!--\n  Generated template for the CompartirPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Invitación</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n\n\n\n\n<h2>¿Quieres 5 soles?</h2>\n\n\n<p>Obtén y regala 5 soles de descuento cuando invites a un amigo (a) a probar my look xpress</p>\n\n\n\n<div style=\'height: 10px;\'></div>\n\n<img style=\'border-radius: 15px;\' src="https://img2.topsante.com/var/topsante/storage/images/1/3/1/4/1314105/les-reseaux-sociaux-nuisent-bien-etre_exact540x405_l.jpg">\n\n\n \n<div style=\'height: 10px;\'></div>\n\n <label>Comparte tu codigo de invitacion</label>\n\n \n\n\n <button full  color=\'dark\' round ion-button icon-end (click)="copiar(codigo_compartir)">\n\n  {{codigo_compartir}}\n</button>\n\n\n<div style=\'height: 10px;\'></div>\n \n\n\n<button color=\'danger\' full round ion-button (click)="shareSheetShare()" block round color="light">Invita a amigos</button> \n\n\n<!-- <button ion-button block round color="light"><a style=\'color: #000;\n    text-decoration: none;\' href="https://api.whatsapp.com/send?text=Comparte%20la%20aplicacion%20con%20el%20codigo%20%{{codigo_compartir}}y%20recibe%20un%20servicio%20gratis%20https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es"> Compartir <ion-icon name="logo-whatsapp" style=\'color: #000;\'></ion-icon></a></button>-->\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/compartir/compartir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_3__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CompartirPage);
    return CompartirPage;
}());

//# sourceMappingURL=compartir.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialsociaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_alerta_alerta__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistorialsociaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialsociaPage = (function () {
    function HistorialsociaPage(_servicio, navCtrl, navParams) {
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistorialsociaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HistorialsociaPage');
        this._servicio.serviciosdesocias()
            .subscribe(function (data) { return _this.servicios = data; });
    };
    HistorialsociaPage.prototype.iradetalle = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_alerta_alerta__["a" /* AlertaPage */], {
            servicio: data.id,
        });
    };
    HistorialsociaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historialsocia',template:/*ion-inline-start:"/home/andy/mylook/src/pages/historialsocia/historialsocia.html"*/'<!--\n  Generated template for the HistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content >\n\n\n\n  <ion-item-sliding>\n    \n    <ion-item *ngFor="let item of servicios" >\n      <ion-avatar item-start>\n        <img src="{{host}}/{{item.socia__photo}}">\n      </ion-avatar>\n\n\n      <div class="row" (click)=\'iradetalle(item)\'>\n      <div class="col"> <h2>{{item.id}} {{item.socia__nombre}} </h2></div>\n      <div class="col">\n        \n          <span style="font-size: 13px;\n   \n    "><ion-icon name="calendar"></ion-icon> {{item.fecha}} {{item.fecha_inicio}}</span>\n\n      </div>\n      </div>\n    \n    </ion-item>\n \n  </ion-item-sliding>\n\n\n\n\n</ion-content>\n\n<mytabssocia></mytabssocia>'/*ion-inline-end:"/home/andy/mylook/src/pages/historialsocia/historialsocia.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HistorialsociaPage);
    return HistorialsociaPage;
}());

//# sourceMappingURL=historialsocia.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { RequestOptions, Headers } from '@angular/http';






//import { HomePage } from '../../pages/home/home';
/*
  Generated class for the PerfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PerfilProvider = (function () {
    //private nav: NavController,public storage: Storage,
    function PerfilProvider(storage, authHttp, _http, server) {
        this.storage = storage;
        this.authHttp = authHttp;
        this._http = _http;
        this.server = server;
        console.log('Hello PerfilProvider Provider');
    }
    PerfilProvider.prototype.miperfil = function () {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'miperfil/')
            .map(function (response) { return response.json(); });
    };
    PerfilProvider.prototype.getperfil = function () {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'miperfil/').map(function (res) {
            return res.json();
        });
    };
    PerfilProvider.prototype.enviasms = function (telefono) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'enviasms/' + telefono).map(function (res) {
            return res.json();
        });
    };
    PerfilProvider.prototype.actualiza = function (data) {
        return this.authHttp.post(this.server.getMyGlobalVar() + 'actualizaperfil/', JSON.stringify({ cliente: data }))
            .map(function (response) {
            return response.json();
        });
    };
    PerfilProvider.prototype.actualizatarjeta = function (data) {
        return this.authHttp.post(this.server.getMyGlobalVar() + 'actualizatarjeta/', JSON.stringify({ cliente: data }))
            .map(function (response) {
            return response.json();
        });
    };
    PerfilProvider.prototype.validauser = function (data) {
        return this.authHttp.post(this.server.getMyGlobalVar() + 'validauser/', JSON.stringify({ cliente: data }))
            .map(function (response) {
            return response.json();
        });
    };
    PerfilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__providers_server_server__["a" /* ServerProvider */]])
    ], PerfilProvider);
    return PerfilProvider;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alerta/alerta.module": [
		359,
		33
	],
	"../pages/aviso/aviso.module": [
		360,
		32
	],
	"../pages/ayuda/ayuda.module": [
		361,
		31
	],
	"../pages/carrito/carrito.module": [
		362,
		30
	],
	"../pages/coberturas/coberturas.module": [
		363,
		29
	],
	"../pages/compartir/compartir.module": [
		364,
		28
	],
	"../pages/configuracion/configuracion.module": [
		365,
		1
	],
	"../pages/cuando/cuando.module": [
		366,
		0
	],
	"../pages/detalleproducto/detalleproducto.module": [
		367,
		27
	],
	"../pages/detalleservicio/detalleservicio.module": [
		368,
		26
	],
	"../pages/finalizaservicio/finalizaservicio.module": [
		369,
		25
	],
	"../pages/historial/historial.module": [
		370,
		24
	],
	"../pages/historialsocia/historialsocia.module": [
		371,
		23
	],
	"../pages/intro/intro.module": [
		372,
		22
	],
	"../pages/login/login.module": [
		373,
		21
	],
	"../pages/loginprincipal/loginprincipal.module": [
		374,
		20
	],
	"../pages/men/men.module": [
		375,
		19
	],
	"../pages/notificacion/notificacion.module": [
		376,
		18
	],
	"../pages/notificaciones/notificaciones.module": [
		377,
		17
	],
	"../pages/pago/pago.module": [
		378,
		16
	],
	"../pages/pagotarjeta/pagotarjeta.module": [
		379,
		15
	],
	"../pages/perfil/perfil.module": [
		380,
		14
	],
	"../pages/registro/registro.module": [
		381,
		13
	],
	"../pages/registrofinal/registrofinal.module": [
		382,
		12
	],
	"../pages/registroprincipal/registroprincipal.module": [
		383,
		11
	],
	"../pages/reserva/reserva.module": [
		384,
		10
	],
	"../pages/servicio/servicio.module": [
		385,
		9
	],
	"../pages/sexo/sexo.module": [
		386,
		8
	],
	"../pages/socias/socias.module": [
		387,
		7
	],
	"../pages/subirimagen/subirimagen.module": [
		388,
		6
	],
	"../pages/tabs/tabs.module": [
		389,
		5
	],
	"../pages/terminos/terminos.module": [
		390,
		4
	],
	"../pages/terminospromociones/terminospromociones.module": [
		391,
		3
	],
	"../pages/venta/venta.module": [
		392,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrofinalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegistrofinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrofinalPage = (function () {
    function RegistrofinalPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.isLoggedIn = false;
        this.user = {};
        this.activa = false;
        this.todo = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: [''],
        });
    }
    RegistrofinalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrofinalPage');
    };
    RegistrofinalPage.prototype.logForm = function (env) {
        console.log(env.email);
    };
    RegistrofinalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registrofinal',template:/*ion-inline-start:"/home/andy/mylook/src/pages/registrofinal/registrofinal.html"*/'<!--\n  Generated template for the RegistrofinalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n      <ion-item>\n            <ion-input    name=\'codigo\'  type="text"  [(ngModel)] = "codigo"></ion-input>\n      </ion-item>\n\n<ion-content padding>\n\n	  <form  (ngSubmit)="logForm(user)" [formGroup]="todo">\n \n       <ion-list inset>\n\n        \n<div style=\'height: 20px\'></div>\n\n\n     \n      <label color=\'dark\'>Correo Electronico</label>\n      <ion-item>\n            <ion-input  formControlName="email"  name=\'email\' id="loginField" type="email" required [(ngModel)] = "user.email"></ion-input>\n      </ion-item>\n\n      <div style=\'height: 20px\'></div>\n\n\n      <label color=\'dark\'>Nombre y Apellidos</label>\n      <ion-item>\n            <ion-input formControlName="nombre"  name=\'nombre\' id="loginField" type="text" required [(ngModel)] = "user.nombre"></ion-input>\n      </ion-item>\n\n\n      <ion-label>Términos y Condiciones</ion-label>\n    <ion-checkbox [(ngModel)]="user.terminos"></ion-checkbox>\n\n      </ion-list>\n\n\n\n      <button round ion-button type="submit" color=\'dark\' block [disabled]="!todo.valid">Registrar</button>\n    </form> \n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/registrofinal/registrofinal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegistrofinalPage);
    return RegistrofinalPage;
}());

//# sourceMappingURL=registrofinal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosPage = (function () {
    function TerminosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosPage');
    };
    TerminosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terminos',template:/*ion-inline-start:"/home/andy/mylook/src/pages/terminos/terminos.html"*/'<!--\n  Generated template for the TerminosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>Terminos y Condiciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<p>Las Condiciones del Usuario presentadas a continuación.\nSerán aplicables al uso del sitio web, en adelante sitio\nweb y el servicio y la aplicación, así como a toda la\ninformación. recomendaciones o servicios prestados a\ntravés de los mismos. </p>\n<p>\nPor favor, lea las siguientes términos y condiciones del usuario detenidamente antes\nde acceder al Sitio web o de descargar La Aplicación.\n Al acceder al Sitio web o descargar la Aplicación, instalarla, o\nhacer efectivo el servicio; usted acepta estas condiciones\ny se obliga a cumplirlas. En caso de que usted no este de\nacuerdo con lo aquí consignado; por favor no acceda al\nSitio web ni descargue la Aplicación.</p>\n\n<p>\nEl Sitio web y La Aplicación son operados por AFCA SOLUTION S.A.C. constituida en Perú. con domicilio en Jr. Cusco 364 Callao.</p>\n\n<h6>1. Deﬁniciones</h6>\n<p>\nPara los ﬁnes de las presentes Condiciones del\nUsuario. serán de aplicación las siguientes\ndeﬁniciones:</p>\n\n<p>\na. El. PROFESIONAL: Es un tercero que se dedica\nprofesionalmente a la prestación de servicios\npeluquería y spa y que se identiﬁque como tal.</p>\n\n<p>\nb. EL USUARIO Es el usuario final de los servicios\nprestados por EL PROFESIONAL que se registre\ncomo tal.</p>\n\n<p>\nc. SERVICIOS: Todos los servicios prestados por EL\nPROFESIONAL a través de la Aplicación o del Sitio\nweb.</p>\n\n<h6>2. Servicios</h6>\n<p>\nLa EMPRESA ofrece a través de la página Web y de la\nAplicación, un servicio de intermediación que facilita\nel contacto entre terceros que se dedican\nprofesionalmente a la prestación de servicios\npeluquería y spa; y los usuarios ﬁnales de estos servicios\n(EL USUARIO).</p>\n\n<p> Entre La EMPRESA y EL PROFESIONAL\nno existe relación laboral ni subordinación o\ndependencia de ningún tipo mediante el sistema. La\nEMPRESA permite que EL USUARIO se registre,\nubique y contacte rápidamente a EL PROFESIONAL.</p>\n\n<h6>3. Usuario y La EMPRESA</h6>\n<p>\nEL USUARIO declara tener 18 años o más para usar el\nServicio o la Aplicación. Si reside en una jurisdicción\nque restringe el uso del Servicio o la Aplicación por\nmotivos de edad o restringe la capacidad de suscribir\ncontratos corno el presente por motivos de edad,\ndeberá respetar estos límites de edad y abstenerse de\nutilizar el Servicio y la Aplicación.</p>\n\n<p>El USUARIO declara ser una persona natural. mayor\nde edad y con plena capacidad para celebrar y\nformalizar un contrato vinculante, o una persona\njurídica autorizada para formalizar y vincularse a estas\nCondiciones del Usuario y registrarse para el Servicio y\nla Aplicación.</p>\n\n\n<h6>4. Registro</h6>\n\n<p>\nPara poder utilizar el servicio de intermediación\nbrindado por La EMPRESA. Deberá registrarse como\nusuario, al registrarse estará obligado a facilitar a La\nEMPRESA la siguiente información personal: número\nde teléfono. datos de su tarjeta de crédito y todos los\ndatos adicionales requeridos para llenar el formulario.\nTras completar adecuadamente el registro; La\nEMPRESA le facilitará una cuenta personal a la que\npodrá acceder con la contraseña que el propio usuario\nelija para el efecto, el registro se someterá a estas\ncondiciones:</p>\n\n<p>a. EL USUARIO deberá garantizar que la información\nproporcionada a La EMPRESA es precisa y\ncompleta La EMPRESA no tiene la obligación de\nsupervisar o controlar la información, pero tendrá\nderecho en todo momento a comprobar la\ninformación facilitada y a denegar el servicio o el\nuso de la Aplicación o de la página Web. sin\nexplicar sus motivos.</p>\n\n<p>b. Solo las personas que tienen la capacidad legal\nestán autorizados para hacer uso del servicio\nprestado por La EMPRESA.</p>\n\n<p>c. La EMPRESA se reserva el derecho de cancelar la\ncuenta del usuario en cualquier momento por\nincumplimiento de parte del usuario de las\npolíticas de uso de la aplicación o por conductas\nreñidas con el ordenamiento y las políticas\ninternas.</p>\n\n<p>d. La EMPRESA se reserva el derecho de usar\ncualquier acción legal posible para identiﬁcar a los\nusuarios, así como requerir en cualquier momento\ndocumentación extra que se considere apropiada\npara verificar la información personal del usuario.</p>\n\n<p>e. La EMPRESA no se responsabiliza por cualquier\ndaño como resultado de la pérdida o mal uso de\nla clave por parte de terceros, el usuario es el único\nresponsable por ello.</p>\n\n<p>f. No se puede transferir por ningún motivo el\nregistro del usuario a terceras personas.</p>\n\n<h6>5. Uso del servicio y Aplicación</h6>\n\n<p>La Aplicación le permitirá al EL USUARIO enviar una\nsolicitud de servicio a EL PROFESIONAL.\n El receptor de GPS (el cual deberá estar instalado en el dispositivo\nmóvil -Smartphone - en el que haya descargado la\nAplicación) detectará la ubicación del EL USUARIO y\nle enviará la información de la misma al\nPROFESIONAL. EL PROFESIONAL será eI/Ia única que\npodrá decidir aceptar o rechazar cada solicitud de\nservicio. Si EL PROFESIONAL acepta una solicitud, la\naplicación notiﬁcará y le ofrecerá inmediatamente a\nEL USUARIO información relativa de EL\nPROFESIONAL; como nombre completo, caliﬁcación.\nubicación, tiempo de demora, tarifa de servicio, y la\nposibilidad de prestar el servicio.</p>\n\n<p>Cabe resaltar que La EMPRESA por sí mismo no\npresta servicios de peluquería y spa y no tiene a cargo\nprofesionales dentro de su staff. EL PROFESIONAL es\nquien decide ofrecer estos servicios los cuales se\npueden solicitar mediante el uso de la Aplicación o de\nla página Web. LA EMPRESA solo actúa como\nintermediario entre EL USUARIO y EL PROFESIONAL.\npara facilitar el contacto entre estos. Por lo tanto la\nprestación de los servicios por parte de EL\nPROFESIONAL estará sujeta al acuerdo convenido\nentre EL USUARIO. La EMPRESA no será nunca\nuna parte de este acuerdo.</p>\n\n<p>Solo se podrá acceder al servicio utilizando medios\nautorizados y es responsabilidad de EL USUARIO\nasegurarse que Ia descarga de Ia Aplicación sea\ncorrecta para su dispositivo. La EMPRESA no será\nresponsable si no tiene un dispositivo móvil\ncompatible o si descarga la versión errónea de la\nAplicación para su dispositivo móvil. La EMPRESA se\nreserva el derecho a ﬁnalizar el servicio y el uso de la\naplicacion en caso de que utilice con un dispositivo\nincompatible o no autorizado.</p>\n\n<p>Al utilizar la Aplicación o la página Web, el usuario\nAcuerda que:</p>\n<p>\n\n	<p>\n1. Solo utilizara o descargara la aplicación\nexclusivamente para su uso personal y no la\nrevenderá a un tercero.</p>\n<p>\n2. No autorizara a otros a usuarios su cuenta.</p>\n\n<p>\n3. No cederá ni transferirá de otro modo su cuenta a\nninguna otra persona o entidad legal.</p>\n<p>\n4. No utilizara una cuenta que esté sujeta a cualquier\nderecho de una persona que no sea el usuario sin\nIa autorización adecuada.</p>\n\n<p>\n\n5. No utilizara Ia Aplicación o la pagina Web con ﬁnes\nilícitos, incluyendo sin limitación para enviar o\nalmacenar ningún material ilegal o con ﬁnes\nfraudulentos</p>\n\n<p>\n6. No utilizara la Aplicación para causar molestias,\ntrastornos o inconvenientes.</p>\n<p>\n7. No perjudicara el funcionarniento adecuado de la red.\n</p>\n<p>\n8. No tratará de dañar la Aplicación de ningún modo.</p>\n<p>\n9. No copiara ni distribuirá la Aplicación ni ningún\ncontenido de LA EMPRESA sin el permiso escrito\nde LA EMPRESA.</p>\n\n<p>\n10. LA EMPRESA guardara de forma segura y\nconﬁdencial, Ia contraseña de su cuenta y\ncualquier identificación facilitada para permitirle\nacceder a la Aplicación.</p>\n\n<p>\n\n11. EL USUARIO facilitara a LA EMPRESA toda las\npruebas de identidad que le solicitemos\nrazonablemente.</p>\n\n<p>\n\n12. Solo utilizara un punto de acceso o cuenta de\ndatos 30 (AP) que esté autorizado a usar.</p>\n\n<p>\n13. No utilizara el servicio o la Aplicación con un\ndispositivo incompatible o no autorizado:</p>\n\n<p>\n14. Cumplira con toda la Legislación aplicable de su\npaís de residencia y del país, estado o ciudad en el\nque se encuentre al usar la Aplicación o el servicio.\n</p>\n\n	<p>\nLa EMPRESA se reserva el derecho a brindar\ninmediatamente el servicio y el uso de la Aplicación\nen caso de que incumpla alguna de las normas\nanteriores.</p>\n\n\n<h6>6. Pago</h6>\n\n<p>\nLa EMPRESA cobrará al USUARIO por los servicios\nprestados por la EL PROFESIONAL en nombre del\nmismo. EL USUARIO acuerda pagar todos los servicios\n(Incluyendo el IGV) que adquiera de EL PROFESIONAL\ny que La EMPRESA podrá cobrar en Ia cuenta de la\ntarjeta de crédito que facilitó al registrarse; los pagos\nrealizados no son reembolsables.</p>\n\n<p>\n\nLA EMPRESA utiliza la Pasarella de pago de un\ntercero en adelante \'Pasarella de Pago\' para vincular\nla cuenta de tarjeta de crédito de EL USUARIO a la\nAplicación. La Pasarella de Pago; según sea de\naplicación con respecto al uso que haga de la\nAplicación y el Servicio, estará sujeto a las condiciones\ny políticas de privacidad del procesador del pago y el\nemisor de la tarjeta de crédito, además de a estas\ncondiciones del usuario.</p>\n\n<p>\n La EMPRESA no se hace\nresponsable de ningún error de la Pasarella de Pago.</p>\n\n<p>\n\nPara el caso de pago en efectivo. EL USUARIO\nentregará a EL PROFESIONAL el monto acordado a\ntravés de la aplicación por los servicios peluquería y\nspa (incluyendo el impuesto).</p>\n\n\n<h6>7. Política De Privacidad</h6>\n\n<p>\nLa EMPRESA con el objeto de desarrollar\nadecuadamente su actividad cuenta con una base de\ndatos de aﬁliados y usuarios de los servicios y para el\nefecto solicita la entrega de datos personales tales\ncomo nombre, identiﬁcación e información de\ncontacto como número de teléfono, correo\nelectrónico y dirección. Cualquier otra información\nrelevante para facilitar la prestación de los servicios\npor parte de EL PROFESIONAL</p>\n\n<p>\nLa información personal de los usuarios será utilizada\npor La EMPRESA con las siguientes ﬁnalidades:\n a) Contacto a usuarios de los servicios a través de\ndiferentes canales como son: llamadas telefónicas,\nmensajes de texto, correo electrónico, redes sociales.\nb) Desarrollo de actividades de análisis históricos y\nestudios estadísticos.\nc) Realización de actividades comerciales de mercadeo y publicitarias de la\ncompañía, aliados comerciales u otras entidades con\nlas que se realicen acuerdos comerciales para el\nefecto.\n d) Envío de información institucional de La\nEMPRESA o publicaciones del interés.\ne) Estudio de\nantecedentes judiciales, administrativos y laborales.</p>\n\n<p>\n\nLa información personal no será utilizada con\npropósitos diferentes a los manifestados; sin embargo\npodrá ser divulgada por La EMPRESA cuando así sea\nrequerido por  una orden judicial, o una\nautoridad competente en ejercicio de sus funciones.\nDicha divulgación se realizará sin necesidad de\ncomunicar sobre la misma al aﬁliado; lo cual es\naceptado de manera expresa por este último.</p>\n\n<p>\n\n\nLa EMPRESA podrá llevar a cabo el tratamiento de los\ndatos personales en sus propios servidores o en\naquellos provistos por un tercero especializado en la\nmateria con fundamento en los acuerdos que se\nrealicen por parte de la entidad para tal objeto.</p>\n\n<p>\n\nEn caso de que se comparta la información con\nterceras personas para el cumplimiento de los ﬁnes\naqui establecidos tales como call y contact centers y\nempresas dedicadas a la realización de estudios de\nmercado estadísticos o encuestas; estos terceros\nestarán igualmente sujetos a las mismas obligaciones\nde conﬁdencialidad en el manejo de la información a\nque está sujeto LA EMPRESA con las limitaciones\nlegales impuestas por las leyes aplicables sobre la\nmateria en el Perú. </p>\n<p>\nCabe señalar que el USUARIO\nAutoriza, con la aceptación del presente a que\nLA EMPRESA pueda compartir su información y en\nconsecuencia, renuncia a iniciar o interponer\ncualquier acción legal que tenga como pretensión el\nresarcimiento de cualquier daño y/o perjuicio con\nrelación a este hecho.\n</p>\n\n<p>\nSi usted no quiere seguir recibiendo correos\nelectrónicos de La EMPRESA podrá retirarse de\nnuestra lista enviando un correo electrónico a\ninfo@stilo.app.com\n\n</p>\n\n<p>\n\nDatos de menores y sensibles\nLa EMPRESA en razón del servicio que presta a sus\nusuarios podrá realizar el tratamiento de datos de\nmenores de edad en desarrollo de sus actividades. La\nEMPRESA. ante la imposibilidad de realizar las\nveriﬁcaciones pertinentes entiende que cada vez que\nun menor se inscribe como usuario de los servicios de\nla entidad y proporciona su información personal la\nactualiza o la modiﬁca se encuentra acompañado de\nun adulto responsable que aprueba su actuación ya\nsea que mantengan un vínculo de parentesco directo\no no.\n\n</p>\n\n<p>\n\nSin embargo, LA EMPRESA hace claridad en que el\nmanejo de datos de menores se hará siempre en su\nbeneﬁcio y en todo caso con respeto al interés\nsuperior de los niños, niñas y adolescentes y sus\nderechos fundamentales.\n\n</p>\n<p>\n\nEl PROFESIONAL en lo posible no realiza el\ntratamiento de datos sensibles, sin embargo, en caso\nde ser requerido tiene establecida la posibilidad para\nel titular de los datos de no responder a preguntas o\ncircunstancias que puedan involucrar esta categoría\nde datos.\n</p>\n\n<p>\nSeguridad\nLa seguridad de su información es de suma\nimportancia para LA EMPRESA; Contamos con\ntecnología de vanguardia para asegurar que su información\npersonal se encuentre protegida en el proceso de\nenvió y almacenamiento, la información de nuestros\naﬁliados es guardada y asegurada en bases de datos\nprotegidas y de accesos no autorizados.\n</p>\n\n<p>\nEn Internet no hay ninguna información que pueda\nestar 100% asegurada. En LA EMPRESA tratamos de\nproteger su información personal por todos los\nmedios posibles a nuestro conocimiento, pero no\npodemos garantizar totalmente la seguridad de la\ninformación que usted envía, mantener en secreto su\nnombre de cuenta, contraseña y cualquier otra\ninformación es su responsabilidad.\n\n</p>\n\n<p>\n\n\nSeguridad\nToda persona natural que actúe en tal condición y no\nen razón de ser representante de una persona jurídica\no en su calidad de comerciante en relación con los\nactos propios de sus labores cotidianas, tiene derecho\na veriﬁcar al menos una vez al mes, corregir, actualizar\no solicitar la eliminación de cualquier información\npersonal solicitada y proveída a La EMPRESA.\n</p>\n\n<p>\nPara el ejercicio de los derechos aquí establecidos los\ntitulares de la información podrán contactarse con La\nEMPRESA a través del área de servicio al cliente en la\nsiguiente página web de la entidad:\nwww.stilo.app  y las solicitudes serán atendidas\nde acuerdo con los tiempos establecidos para el\nefecto en las leyes de protección de datos vigentes en\nel momento.\n</p>\n\n<p>\nAceptación De Estos Términos\nEl uso de esta aplicación implica que usted está de\nacuerdo con nuestra Política de Seguridad y\nPrivacidad.\n\n</p>\n\n<p>\n\nLA EMPRESA se reserva el derecho de modificar la\npolítica de privacidad de la información de carácter\npersonal en cualquier momento. Para el efecto\nrealizará la publicación de un aviso en la página de\ninternet con dos (2) días hábiles de antelación a su\nentrada en vigencia. El uso de la página de internet de\nLA EMPRESA o de la aplicación dispuesta para\naﬁliados; después de la fecha de entrada en vigencia\nde la última modiﬁcación, indicará la aceptación a los\ncambios realizados.\n</p>\n<h6>\nVigencia de los datos</h6>\n\n<p>\n\nLA EMPRESA en razón del servicio que presta a sus\nUSUARIOS; conservará los datos de registro de unos y\notros de manera indeﬁnida en sus bases de datos, sin\nembargo estos serán suprimidos en cualquier\nmomento en que así sea requerido por el USUARIO. En\ntal caso no recibirá ningún tipo de información\nadicional de LA EMPRESA y no habrá posibilidad para\nla prestación de los servicios por parte nuestra a\nmenos que se realice una nueva inscripción.\n</p>\n\n<h6>Responsabilidad</h6>\n\n<p>\nLa información, recomendaciones u otros servicios\nprestados en o a través de la aplicación o del sitio\nweb, son solo información general y no constituyen un\naviso. LA EMPRESA se ocupará de mantener el sitio\nWeb y la Aplicación y sus contenidos de forma\nrazonablemente correcta y actualizada; pero no podrá\ngarantizar que los contenidos del Sitio Web y la\nAplicación carezcan de errores, defectos, malware y\nvirus y que el Sitio Web o la Aplicación sean correctos\nestén actualizados y sean precisos\n</p>\n<p>\nLa EMPRESA no será responsable por ningún daño\nderivado del uso o de la incapacidad de usar el sitio\nWeb o la Aplicación, incluyendo los daños causados\npor malware, virus o cualquier información incorrecta\no incompleta de aquella contenida en el Sitio Web o\nAplicación.</p>\n\n<p>La calidad de los servicios solicitados a través del uso\nde la Aplicación será plenamente responsabilidad de\nEL PROFESIONAL quien en última instancia serán las\nencargadas de prestar el servicio. Bajo ninguna\ncircunstancia La EMPRESA aceptará ninguna\nresponsabilidad en relación con o derivada de la\nprestación de los servicios por parte de estos últimos,\nni por ningún acto, acción, comportamiento, conducta\no negligencia por parte de los mismos. Todas las\nreclamaciones sobre los servicios prestados se\ndeberán remitir de manera directa a las mismas y\nbajo ninguna circunstancia a la empresa.</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/terminos/terminos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TerminosPage);
    return TerminosPage;
}());

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminospromocionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TerminospromocionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminospromocionesPage = (function () {
    function TerminospromocionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminospromocionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminospromocionesPage');
    };
    TerminospromocionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terminospromociones',template:/*ion-inline-start:"/home/andy/mylook/src/pages/terminospromociones/terminospromociones.html"*/'\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>STILO</ion-title>\n\n         <ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                            \'>{{book}}</ion-badge> \n                            \n\n        <ion-buttons end>\n      <button *ngIf=\'book>0\' end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n\n    </ion-navbar>\n  </ion-header>\n\n  \n<ion-content padding>\n\n  <h2>Políticas de Promociones:</h2>\n<p>Promoción de “20 SOLES DE DESCUENTO PARA TU PRIMER PEDIDO”, Promoción exclusiva para usuarios registrados, no aplicable a distritos sin cobertura, valido desde el 02 de Noviembre 2018 al 02 de Febrero de 2019 o hasta agotar stock de 100 promociones, sujeto la disponibilidad de horarios y personal. Disponible únicamente para pago en efectivo, no aplicable a otros medios de pago. Los descuentos no son  acumulables, excepto para “PAQUETES DE SERVICIOS  EN PROMOCION”, mas no; para promociones de “SERVICIOS INDIVIDUALES”</p>\n<p>No se entregarán duplicados de los descuentos, la custodia del mismo es responsabilidad del cliente. Los descuentos no son canjeables por dinero en efectivo. No se aplican devoluciones posteriores al canje de los mismos. Este beneficio es personal e intransferible. Aplica condiciones y restricciones en <a href=\'www.stiloapp.com\'>www.stiloapp.com.</a></p>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/terminospromociones/terminospromociones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TerminospromocionesPage);
    return TerminospromocionesPage;
}());

//# sourceMappingURL=terminospromociones.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_portada_portada__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicios_servicios__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionesPage = (function () {
    function NotificacionesPage(_portada, navCtrl, navParams) {
        var _this = this;
        this._portada = _portada;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._portada.getnotificaciones()
            .subscribe(function (data) { return _this.notificaciones = data; });
    }
    NotificacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionesPage');
    };
    NotificacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificaciones',template:/*ion-inline-start:"/home/andy/mylook/src/pages/notificaciones/notificaciones.html"*/'\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>Notificaciones </ion-title>\n\n         <ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                            \'>{{book}}</ion-badge> \n                            \n\n        <ion-buttons end>\n      <button *ngIf=\'book>0\' end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n\n    </ion-navbar>\n  </ion-header>\n\n  \n<ion-content >\n\n<div style=\'height: 10px;\'></div>\n  <ion-item *ngFor="let item of notificaciones" >\n      \n\n      {{item.nombre}}\n   \n\n\n\n    \n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/notificaciones/notificaciones.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_portada_portada__["a" /* PortadaProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NotificacionesPage);
    return NotificacionesPage;
}());

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoberturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CoberturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoberturasPage = (function () {
    function CoberturasPage(_categoria, navCtrl, navParams) {
        var _this = this;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._categoria.getdistritos()
            .subscribe(function (data) { return _this.distritos = data; });
    }
    CoberturasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoberturasPage');
    };
    CoberturasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-coberturas',template:/*ion-inline-start:"/home/andy/mylook/src/pages/coberturas/coberturas.html"*/'\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>Zonas de Cobertura </ion-title>\n\n         <ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                            \'>{{book}}</ion-badge> \n                            \n\n        <ion-buttons end>\n      <button *ngIf=\'book>0\' end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n\n    </ion-navbar>\n  </ion-header>\n\n  \n<ion-content>\n\n<ion-item *ngFor = \'let c of distritos\' style=\'padding-top: 10px;\'>\n\n	{{c.nombre}}\n\n</ion-item>\n</ion-content>\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/coberturas/coberturas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CoberturasPage);
    return CoberturasPage;
}());

//# sourceMappingURL=coberturas.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SexoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SexoPage = (function () {
    function SexoPage(view, navCtrl, navParams) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SexoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SexoPage');
    };
    SexoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    SexoPage.prototype.sexo = function (sexo) {
        console.log('ksksk', sexo);
        this.view.dismiss(sexo);
    };
    SexoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sexo',template:/*ion-inline-start:"/home/andy/mylook/src/pages/sexo/sexo.html"*/'<!--\n  Generated template for the SexoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding style=\'text-align:center;\' class=\'fondologin\'>\n\n	<ion-icon (click)=\'closeModal()\'  style=\'color: #fff;\n    font-size: 32px;\n    float: right;\n    position: absolute;\n    right: 24px;\' name="close"></ion-icon>\n\n	<img class=\'animated zoomIn\'  src="assets/imgs/icono-map.png" width="150px">\n\n\n	<h3 color=\'white\'>Escoge tu género</h3>\n\n	<ion-row>\n\n		<ion-col (click)=\'sexo("M")\' ><img style=\'max-width: 112px;\' src="assets/imgs/icono-mujer.png"> </ion-col>\n\n		<ion-col (click)=\'sexo("H")\' ><img style=\'max-width: 112px;\' src="assets/imgs/icono-hombre.png"></ion-col>\n\n		\n	</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/sexo/sexo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SexoPage);
    return SexoPage;
}());

//# sourceMappingURL=sexo.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SociasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SociasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SociasPage = (function () {
    function SociasPage(server, _servicio, navCtrl, navParams, view) {
        this.server = server;
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        console.log('_socia_detalle', navParams.get('_socia_detalle'));
        this.socia_detalle = navParams.get('_socia_detalle');
        this.host = this.server.getMyGlobalVar();
        // this._servicio.listasocias(navParams.get('pedido'))
        //  .subscribe(data => {
        //  	console.log('listasocias',data)
        //  	this._socias =data
        //  })
    }
    SociasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SociasPage');
    };
    SociasPage.prototype.closeModal = function () {
        //let datax = { 'producto': data };
        this.view.dismiss();
    };
    SociasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-socias',template:/*ion-inline-start:"/home/andy/mylook/src/pages/socias/socias.html"*/'\n\n\n<ion-content padding >\n\n\n\n\n<ion-icon (click)=\'closeModal()\'  style=\'font-size: 32px;\n    float: right;\' name="close"></ion-icon> \n\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <img class=\'animated bounceIn\' style=\'border-radius:50%;\' src="{{host}}{{socia_detalle.socia__photo}}">\n\n    </ion-col>\n    <ion-col style=\'padding-top: 40px;\n\'>\n      \n		<h2>{{socia_detalle.socia__nombre}}</h2>\n\n\n		<h6>{{socia_detalle.socia__descripcion_titulo}}</h6>\n\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n\n\n<h6>{{socia_detalle.socia__descripcion_socia}}</h6>\n\n<h6>Tiempo experiencia: {{socia_detalle.socia__texperiencia}}</h6>\n\n\n<!-- \n\n<h6>O tienes la opcion de escoger una de las socias</h6>\n\n<ion-grid>\n  <ion-row>\n    <ion-col  (click)= \'escogersocia(s)\' col-4 *ngFor = \'let s of _socias\' >\n      <img class=\'animated flipInY\' style=\'border-radius:50%;\' src=\'{{host}}{{s.socia__photo}}\'>\n      <h5>{{s.socia__nombre}}</h5>\n    </ion-col>\n\n  </ion-row>\n \n </ion-grid> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/socias/socias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], SociasPage);
    return SociasPage;
}());

//# sourceMappingURL=socias.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagotarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PagotarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagotarjetaPage = (function () {
    function PagotarjetaPage(view, _perfil, storage, spinner, http, toastCtrl, _servicio, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.view = view;
        this._perfil = _perfil;
        this.storage = storage;
        this.spinner = spinner;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this._servicio = _servicio;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarjeta = {};
        this.id_servicio = navParams.get("servicio");
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.email = data[0]['email'];
        });
        this._servicio.detalleservicio(this.id_servicio)
            .subscribe(function (data) {
            console.log('servicio...', data[0]['descuento'], data[0]['precio']);
            _this.precio = data[0]['precio'];
            _this.descuento = data[0]['descuento'];
            _this.total = _this.precio - _this.descuento;
            //this.total=this.total*100
        });
        console.log(this.id_servicio);
        this.todo = this.formBuilder.group({
            cardnumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cvv: [''],
            expiration_month: [''],
            expiration_year: [''],
        });
    }
    PagotarjetaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagotarjetaPage');
    };
    PagotarjetaPage.prototype.agregatoast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000,
            position: 'top',
        });
        toast.present();
    };
    PagotarjetaPage.prototype.guardatarjeta = function (data) {
        var _this = this;
        console.log(data);
        this._perfil.actualizatarjeta(data)
            .subscribe(function (data) {
            _this.view.dismiss();
        });
    };
    PagotarjetaPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    PagotarjetaPage.prototype.paga = function (datos) {
        var _this = this;
        this.spinner.load();
        this.headers = { 'Content-type': 'application/json', 'Authorization': 'Bearer pk_live_IuiGmfK038sUfpJI' };
        this.headers_cargo = { 'Content-type': 'application/json', 'Authorization': 'Bearer sk_live_uHeesJg2yWNYnWtr' };
        this.data = {
            "card_number": datos.card_number,
            "cvv": datos.cvv,
            "expiration_month": datos.expiration_month,
            "expiration_year": datos.expiration_year,
            "email": this.email
        };
        this.url = 'https://api.culqi.com/v2/tokens';
        this.url_cargo = 'https://api.culqi.com/v2/charges';
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"](this.headers)
        });
        var options_cargo = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"](this.headers_cargo)
        });
        var creds = JSON.stringify(this.data);
        this.http.post(this.url, creds, options)
            .subscribe(function (data) {
            _this.token = JSON.parse(data['_body'])['id'];
            _this.agregatoast('Estamos procesando tu pago');
            ///Creando cargo
            _this.data_cargo = {
                "amount": _this.total,
                "currency_code": "PEN",
                "email": _this.email,
                "source_id": _this.token
            };
            var cargo = JSON.stringify(_this.data_cargo);
            _this.http.post(_this.url_cargo, cargo, options_cargo)
                .subscribe(function (data) {
                _this.agregatoast('Conectando y sincronizando los servicios');
                _this._servicio.pagarenefectivo(_this.id_servicio)
                    .subscribe(function (data) {
                    _this.navCtrl.popToRoot();
                    _this.storage.remove('pedido');
                    _this.agregatoast('Felicidades, se completo tu pago');
                    _this.spinner.dismiss();
                }, function (error) {
                    _this.agregatoast(error._body);
                    _this.spinner.dismiss();
                });
            }, function (error) {
                _this.agregatoast(error._body);
                _this.spinner.dismiss();
            });
        }, function (error) {
            _this.agregatoast(error._body);
            _this.spinner.dismiss();
        });
        // this._servicio.pagotarjeta(data,this.id_servicio)
        //           .subscribe(data => {
        //               console.log('data...',data)
        //               this.agregatoast(data)
        //         })
    };
    PagotarjetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pagotarjeta',template:/*ion-inline-start:"/home/andy/mylook/src/pages/pagotarjeta/pagotarjeta.html"*/'<!--\n  Generated template for the PagotarjetaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>Datos de Tarjeta</ion-title>\n  </ion-navbar>\n\n <ion-icon (click)=\'closeModal()\'  style=\'font-size: 32px;\n    float: left;\n    position: absolute;\n    color:#fff;\n    top: 10px;\n    right: 15px;\' name="close"></ion-icon>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	  <form  (ngSubmit)="guardatarjeta(tarjeta)" [formGroup]="todo">\n \n       <ion-list inset>\n\n\n\n\n        <label color=\'dark\'>Numero de tarjeta</label>\n      <ion-item>\n            <ion-input formControlName="cardnumber" maxlength="16" name=\'cardnumber\' id="loginField" type="text" required [(ngModel)] = "tarjeta.cardnumber" ></ion-input>\n      </ion-item>\n\n     \n      <div style=\'height: 10px\' ></div>\n      <label  color=\'dark\'>CVV</label>\n      <ion-item >\n            <ion-input  formControlName="cvv"  name=\'cvv\'  maxlength="3" id="loginField" type="text" required [(ngModel)] = "tarjeta.cvv"></ion-input>\n      </ion-item>\n\n      <div style=\'height: 10px\'></div>\n\n\n      <label color=\'dark\' >Mes Expiracion</label>\n      <ion-item style=\'border-bottom: 1px solid #dedede;\'>\n            <ion-input formControlName="expiration_month"   name=\'expiration_month\' id="loginField" type="text" required [(ngModel)] = "tarjeta.expiration_month"></ion-input>\n      </ion-item>\n\n      <div style=\'height: 10px\'></div>\n\n      <label color=\'dark\' >Año Expiracion </label>\n      <ion-item  style=\'border-bottom: 1px solid #dedede;\'>\n            <ion-input formControlName="expiration_year"  name=\'expiration_year\' id="loginField" type="text" required [(ngModel)] = "tarjeta.expiration_year"></ion-input>\n      </ion-item>\n\n\n\n\n      </ion-list>\n\n\n\n      <button round ion-button type="submit" color=\'danger\' block [disabled]="!todo.valid">Guardar</button>\n    </form> \n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/pagotarjeta/pagotarjeta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PagotarjetaPage);
    return PagotarjetaPage;
}());

//# sourceMappingURL=pagotarjeta.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizaservicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FinalizaservicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinalizaservicioPage = (function () {
    function FinalizaservicioPage(toastCtrl, view, _http, server, _servicio, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.view = view;
        this._http = _http;
        this.server = server;
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.preciototal = 0;
        this.uno = false;
        this.dos = false;
        this.tres = false;
        this.cuatro = false;
        this.cinco = false;
        this.servpedido = this.navParams.get("servicio");
        this.host = this.server.getMyGlobalVar();
        console.log('calificando..');
        this._http.get(this.server.getMyGlobalVar() + 'calificacion/' + this.servpedido)
            .subscribe(function (data) {
            _this.socia = data[0]['servicio__socia__nombre'];
            _this.foto = data[0]['servicio__socia__photo'];
            _this.servic = data[0]['subcategoria__nombre'];
            console.log('servicos....', _this.socia);
        });
    }
    FinalizaservicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinalizaservicioPage');
    };
    FinalizaservicioPage.prototype.califica = function (data) {
        this.nota = data;
        this.agregatoast('Perfecto, calificaste con ' + data + ' estrellas');
        console.log(data);
        if (data == 1) {
            this.uno = true;
        }
        if (data == 2) {
            this.uno = true;
            this.dos = true;
        }
        if (data == 3) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
        }
        if (data == 4) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
        }
        if (data == 5) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
            this.cinco = true;
        }
    };
    FinalizaservicioPage.prototype.descalifica = function (data) {
        this.agregatoast('Perfecto, calificaste con ' + data + ' estrellas');
        this.nota = data;
        if (data == 1) {
            this.uno = true;
            this.dos = false;
            this.tres = false;
            this.cuatro = false;
            this.cinco = false;
        }
        if (data == 2) {
            this.uno = true;
            this.dos = true;
            this.tres = false;
            this.cuatro = false;
            this.cinco = false;
        }
        if (data == 3) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = false;
            this.cinco = false;
        }
        if (data == 4) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
            this.cinco = false;
        }
        if (data == 5) {
            this.uno = true;
            this.dos = true;
            this.tres = true;
            this.cuatro = true;
            this.cinco = true;
        }
    };
    FinalizaservicioPage.prototype.valida = function () {
        var _this = this;
        console.log(this.nota);
        if (this.nota) {
            this._http.get(this.server.getMyGlobalVar() + 'califica/' + this.servpedido + '/' + this.nota)
                .subscribe(function (data) {
                _this.view.dismiss();
            });
        }
        else {
            this.agregatoast('Porfavor califica con las estrellas');
        }
    };
    FinalizaservicioPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    FinalizaservicioPage.prototype.agregatoast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000
        });
        toast.present();
    };
    FinalizaservicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finalizaservicio',template:/*ion-inline-start:"/home/andy/mylook/src/pages/finalizaservicio/finalizaservicio.html"*/'<!--\n  Generated template for the FinalizaservicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding >\n\n	<img src=\'assets/cerrar.png\' (click)=\'valida()\' style=\'float: left;\n    position: absolute;\n    top: 19px;\n    right: 15px;\n    position: fixed;\n    width: 30px;\n    opacity: 1;\' class=\'animated rotateIn\'/>\n\n    <div style=\'height: 30px\'></div>\n\n	<p>Que te parecio el servicio, cuantas estrellas le das a {{socia}} </p>\n\n<div style=\'text-align: center;text-align: center;\n    padding: 6em;\n    padding-top: 27px;padding-bottom: 2px;\'>\n\n<img style=\'border-radius:50%; \' src="{{host}}{{foto}}">\n\n\n\n<h4>{{servic}}</h4>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n   <ion-grid style=\'text-align: center;\'>\n\n\n   	<ion-row style=\'background: #ddd6e4;\n    border-radius: 23px;\n    color: #251338;\' >\n\n	<ion-col (click)=\'descalifica(1)\' *ngIf=\'uno\'>\n	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n	</ion-col>\n\n	<ion-col (click)=\'califica(1)\' *ngIf=\'!uno\' >\n	<ion-icon   class=\'estrella\' name="star-outline"></ion-icon>\n	</ion-col>\n\n\n	<ion-col (click)=\'descalifica(2)\' *ngIf=\'dos\'>\n	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n	</ion-col>\n\n	<ion-col (click)=\'califica(2)\' *ngIf=\'!dos\'>\n	<ion-icon   class=\'estrella\' name="star-outline"></ion-icon>\n	</ion-col>\n\n   	<ion-col (click)=\'descalifica(3)\' *ngIf=\'tres\'>\n   	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'califica(3)\' *ngIf=\'!tres\'>\n   	<ion-icon     class=\'estrella\' name="star-outline"></ion-icon>\n    </ion-col>\n   	\n    <ion-col (click)=\'descalifica(4)\'  *ngIf=\'cuatro\'>\n   	<ion-icon  class=\'estrella\' name="star"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'califica(4)\' *ngIf=\'!cuatro\'>\n   	<ion-icon    class=\'estrella\' name="star-outline"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'descalifica(5)\' *ngIf=\'cinco\'>\n   	<ion-icon   class=\'estrella\' name="star"></ion-icon>\n   	</ion-col>\n\n   	<ion-col (click)=\'califica(5)\' *ngIf=\'!cinco\'>\n   	<ion-icon    class=\'estrella\' name="star-outline"></ion-icon>\n   	</ion-col>\n\n\n\n   </ion-row>\n\n\n   </ion-grid>\n\n   \n\n \n\n\n\n\n\n\n	\n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/finalizaservicio/finalizaservicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FinalizaservicioPage);
    return FinalizaservicioPage;
}());

//# sourceMappingURL=finalizaservicio.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the NotificacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificacionProvider = (function () {
    function NotificacionProvider(authHttp, _http) {
        this.authHttp = authHttp;
        this._http = _http;
        console.log('Hello ServiciosProvider Provider');
    }
    NotificacionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificacionProvider);
    return NotificacionProvider;
}());

//# sourceMappingURL=notificacion.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(storage, navCtrl, navParams) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__pages_historial_historial__["a" /* HistorialPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.salir = function () {
        this.storage.remove('token');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/andy/mylook/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Historial" tabIcon="keypad" ></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(278);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciosProvider = (function () {
    function ServiciosProvider(authHttp, _http, server) {
        this.authHttp = authHttp;
        this._http = _http;
        this.server = server;
        console.log('Hello ServiciosProvider Provider');
    }
    ServiciosProvider.prototype.getservicios = function () {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'miservicios/')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.detalleservicio = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'detalleservicio/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.ultimoservicio = function () {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'ultimoservicio/')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.serviciosdesocias = function () {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'miserviciossocias/2')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.aceptaservicio = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'aceptaserviciocliente/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.cancelarservicio = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'cancelaserviciocliente/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.pagarenefectivo = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'pagarenefectivo/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.pagotulki = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'pagotulki/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.pagoyape = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'pagoyape/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.promo = function (promo, id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'promo/' + promo + '/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.getnotificaciones = function () {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'notificaciones')
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.eliminaservicio = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'eliminaservicio/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.eliminasubcategoria = function (id_servicio) {
        return this.authHttp.get(this.server.getMyGlobalVar() + 'eliminarsubcategoria/' + id_servicio)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.listasocias = function (data) {
        return this.authHttp.post(this.server.getMyGlobalVar() + 'listasocias/', data)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider.prototype.pagotarjeta = function (data, servicio) {
        console.log('servi', data);
        return this.authHttp.post(this.server.getMyGlobalVar() + 'creatoken/' + servicio, data)
            .map(function (response) { return response.json(); });
    };
    ServiciosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* ServerProvider */]])
    ], ServiciosProvider);
    return ServiciosProvider;
}());

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(server, navCtrl, _perfil, navParams) {
        var _this = this;
        this.server = server;
        this.navCtrl = navCtrl;
        this._perfil = _perfil;
        this.navParams = navParams;
        this.cliente = {};
        this.host = this.server.getMyGlobalVar();
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.email = data[0]['email'];
            _this.telefono = data[0]['telefono'];
            _this.photo = data[0]['photo'];
            _this.photo_facebook = data[0]['photo_facebook'];
            _this.user_grupo = data[0]['user__groups__name'];
            _this.nombre = data[0]['nombre'];
            _this.correo = data[0]['email'];
            _this.telefono = data[0]['telefono'];
            _this.codigo = data[0]['codigo_recibido'];
        });
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.actualiza = function (nombre, email, telefono, codigo) {
        this.cliente.nombre = nombre;
        this.cliente.email = email;
        this.cliente.telefono = telefono;
        this.cliente.codigo = codigo;
        this._perfil.actualiza(this.cliente)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/andy/mylook/src/pages/perfil/perfil.html"*/'\n<ion-header>\n		<ion-toolbar color=\'dark\'>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n			<ion-title>Perfil</ion-title>\n		</ion-toolbar>\n	</ion-header>\n\n\n\n<ion-content >\n<div class="spacer">\n	\n\n\n</div>\n\n\n\n<!-- 	<div style=\'background: #000;\n		color: #fff;\n		font-family: Varela Round;\n		padding: 12px;\n		text-align: center;\'>\n\n	 	<h5>Ingrese un codigo de promocional si lo tienes</h5>\n \n\n	<img  *ngIf=\'photo_facebook\'  src="{{photo_facebook}}" style=\'clear: left;border: 2px solid #fff;\'>\n\n	<img  *ngIf=\'photo\'  src="{{host}}{{photo}}" style=\' clear: left;border: 2px solid #fff;\'>\n\n \n	</div>\n -->\n			<!-- <div class="profile-menu">\n				<img src="{{host}}/{{photo}}" style="display: block; width: 60%; height: auto; margin-left: auto; margin-right: auto;">\n			</div> -->\n		\n\n\n\n<ion-list padding>\n\n	<!-- <ion-item>\n		<ion-label fixed>Codigo</ion-label>\n		<ion-input type="text" [(ngModel)]="codigo"></ion-input>\n	</ion-item>\n	 -->\n	<ion-item>\n		<ion-label fixed>Nombre</ion-label>\n		<ion-input type="text" value="" [(ngModel)]="nombre"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label fixed>Email</ion-label>\n		<ion-input type="text" [(ngModel)]="email"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label fixed>Teléfono</ion-label>\n		<ion-input type="text" class=\'_numero\' [(ngModel)]="telefono"></ion-input>\n	</ion-item> \n\n \n\n\n\n\n	 \n <button ion-button full round color="dark" (click)="actualiza(nombre,email,telefono,codigo)">Guardar</button>\n \n\n</ion-list>\n\n\n\n\n\n\n\n\n</ion-content>\n\n<!-- \n<mytabs></mytabs>\n -->'/*ion-inline-end:"/home/andy/mylook/src/pages/perfil/perfil.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pagotarjeta_pagotarjeta__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_reserva_reserva__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_venta_venta__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alerta_alerta__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pago_pago__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_subirimagen_subirimagen__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_men_men__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sexo_sexo__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ubicacion_ubicacion__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_servicio_servicio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_registro_registro__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_detalleservicio_detalleservicio__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ayuda_ayuda__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_socias_socias__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_finalizaservicio_finalizaservicio__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_compartir_compartir__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_terminos_terminos__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_aviso_aviso__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_notificacion_notificacion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_carrito_carrito__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_historialsocia_historialsocia__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_inicio_inicio__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_registrofinal_registrofinal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_registroprincipal_registroprincipal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_detalleproducto_detalleproducto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_categorias_categorias__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_mytabs_mytabs__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_mytabsnologin_mytabsnologin__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_mytabssocia_mytabssocia__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_google_maps__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_categorias_categorias__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_facebook__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_map_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_onesignal__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_clipboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_servicio_servicio__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_notificacion_notificacion__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_device__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_terminospromociones_terminospromociones__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_notificaciones_notificaciones__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_coberturas_coberturas__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_file_path__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_file_transfer__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































































//import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
//import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("466431784640-objf8bhgbkmuvdu0s5i8f0551jif125h.apps.googleusercontent.com")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("180799656092340")
//   }
// ]);
// export function provideConfig() {
//   return config;
// }
var storage = new __WEBPACK_IMPORTED_MODULE_46__ionic_storage__["b" /* Storage */]({});
function getAuthHttp(http) {
    return new __WEBPACK_IMPORTED_MODULE_45_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_45_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'Bearer',
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('token').then(function (token) { return token; }); }),
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_notificacion_notificacion__["a" /* NotificacionPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_detalleproducto_detalleproducto__["a" /* DetalleproductoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_servicio_servicio__["a" /* ServicioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_men_men__["a" /* MenPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_compartir_compartir__["a" /* CompartirPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_registrofinal_registrofinal__["a" /* RegistrofinalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_socias_socias__["a" /* SociasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alerta_alerta__["a" /* AlertaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_finalizaservicio_finalizaservicio__["a" /* FinalizaservicioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_aviso_aviso__["a" /* AvisoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pago_pago__["a" /* PagoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_carrito_carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ubicacion_ubicacion__["a" /* UbicacionPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_terminospromociones_terminospromociones__["a" /* TerminospromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_coberturas_coberturas__["a" /* CoberturasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_subirimagen_subirimagen__["a" /* SubirimagenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sexo_sexo__["a" /* SexoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pagotarjeta_pagotarjeta__["a" /* PagotarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_40__components_categorias_categorias__["a" /* CategoriasComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_mytabs_mytabs__["a" /* MytabsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_mytabssocia_mytabssocia__["a" /* MytabssociaComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_mytabsnologin_mytabsnologin__["a" /* MytabsnologinComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_61__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_47__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    monthNames: ['janeiro', 'fevereiro', 'mar\u00e7o', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'],
                    monthShortNames: ['jan', 'fev', 'mar', 'abr', 'mayo', 'juni', 'jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
                    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
                    dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                }, {
                    links: [
                        { loadChildren: '../pages/alerta/alerta.module#AlertaPageModule', name: 'AlertaPage', segment: 'alerta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aviso/aviso.module#AvisoPageModule', name: 'AvisoPage', segment: 'aviso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrito/carrito.module#CarritoPageModule', name: 'CarritoPage', segment: 'carrito', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coberturas/coberturas.module#CoberturasPageModule', name: 'CoberturasPage', segment: 'coberturas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compartir/compartir.module#CompartirPageModule', name: 'CompartirPage', segment: 'compartir', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuando/cuando.module#CuandoPageModule', name: 'CuandoPage', segment: 'cuando', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalleproducto/detalleproducto.module#DetalleproductoPageModule', name: 'DetalleproductoPage', segment: 'detalleproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalleservicio/detalleservicio.module#DetalleservicioPageModule', name: 'DetalleservicioPage', segment: 'detalleservicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/finalizaservicio/finalizaservicio.module#FinalizaservicioPageModule', name: 'FinalizaservicioPage', segment: 'finalizaservicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historialsocia/historialsocia.module#HistorialsociaPageModule', name: 'HistorialsociaPage', segment: 'historialsocia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginprincipal/loginprincipal.module#LoginprincipalPageModule', name: 'LoginprincipalPage', segment: 'loginprincipal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/men/men.module#MenPageModule', name: 'MenPage', segment: 'men', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacion/notificacion.module#NotificacionPageModule', name: 'NotificacionPage', segment: 'notificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pago/pago.module#PagoPageModule', name: 'PagoPage', segment: 'pago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagotarjeta/pagotarjeta.module#PagotarjetaPageModule', name: 'PagotarjetaPage', segment: 'pagotarjeta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrofinal/registrofinal.module#RegistrofinalPageModule', name: 'RegistrofinalPage', segment: 'registrofinal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registroprincipal/registroprincipal.module#RegistroprincipalPageModule', name: 'RegistroprincipalPage', segment: 'registroprincipal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicio/servicio.module#ServicioPageModule', name: 'ServicioPage', segment: 'servicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sexo/sexo.module#SexoPageModule', name: 'SexoPage', segment: 'sexo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/socias/socias.module#SociasPageModule', name: 'SociasPage', segment: 'socias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subirimagen/subirimagen.module#SubirimagenPageModule', name: 'SubirimagenPage', segment: 'subirimagen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos/terminos.module#TerminosPageModule', name: 'TerminosPage', segment: 'terminos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminospromociones/terminospromociones.module#TerminospromocionesPageModule', name: 'TerminospromocionesPage', segment: 'terminospromociones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/venta/venta.module#VentaPageModule', name: 'VentaPage', segment: 'venta', priority: 'low', defaultHistory: [] }
                    ]
                })
                //SocialLoginModule
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_reserva_reserva__["a" /* ReservaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pagotarjeta_pagotarjeta__["a" /* PagotarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alerta_alerta__["a" /* AlertaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_finalizaservicio_finalizaservicio__["a" /* FinalizaservicioPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ubicacion_ubicacion__["a" /* UbicacionPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_detalleproducto_detalleproducto__["a" /* DetalleproductoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_compartir_compartir__["a" /* CompartirPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_servicio_servicio__["a" /* ServicioPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sexo_sexo__["a" /* SexoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_socias_socias__["a" /* SociasPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_registrofinal_registrofinal__["a" /* RegistrofinalPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_terminospromociones_terminospromociones__["a" /* TerminospromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_coberturas_coberturas__["a" /* CoberturasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_aviso_aviso__["a" /* AvisoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pago_pago__["a" /* PagoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_notificacion_notificacion__["a" /* NotificacionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_men_men__["a" /* MenPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_compartir_compartir__["a" /* CompartirPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_carrito_carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_subirimagen_subirimagen__["a" /* SubirimagenPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
                // {
                //   provide: AuthServiceConfig,
                //   useFactory: provideConfig
                // },
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_clipboard__["a" /* Clipboard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_45_angular2_jwt__["AuthHttp"],
                    useFactory: getAuthHttp,
                    deps: [__WEBPACK_IMPORTED_MODULE_61__angular_http__["Http"]]
                },
                //{ provide: ErrorHandler, useClass: RavenErrorHandler },
                __WEBPACK_IMPORTED_MODULE_49__providers_categorias_categorias__["a" /* CategoriasProvider */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_51__providers_map_map__["a" /* MapProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_servicios_servicios__["a" /* ServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_perfil_perfil__["a" /* PerfilProvider */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_57__providers_servicio_servicio__["a" /* ServicioProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_notificacion_notificacion__["a" /* NotificacionProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_server_server__["a" /* ServerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SpinnerProvider = (function () {
    function SpinnerProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello SpinnerProvider Provider');
    }
    SpinnerProvider.prototype.load = function () {
        this.loader = this.loadingCtrl.create({
            content: ''
        });
        this.loader.present();
    };
    SpinnerProvider.prototype.dismiss = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategoriasProvider = (function () {
    function CategoriasProvider(_http, server) {
        this._http = _http;
        this.server = server;
        console.log('Hello CategoriasProvider Provider');
    }
    CategoriasProvider.prototype.getpaginas = function () {
        return this._http.get(this.server.getMyGlobalVar() + 'paginas/')
            .map(function (response) { return response.json(); });
    };
    CategoriasProvider.prototype.getcategorias = function (distrito) {
        return this._http.get(this.server.getMyGlobalVar() + 'categoria/' + distrito)
            .map(function (response) { return response.json(); });
    };
    CategoriasProvider.prototype.getdistritos = function () {
        return this._http.get(this.server.getMyGlobalVar() + 'distrito/')
            .map(function (response) { return response.json(); });
    };
    CategoriasProvider.prototype.getsubcategorias = function (categoria, distrito) {
        return this._http.get(this.server.getMyGlobalVar() + 'subcategoria/' + categoria + '/' + distrito)
            .map(function (response) { return response.json(); });
    };
    CategoriasProvider.prototype.filterItems = function (data, searchTerm) {
        return data.filter(function (item) {
            return item.descripcion.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    CategoriasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__server_server__["a" /* ServerProvider */]])
    ], CategoriasProvider);
    return CategoriasProvider;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detalleservicio_detalleservicio__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialPage = (function () {
    function HistorialPage(alertCtrl, spinner, server, _servicio, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.spinner = spinner;
        this.server = server;
        this._servicio = _servicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = this.server.getMyGlobalVar();
        this._servicio.getservicios()
            .subscribe(function (data) { return _this.servicios = data; });
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialPage');
    };
    HistorialPage.prototype.iradetalle = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */], {
            servicio: data.id,
        });
    };
    HistorialPage.prototype.elimina = function (data) {
        var _this = this;
        this.spinner.load();
        console.log(data);
        this._servicio.eliminaservicio(data.id)
            .subscribe(function (data) {
            _this._servicio.getservicios()
                .subscribe(function (data) {
                _this.servicios = data;
                _this.spinner.dismiss();
            });
        });
    };
    HistorialPage.prototype.confirmaeliminacion = function (servicio) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Esta seguro que desea eliminar esta reserva',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        //this.actualiza(this.nombre,this.email,data.telefono)
                        _this.elimina(servicio);
                    }
                }
            ]
        });
        alert.present();
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historial',template:/*ion-inline-start:"/home/andy/mylook/src/pages/historial/historial.html"*/'<ion-header>\n    <ion-toolbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Mis Reservas</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content >\n\n\n\n  <ion-item-sliding>\n    \n    <ion-item *ngFor="let item of servicios" >\n      <ion-avatar item-start>\n        <img src="{{item.socia__photo}}">\n      </ion-avatar>\n\n      <ion-row>\n      <ion-col col-6 (click)=\'iradetalle(item)\'> {{item.socia__nombre| slice:0:14}} </ion-col>\n      <ion-col col-4 (click)=\'iradetalle(item)\'>\n        \n       <span class=\'_numero\'> {{item.fecha}} {{item.fecha_inicio}}</span>\n\n\n      </ion-col>\n\n      <ion-col col-2 (click)=\'confirmaeliminacion(item)\'>\n        \n        <ion-icon style=\' float:right;\' name="trash" ></ion-icon>\n\n        \n    \n\n      </ion-col>\n\n\n      </ion-row>\n\n     \n\n\n     \n\n    \n    </ion-item>\n \n  </ion-item-sliding>\n\n\n\n\n</ion-content>\n\n<!-- <mytabs></mytabs> -->'/*ion-inline-end:"/home/andy/mylook/src/pages/historial/historial.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginprincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registroprincipal_registroprincipal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_spinner_spinner__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

var LoginprincipalPage = (function () {
    function LoginprincipalPage(spinner, server, nav, navParams, toastCtrl, fb, navCtrl, alertCtrl, view, _perfil, appCtrl, http, authHttp, storage) {
        this.spinner = spinner;
        this.server = server;
        this.nav = nav;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._perfil = _perfil;
        this.appCtrl = appCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        //private user: SocialUser;
        //private loggedIn: boolean;
        this.isLoggedIn = false;
        //@ViewChild(Nav) nav: Nav;
        this.model = new User(null, null);
        this.cliente = {};
        this.registroprincipalPage = __WEBPACK_IMPORTED_MODULE_10__registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */];
    }
    //  signInWithGoogle(): void {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }
    // signInWithFB(): void {
    //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    //   console.log('datos')
    //    this.authService.authState.subscribe((user) => {
    //     console.log('user...social',user)
    //     this.user = user;
    //     this.loggedIn = (user != null);
    //     //Conexion con Django
    //     let options: RequestOptions = new RequestOptions({
    //     headers: new Headers({ 'Content-Type': 'application/json' })
    //     });
    //     let creds = JSON.stringify({ users: this.user});
    //     this.http.post(this.server.getMyGlobalVar()+'loginfacebook/', creds, options)
    //     .subscribe(
    //       data => {
    //         let creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face']+JSON.parse(data['_body'])['gender']});
    //         this.http.post(this.server.getMyGlobalVar()+'api-token-auth/', creds, options)
    //                 .subscribe(
    //                   data => {
    //                      this.storage.set('token', JSON.parse(data["_body"]).token)
    //                       this.nav.setRoot(HomePage, {statuslogin: true});
    //                               }
    //                             );
    //       })
    //   });
    // }
    // signOut(): void {
    //   this.authService.signOut();
    // }
    LoginprincipalPage.prototype.ionViewWillEnter = function () {
        console.log('loginprincipal,ionViewWillEnter');
    };
    LoginprincipalPage.prototype.ionViewWillLoad = function () {
        console.log('loginprincipal LOAD');
    };
    LoginprincipalPage.prototype.ionViewDidEnter = function () {
        console.log('Did....Enter');
        //this.storage.get('token').then((val) => {if(val){this.appCtrl.getRootNav().push(IntroPage);}});
    };
    LoginprincipalPage.prototype.cerrar = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], { statuslogin: false });
    };
    LoginprincipalPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginprincipalPage.prototype.registra = function () {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */]);
    };
    LoginprincipalPage.prototype.sacatelefono = function () {
        var _this = this;
        console.log('sacatelefono...', this.telefono);
        if (this.telefono == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'A que celular podemos comunicarnos?',
                inputs: [
                    {
                        name: 'telefono',
                        placeholder: 'Telefono'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Enviar',
                        handler: function (data) {
                            _this.actualiza(_this.nombre, _this.email, data.telefono);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    LoginprincipalPage.prototype.actualiza = function (nombre, email, telefono) {
        var _this = this;
        this.cliente.nombre = nombre;
        this.cliente.email = email;
        this.cliente.telefono = telefono;
        this._perfil.actualiza(this.cliente)
            .subscribe(function (data) {
            _this.actualizatoast();
        });
    };
    LoginprincipalPage.prototype.actualizatoast = function () {
        var toast = this.toastCtrl.create({
            message: 'Bienvenid@ a My Look Xpress',
            duration: 4000
        });
        toast.present();
    };
    //Facebook
    LoginprincipalPage.prototype.cargandoregistro = function () {
        var toast = this.toastCtrl.create({
            message: 'Registrarte con Facebook o por correo',
            duration: 4000
        });
        toast.present();
    };
    LoginprincipalPage.prototype.login = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                alert(res.authResponse.userID);
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    };
    LoginprincipalPage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    LoginprincipalPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            _this.users = res;
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
            });
            var creds = JSON.stringify({ users: _this.users });
            _this.http.post(_this.server.getMyGlobalVar() + 'loginfacebook/', creds, options)
                .subscribe(function (data) {
                var creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face'] + JSON.parse(data['_body'])['gender'] });
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    ////Saca telefono
                    _this._perfil.miperfil()
                        .subscribe(function (data) {
                        _this.email = data[0]['email'];
                        _this.nombre = data[0]['nombre'];
                        _this.sacatelefono();
                    });
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], { statuslogin: true });
                });
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ///Fin
    LoginprincipalPage.prototype.cargando = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000
        });
        toast.present();
    };
    LoginprincipalPage.prototype.authenticate = function (username, password) {
        var _this = this;
        this.spinner.load();
        console.log('ingresando...');
        var creds = JSON.stringify({ username: username, password: password });
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        // sleep time expects milliseconds
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post(this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
            .subscribe(function (data) {
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            if (data.status == 200) {
                console.log('Redirigiendo...');
                sleep(200).then(function () {
                    //this.view.dismiss()
                    _this.spinner.dismiss();
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], { statuslogin: true });
                    //this.appCtrl.getRootNav().push(IntroPage);
                    //this.navCtrl.pop();
                });
            }
            console.log('jwtHelper', JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)));
        }, function (error) {
            _this.cargando(error);
            _this.spinner.dismiss();
        });
    };
    LoginprincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loginprincipal',template:/*ion-inline-start:"/home/andy/mylook/src/pages/loginprincipal/loginprincipal.html"*/'<ion-header>\n    <ion-navbar color=\'dark\'>\n\n  \n      <ion-title>Ingresar</ion-title>\n\n\n       <ion-buttons start="" (click)=\'cerrar()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n   \n\n\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n\n\n\n\n\n          <div style=\'height: 20px\'></div>\n    \n      <ion-list inset>\n\n\n  <!--Facebook Login-->\n\n<div padding>\n\n  <div *ngIf="isLoggedIn; else facebookLogin">\n   <!--  <h2>Hi, {{users.name}} ({{users.email}})</h2>\n    <p>\n      Gender: {{users.gender}}\n    </p>\n    <p>\n      <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n    </p> -->\n    <p>\n      <button ion-button full icon-right (click)="logout()">\n        Salir\n      </button>\n    </p>\n  </div>\n\n\n  <ng-template #facebookLogin>\n    <button ion-button full icon-right (click)="login()">\n      Ingresar con\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ng-template>\n\n</div>\n\n\n\n  <form #loginForm="ngForm" (ngSubmit)="authenticate(model.username,model.password)" autocomplete="off">\n           <ion-list inset>\n\n\n          <div style=\'height: 20px\'></div>\n\n\n          <label color=\'light\'>Correo Electronico</label>\n          <ion-item>\n            <ion-input name="username" id="loginField" type="text" required [(ngModel)] = "model.username" #email></ion-input>\n          </ion-item>\n\n          <div style=\'height: 20px\'></div>\n\n\n          <label color=\'light\'>Password</label>\n          <ion-item>\n            <ion-input name="password" id="loginField" type="Password" required [(ngModel)] = "model.password"></ion-input>\n          </ion-item>\n        </ion-list>\n      \n    <ion-row>\n\n        <button  round ion-button class="submit-btn" color=\'dark\' full type="submit" [disabled]="!loginForm.form.valid">Ingresar\n        </button>\n      \n    </ion-row>\n\n\n\n      <ion-row padding><span style=\'padding-top: 12px;\' color=\'dark\'  (click)=\'registra()\'>No tienes cuenta registrate &nbsp;&nbsp;  AQUI</span></ion-row>\n  </form>\n \n\n\n<!--      <button round ion-button  color=\'dark\' block  [navPush]="registrosociaPage" >Conviertete en socia</button>\n<p style=\'color:#fff;\'>Version 0.1.9</p> -->\n\n         \n      </ion-list>\n\n\n      \n\n \n      \n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/loginprincipal/loginprincipal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], LoginprincipalPage);
    return LoginprincipalPage;
}());

//# sourceMappingURL=loginprincipal.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_servicio_servicio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detalleservicio_detalleservicio__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_alerta_alerta__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_finalizaservicio_finalizaservicio__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















// import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
// import { SocialUser } from "angular4-social-login";

var MyApp = (function () {
    function MyApp(modalCtrl, server, http, _perfil, storage, alertCtrl, authHttp, appCtrl, platform, oneSignal, statusBar, splashScreen) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.server = server;
        this.http = http;
        this._perfil = _perfil;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.authHttp = authHttp;
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Homepage', component: __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */] },
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_7__pages_servicio_servicio__["a" /* ServicioPage */] }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        //  this.authService.authState.subscribe((user) => {
        //   this.user = user;
        //   this.loggedIn = (user != null);
        // });
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.handlerNotifications();
        });
    }
    MyApp.prototype.ionViewWillEnter = function () {
        console.log('App components.', 'ionViewWillEnter');
    };
    MyApp.prototype.handlerNotifications = function () {
        var _this = this;
        this.oneSignal.startInit('6d06ccb5-60c3-4a76-83d5-9363fbf6b40a', '466431784640');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened()
            .subscribe(function (jsonData) {
            if (jsonData.notification.payload.additionalData.servicio) {
                // let alert = this.alertCtrl.create({
                //   title: 'Tienes un nuevo servicio',
                //   subTitle: 'Codigo: '+jsonData.notification.payload.additionalData.servicio,
                //   buttons: ['OK']
                // });
                // alert.present();
                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__pages_alerta_alerta__["a" /* AlertaPage */], { servicio: jsonData.notification.payload.additionalData.servicio });
            }
            if (jsonData.notification.payload.additionalData.aceptaservicio) {
                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_detalleservicio_detalleservicio__["a" /* DetalleservicioPage */], { servicio: jsonData.notification.payload.additionalData.aceptaservicio });
            }
            if (jsonData.notification.payload.additionalData.finalizaservicio) {
                // this.appCtrl.getRootNav().push(FinalizaservicioPage, { servicio: jsonData.notification.payload.additionalData.finalizaservicio })
                _this.finalizaModal(jsonData.notification.payload.additionalData.finalizaservicio);
            }
            if (jsonData.notification.payload.additionalData.codigo) {
                var code = _this.alertCtrl.create({
                    title: 'No te olvide de My Look Xpress',
                    subTitle: 'Buenas tardes',
                    buttons: ['OK']
                });
                code.present();
                var creds = JSON.stringify(jsonData);
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({
                    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
                });
                _this.authHttp.post(_this.server.getMyGlobalVar() + 'guardanotificacion/', creds, options)
                    .subscribe(function (data) {
                    console.log(data);
                });
            }
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        this.oneSignal.endInit();
    };
    MyApp.prototype.finalizaModal = function (servicio) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_finalizaservicio_finalizaservicio__["a" /* FinalizaservicioPage */], { servicio: servicio });
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/andy/mylook/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/andy/mylook/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_16__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_15__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

////
// Add the following to your existing ready fuction.
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagoPage = (function () {
    function PagoPage(authHttp, view, navCtrl, navParams) {
        this.authHttp = authHttp;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagoPage');
    };
    PagoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    PagoPage.prototype.pagar = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        var creds = JSON.stringify({ categoria: '99', socia: 'data' });
        this.authHttp.post('http://104.236.247.3:8000/creatoken/', creds, options)
            .subscribe(function (data) {
        });
    };
    PagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pago',template:/*ion-inline-start:"/home/andy/mylook/src/pages/pago/pago.html"*/'<!--\n  Generated template for the PagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Pago </ion-title>\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<button ion-button (click)=\'pagar()\' large>Large</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/pago/pago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PagoPage);
    return PagoPage;
}());

//# sourceMappingURL=pago.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvisoPage = (function () {
    function AvisoPage(view, navCtrl, navParams) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvisoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvisoPage');
    };
    AvisoPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AvisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aviso',template:/*ion-inline-start:"/home/andy/mylook/src/pages/aviso/aviso.html"*/'<!--\n  Generated template for the AvisoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>Video</ion-title>\n\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n<button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n</ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n<video  width="100%" autoplay>\n  <source src="./assets/video.mp4" type="video/mp4">\n\n  Your browser does not support HTML5 video.\n</video>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/aviso/aviso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AvisoPage);
    return AvisoPage;
}());

//# sourceMappingURL=aviso.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venta_venta__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__men_men__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__compartir_compartir__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(server, socialSharing, alertCtrl, platform, menuCtrl, navCtrl, _categoria, localStorage, viewCtrl, storage, events, zone, appCtrl, navParams, modalCtrl) {
        ///Lanza Login
        var _this = this;
        this.server = server;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this._categoria = _categoria;
        this.localStorage = localStorage;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.events = events;
        this.zone = zone;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.xxxPage = __WEBPACK_IMPORTED_MODULE_6__intro_intro__["a" /* IntroPage */];
        this.logeado = false;
        this.events.subscribe('updateScreen', function () {
            _this.zone.run(function () {
                console.log('force update the screen');
            });
        });
        this.ventaPage = __WEBPACK_IMPORTED_MODULE_4__venta_venta__["a" /* VentaPage */];
        this.host = this.server.getMyGlobalVar();
        this._categoria.getcategorias(1)
            .subscribe(function (data) { return _this.categoria = data; });
        this.host = this.server.getMyGlobalVar();
        this.pagesnologeado = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */] },
            { title: 'Ingresar', component: __WEBPACK_IMPORTED_MODULE_10__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */] },
            { title: 'Compartir', component: __WEBPACK_IMPORTED_MODULE_12__compartir_compartir__["a" /* CompartirPage */] }
        ];
        this.pageslogeado = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */] },
            { title: 'Mi Perfil', component: __WEBPACK_IMPORTED_MODULE_11__perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Compartir', component: __WEBPACK_IMPORTED_MODULE_12__compartir_compartir__["a" /* CompartirPage */] },
            { title: 'Mis Reservas', component: __WEBPACK_IMPORTED_MODULE_9__historial_historial__["a" /* HistorialPage */] }
        ];
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */] },
            { title: 'Ingresar', component: __WEBPACK_IMPORTED_MODULE_10__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */] },
            { title: 'Compartir', component: __WEBPACK_IMPORTED_MODULE_12__compartir_compartir__["a" /* CompartirPage */] },
            { title: 'Mi Perfil', component: __WEBPACK_IMPORTED_MODULE_11__perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Mis Reservas', component: __WEBPACK_IMPORTED_MODULE_9__historial_historial__["a" /* HistorialPage */] }
        ];
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
        });
        this.storage.get('sexo').then(function (val) {
            console.log('sexo', val);
            if (val == 1) {
                _this.xxxPage = __WEBPACK_IMPORTED_MODULE_6__intro_intro__["a" /* IntroPage */];
            }
            if (val == 2) {
                _this.xxxPage = __WEBPACK_IMPORTED_MODULE_8__men_men__["a" /* MenPage */];
            }
            if (val == null) {
                _this.sacasexo();
            }
        });
    }
    InicioPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    InicioPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    InicioPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Home');
        this.storage.get('token').then(function (val) {
            console.log('logerrrr', val);
            if (val) {
                _this.logeado = true;
            }
        });
    };
    InicioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter Home');
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
                console.log('999', _this.logeado);
            }
        });
        this.storage.get('newservice').then(function (val) {
            console.log('que dato es', val);
            if (val == 1) {
                _this.xxxPage = __WEBPACK_IMPORTED_MODULE_9__historial_historial__["a" /* HistorialPage */];
                _this.storage.set('newservice', 0);
            }
        });
    };
    InicioPage.prototype.ionViewDidEnter = function () {
        //this.storage.get('token').then((val) => {if(val){this.appCtrl.getRootNav().push(IntroPage);}});
        var _this = this;
        console.log('ionViewDidEnter Home');
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
        });
    };
    InicioPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.closeMenu();
    };
    InicioPage.prototype.openHome = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        this.closeMenu();
    };
    InicioPage.prototype.salir = function () {
        console.log('saliendo..');
        this.storage.remove('token');
        //this.navCtrl.push(IntroPage);
        this.platform.exitApp();
    };
    InicioPage.prototype.sacacategoria = function (sexo) {
        if (sexo == 1) {
            this.xxxPage = __WEBPACK_IMPORTED_MODULE_6__intro_intro__["a" /* IntroPage */];
        }
        if (sexo == 2) {
            this.xxxPage = __WEBPACK_IMPORTED_MODULE_8__men_men__["a" /* MenPage */];
        }
    };
    InicioPage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */], { userId: 8675309 });
        profileModal.present();
    };
    InicioPage.prototype.sacasexo = function () {
        var _this = this;
        this.closeMenu();
        this.storage.remove('sexo');
        //this.navCtrl.push(IntroPage);
        var alertsexo = this.alertCtrl.create({
            title: 'Escoge tu género',
            cssClass: 'sexocss',
            buttons: [
                {
                    text: '',
                    role: 'cancel',
                    handler: function () {
                        _this.storage.set('sexo', 1);
                        _this.sexo = 1;
                        _this.sacacategoria(1);
                    }
                },
                {
                    text: '',
                    handler: function () {
                        _this.storage.set('sexo', 2);
                        _this.sacacategoria(2);
                    }
                }
            ]
        });
        alertsexo.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], InicioPage.prototype, "nav", void 0);
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/andy/mylook/src/pages/inicio/inicio.html"*/' <ion-menu  [content]="content"  >\n \n  \n\n\n  <ion-toolbar color=\'dark\'>\n    <ion-title >Menu  </ion-title>\n\n\n\n\n    \n\n  </ion-toolbar>\n \n  <ion-content  color=\'dark\' >\n\n\n\n    <ion-list *ngIf="logeado==false" style=\'padding-top:20px;\'>\n\n\n \n\n\n\n       <button ion-item (click)="loginModal()">\n        Ingresar\n      </button> \n\n\n   \n  \n\n      <button ion-item *ngFor="let p of pagesnologeado" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n       <button ion-item (click)="sacasexo()">\n        Escoge tu género \n      </button>\n    </ion-list>\n\n  \n    <ion-list *ngIf="logeado==true" style=\'padding-top:20px;\'>\n\n    \n      \n      <button ion-item>\n        \n    </button>\n   \n  \n      \n      \n       <button ion-item *ngFor="let p of pageslogeado" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n\n\n       <button ion-item (click)="sacasexo()">\n        Escoge tu género \n      </button> \n\n      \n\n\n\n\n      <a ion-item style=\'\n    text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola"> Contáctenos <ion-icon name="logo-whatsapp" style=\'color: #25d366;float:right;\'></ion-icon></a>\n\n    <a ion-item style=\'text-decoration: none;\' href="tel:+910759370"> Llamanos <ion-icon name="call" style=\'color: #000;float:right;\'></ion-icon></a>\n\n<button  ion-item (click)="salir()">\n        Salir\n      </button>\n\n    </ion-list>\n\n\n    \n\n   \n\n      \n\n\n  \n\n\n  </ion-content>\n \n</ion-menu>\n\n<ion-nav   id="nav" [root]="xxxPage" #content swipe-back-enabled="false"></ion-nav>\n \n'/*ion-inline-end:"/home/andy/mylook/src/pages/inicio/inicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_13__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_portada_portada__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CategoriasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CategoriasComponent = (function () {
    function CategoriasComponent(server, storage, _photo) {
        var _this = this;
        this.server = server;
        this.storage = storage;
        this._photo = _photo;
        this.host = this.server.getMyGlobalVar();
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        sleep(5000).then(function () {
            _this.storage.get('sexo').then(function (val) {
                _this._photo.getfotosdeportada(val)
                    .subscribe(function (data) {
                    _this.photo1 = data[0].photo;
                    _this.link1 = data[0].enlace;
                    _this.photo2 = data[1].photo;
                    _this.link2 = data[1].enlace;
                    _this.photo3 = data[2].photo;
                    _this.link3 = data[2].enlace;
                    _this.photo4 = data[3].photo;
                    _this.link4 = data[3].enlace;
                });
            });
        });
        //       iradetalle(data){
        //   this.navCtrl.push(DetalleservicioPage, {
        //     servicio: data,
        //   })
        // }
        this._photo.getfotosdepublicidad()
            .subscribe(function (data) {
            _this.photo5 = data[0].photo;
            _this.link5 = data[0].enlace;
            _this.photo6 = data[1].photo;
            _this.link6 = data[1].enlace;
            _this.photo7 = data[2].photo;
            _this.link7 = data[2].enlace;
            _this.photo8 = data[3].photo;
            _this.link8 = data[3].enlace;
        });
    }
    // ngAfterViewInit() {
    //   this.slides.autoplay = true;
    // }
    CategoriasComponent.prototype.ionViewDidLoad = function () {
        //setTimeout(()=>this.slides.startAutoplay())
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Slides */])
    ], CategoriasComponent.prototype, "slides", void 0);
    CategoriasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'categoriaspue',template:/*ion-inline-start:"/home/andy/mylook/src/components/categorias/categorias.html"*/'\n\n<ion-slides autoplay="2000"  speed="4000" pager paginationType=\'bullets\'>\n\n\n  <ion-slide ng-click=\'iradetalle(1)\'>\n\n    <img src="{{host}}{{photo1}}" alt="">\n  </ion-slide>\n\n  <ion-slide ng-click=\'iradetalle(2)\'>\n    <img src="{{host}}{{photo2}}" alt="">\n  </ion-slide>\n\n\n  <ion-slide ng-click=\'iradetalle(3)\'>\n    <img src="{{host}}{{photo3}}" alt="">\n  </ion-slide>\n\n  <ion-slide ng-click=\'iradetalle(4)\'>\n    <img src="{{host}}{{photo4}}" alt="">\n  </ion-slide>\n\n\n\n  \n</ion-slides >\n\n\n<ion-slides effect=\'fade\' autoplay="2000"  speed="3000" style=\'margin-top: -2px;\'>\n\n\n  <ion-slide>\n\n    <a href=\'{{link5}}\'>\n    <img src="{{host}}{{photo5}}" alt="">\n    </a>\n\n  </ion-slide>\n  <ion-slide>\n\n    <a href=\'{{link6}}\'>\n    <img src="{{host}}{{photo6}}" alt="">\n    </a>\n\n  </ion-slide>\n  <ion-slide>\n    <a href=\'{{link7}}\'>\n    <img src="{{host}}{{photo7}}" alt="">\n    </a>\n  </ion-slide>\n\n  <ion-slide>\n    <a href="{{link8}}">\n    <img src="{{host}}{{photo8}}" alt="">\n    </a>\n  </ion-slide>\n\n\n  \n</ion-slides>'/*ion-inline-end:"/home/andy/mylook/src/components/categorias/categorias.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_portada_portada__["a" /* PortadaProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__providers_portada_portada__["a" /* PortadaProvider */]])
    ], CategoriasComponent);
    return CategoriasComponent;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ayuda_ayuda__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MytabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MytabsComponent = (function () {
    function MytabsComponent(socialSharing, platform, appCtrl, storage, navCtrl, navParams) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myVar = true;
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */];
        this.introPage = __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_7__pages_historial_historial__["a" /* HistorialPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.storage.get('token').then(function (val) {
            console.log('Token....', val);
            _this.logeado = val;
            if (_this.logeado == null) {
                _this.nologeado = true;
                _this.logeado = null;
            }
            if (_this.logeado) {
                _this.logeado = true;
                _this.nologeado = null;
            }
        });
    }
    MytabsComponent.prototype.loginprincipal = function () {
        console.log('queeeee');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */]);
    };
    MytabsComponent.prototype.ayuda = function () {
        console.log('queeeee');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_ayuda_ayuda__["a" /* AyudaPage */]);
    };
    MytabsComponent.prototype.home = function () {
        this.navCtrl.popToRoot();
    };
    MytabsComponent.prototype.ionViewDidLoad = function () {
        console.log('Entro......');
    };
    MytabsComponent.prototype.ionViewWillEnter = function () {
        console.log('Entro..wwww....');
    };
    MytabsComponent.prototype.salircliente = function () {
        console.log('saliendo..');
        this.storage.remove('token');
        this.storage.remove('grupo');
        //this.navCtrl.push(IntroPage);
        this.platform.exitApp();
    };
    MytabsComponent.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    MytabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mytabs',template:/*ion-inline-start:"/home/andy/mylook/src/components/mytabs/mytabs.html"*/'Logeado...<h1>{{logeado}}</h1>\n\n<div  class="fixed44" *ngIf="logeado">\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n      <label (click)=\'home()\'  for="tab1"><ion-icon name="home"></ion-icon>\n      <span>Home</span></label>\n\n \n\n      <input id="tab2" type="radio" name="tabs" (click)=\'perfil()\'>\n      <label [navPush]="perfilPage" for="tab2" ><ion-icon name="person"></ion-icon><span>Perfil</span></label>\n\n      <input id="tab3" type="radio" name="tabs" (click)=\'historial()\'>\n      <label [navPush]="historialPage" for="tab3"><ion-icon name="keypad"></ion-icon><span>Servicios</span></label>\n\n       <input (click)=\'salircliente()\' id="tab4" type="radio" name="tabs" >\n      <label   for="tab4"><ion-icon name="log-out"></ion-icon><span>Salir</span></label>\n\n\n\n</div>\n\n</div>\n\n<div  class="fixed44" *ngIf="nologeado">\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs"  >\n\n\n      <label  (click)=\'home()\' for="tab1"><ion-icon name="home"></ion-icon>\n      <span>Home</span></label>\n\n \n\n      <input id="tab2" type="radio" name="tabs" >\n      <label (click)="ayuda()" for="tab2" ><ion-icon name="help"></ion-icon><span>Ayuda</span></label>\n\n      <input id="tab3" type="radio" name="tabs" >\n      <label (click)="shareSheetShare()" for="tab3"><ion-icon name="share"></ion-icon><span>Compartir</span></label>\n\n       <input id="tab4" type="radio" name="tabs" >\n      <label  (click)="loginprincipal()" for="tab4"><ion-icon name="log-in"></ion-icon><span>Ingresar</span></label>\n\n\n\n</div>\n\n</div>\n'/*ion-inline-end:"/home/andy/mylook/src/components/mytabs/mytabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MytabsComponent);
    return MytabsComponent;
}());

//# sourceMappingURL=mytabs.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytabsnologinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_servicio_servicio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ayuda_ayuda__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notificacion_notificacion__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MytabsnologinComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MytabsnologinComponent = (function () {
    function MytabsnologinComponent(_notificacion, appCtrl, storage, navCtrl, navParams, socialSharing) {
        var _this = this;
        this._notificacion = _notificacion;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.myVar = true;
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_3__pages_servicio_servicio__["a" /* ServicioPage */];
        this.ayudaPage = __WEBPACK_IMPORTED_MODULE_4__pages_ayuda_ayuda__["a" /* AyudaPage */];
        this.loginprincipalPage = __WEBPACK_IMPORTED_MODULE_2__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */];
        this.storage.get('token').then(function (val) {
            console.log('Token....', val);
            _this.logeado = val;
            if (_this.logeado == null) {
                _this.nologeado = true;
            }
            if (_this.logeado) {
                _this.logeado = true;
            }
        });
    }
    MytabsnologinComponent.prototype.loginprincipal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_loginprincipal_loginprincipal__["a" /* LoginprincipalPage */]);
    };
    MytabsnologinComponent.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    MytabsnologinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mytabsnologin',template:/*ion-inline-start:"/home/andy/mylook/src/components/mytabsnologin/mytabsnologin.html"*/'<div  class="fixed44" *ngIf="nologeado">\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n      <label [navPush]="introPage"  for="tab1"><ion-icon name="home"></ion-icon>\n      <span>Home</span></label>\n\n \n\n      <input id="tab2" type="radio" name="tabs" >\n      <label [navPush]="ayudaPage" for="tab2" ><ion-icon name="help"></ion-icon><span>Ayuda</span></label>\n\n      <input id="tab3" type="radio" name="tabs" >\n      <label (click)="shareSheetShare()" for="tab3"><ion-icon name="share"></ion-icon><span>Compartir</span></label>\n\n       <input id="tab4" type="radio" name="tabs" >\n      <label  (click)="loginprincipal()" for="tab4"><ion-icon name="log-in"></ion-icon><span>Ingresar</span></label>\n\n\n\n</div>\n\n</div>\n'/*ion-inline-end:"/home/andy/mylook/src/components/mytabsnologin/mytabsnologin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_notificacion_notificacion__["a" /* NotificacionProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_notificacion_notificacion__["a" /* NotificacionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MytabsnologinComponent);
    return MytabsnologinComponent;
}());

//# sourceMappingURL=mytabsnologin.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytabssociaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_servicio_servicio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_historialsocia_historialsocia__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MytabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MytabssociaComponent = (function () {
    function MytabssociaComponent(platform, storage, navCtrl, navParams) {
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myVar = true;
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */];
        this.introPage = __WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */];
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_5__pages_servicio_servicio__["a" /* ServicioPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_6__pages_historial_historial__["a" /* HistorialPage */];
        this.historialsociaPage = __WEBPACK_IMPORTED_MODULE_7__pages_historialsocia_historialsocia__["a" /* HistorialsociaPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
    }
    MytabssociaComponent.prototype.salir = function () {
        this.storage.remove('token');
        this.storage.remove('grupo');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_intro_intro__["a" /* IntroPage */]);
        this.platform.exitApp();
    };
    MytabssociaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mytabssocia',template:/*ion-inline-start:"/home/andy/mylook/src/components/mytabssocia/mytabssocia.html"*/'<div  class="fixed44" >\n\n <div class="tab_container">\n      <input id="tab1" type="radio" name="tabs" (click)=\'home()\' >\n\n\n\n \n\n      <input id="tab2" type="radio" name="tabs" (click)=\'perfil()\'>\n      <label [navPush]="perfilPage" for="tab2" ><ion-icon name="person"></ion-icon><span>Perfil</span></label>\n\n      <input id="tab3" type="radio" name="tabs" (click)=\'historial()\'>\n      <label [navPush]="historialsociaPage" for="tab3"><ion-icon name="keypad"></ion-icon><span>Servicios</span></label>\n\n       <input (click)=\'salir()\' id="tab4" type="radio" name="tabs" >\n      <label for="tab4"><ion-icon name="log-out"></ion-icon><span>Salir</span></label>\n\n\n\n</div>\n\n</div>\n'/*ion-inline-end:"/home/andy/mylook/src/components/mytabssocia/mytabssocia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MytabssociaComponent);
    return MytabssociaComponent;
}());

//# sourceMappingURL=mytabssocia.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicioProvider = (function () {
    function ServicioProvider(http) {
        this.http = http;
        console.log('Hello ServicioProvider Provider');
    }
    ServicioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicioProvider);
    return ServicioProvider;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venta_venta__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__intro_intro__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__men_men__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__terminospromociones_terminospromociones__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notificaciones_notificaciones__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coberturas_coberturas__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sexo_sexo__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__registro_registro__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__compartir_compartir__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__registroprincipal_registroprincipal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(server, socialSharing, alertCtrl, platform, menuCtrl, navCtrl, _categoria, localStorage, callNumber, viewCtrl, storage, events, zone, appCtrl, view, navParams, modalCtrl, authHttp, device) {
        var _this = this;
        this.server = server;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this._categoria = _categoria;
        this.localStorage = localStorage;
        this.callNumber = callNumber;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.events = events;
        this.zone = zone;
        this.appCtrl = appCtrl;
        this.view = view;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authHttp = authHttp;
        this.device = device;
        this.xxxPage = __WEBPACK_IMPORTED_MODULE_7__intro_intro__["a" /* IntroPage */];
        this.logeado = false;
        this.events.subscribe('updateScreen', function () {
            _this.zone.run(function () {
                console.log('force update the screen');
            });
        });
        this.ventaPage = __WEBPACK_IMPORTED_MODULE_5__venta_venta__["a" /* VentaPage */];
        this.host = this.server.getMyGlobalVar();
        this._categoria.getcategorias(1)
            .subscribe(function (data) {
            _this.categoria = data;
        });
        this.color = 'white';
        this.pagesnologeado = [
            { title: 'Inicio', component: HomePage_1 },
            { title: 'Gana 5 soles', component: __WEBPACK_IMPORTED_MODULE_19__compartir_compartir__["a" /* CompartirPage */] }
        ];
        this.pageslogeado = [
            { title: 'Inicio', component: HomePage_1 },
            { title: 'Mi Perfil', component: __WEBPACK_IMPORTED_MODULE_15__perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Gana 5 soles', component: __WEBPACK_IMPORTED_MODULE_19__compartir_compartir__["a" /* CompartirPage */] },
            { title: 'Mis Reservas', component: __WEBPACK_IMPORTED_MODULE_10__historial_historial__["a" /* HistorialPage */] }
        ];
        this.otraspages = [
            { title: 'Zonas de Cobertura', component: __WEBPACK_IMPORTED_MODULE_13__coberturas_coberturas__["a" /* CoberturasPage */] },
            { title: 'Terminos de Promociones', component: __WEBPACK_IMPORTED_MODULE_11__terminospromociones_terminospromociones__["a" /* TerminospromocionesPage */] },
            { title: 'Notificaciones', component: __WEBPACK_IMPORTED_MODULE_12__notificaciones_notificaciones__["a" /* NotificacionesPage */] }
        ];
        this.pages = [
            { title: 'Inicio', component: HomePage_1 },
            { title: 'Ingresar', component: __WEBPACK_IMPORTED_MODULE_14__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */] },
            { title: 'Compartir', component: __WEBPACK_IMPORTED_MODULE_19__compartir_compartir__["a" /* CompartirPage */] },
            { title: 'Mi Perfil', component: __WEBPACK_IMPORTED_MODULE_15__perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Mis Reservas', component: __WEBPACK_IMPORTED_MODULE_10__historial_historial__["a" /* HistorialPage */] }
        ];
        var creds = JSON.stringify({ model: this.device.model, tipo: this.device.version });
        var options = new __WEBPACK_IMPORTED_MODULE_21__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_21__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        console.log('Ingrese a guarda datos del movil....');
        this.authHttp.post(this.server.getMyGlobalVar() + 'guardadatosmovil/', creds, options)
            .subscribe(function (data) { console.log(data); });
        //Chequea si esta logeado TOKEN
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
                _this.storage.get('sexo').then(function (val) {
                    if (val == 1) {
                        _this.xxxPage = __WEBPACK_IMPORTED_MODULE_7__intro_intro__["a" /* IntroPage */];
                    }
                    if (val == 2) {
                        _this.xxxPage = __WEBPACK_IMPORTED_MODULE_9__men_men__["a" /* MenPage */];
                    }
                    if (val == null) {
                        console.log('Sin sexo...');
                        _this.sacasexo();
                    }
                });
            }
            else {
                _this.xxxPage = __WEBPACK_IMPORTED_MODULE_17__registro_registro__["a" /* RegistroPage */];
            }
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    HomePage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */], { userId: 8675309 });
        profileModal.present();
    };
    HomePage.prototype.iralogin = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_14__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */]);
        //this.navCtrl.push(LoginprincipalPage, {});
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    HomePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage.prototype.panico = function () {
        this.authHttp.get('http://138.68.230.137:8000/panico/')
            .subscribe(function (data) { return console.log(data); });
        this.callNumber.callNumber("910759370", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //this.logeado = this.navParams.get('statuslogin')
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
        });
        this.storage.get('newservice').then(function (val) {
            if (val == 1) {
                _this.xxxPage = __WEBPACK_IMPORTED_MODULE_10__historial_historial__["a" /* HistorialPage */];
                _this.storage.set('newservice', 0);
            }
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.closeMenu();
    };
    HomePage.prototype.openHome = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(HomePage_1);
        this.closeMenu();
    };
    HomePage.prototype.salir = function () {
        this.storage.remove('token');
        this.storage.remove('sexo');
        //this.navCtrl.push(IntroPage);
        this.platform.exitApp();
    };
    HomePage.prototype.sacacategoria = function (sexo) {
        if (sexo == 1) {
            this.xxxPage = __WEBPACK_IMPORTED_MODULE_7__intro_intro__["a" /* IntroPage */];
        }
        if (sexo == 2) {
            this.xxxPage = __WEBPACK_IMPORTED_MODULE_9__men_men__["a" /* MenPage */];
        }
    };
    HomePage.prototype.sacasexo = function () {
        var _this = this;
        this.closeMenu();
        this.storage.remove('sexo');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__sexo_sexo__["a" /* SexoPage */], {});
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (data == 'H') {
                _this.storage.set('sexo', 2);
                _this.sexo = 2;
                _this.sacacategoria(2);
            }
            else {
                _this.storage.set('sexo', 1);
                _this.sacacategoria(1);
            }
        });
        profileModal.present();
        //   let alertsexo = this.alertCtrl.create({
        //   title: 'Escoge tu género',
        //   cssClass: 'sexocss',
        //   buttons: [
        //     {
        //       text: '',
        //       role: 'cancel',
        //       handler: () => {
        //         this.storage.set('sexo',1)
        //         this.sexo=1
        //         this.sacacategoria(1)
        //       }
        //     },
        //     {
        //       text: '',
        //       handler: () => {
        //         this.storage.set('sexo',2)
        //         this.sacacategoria(2)
        //       }
        //     }
        //   ]
        // });
        // alertsexo.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andy/mylook/src/pages/home/home.html"*/' <ion-menu persistent="true" [content]="content" side="left" >\n \n  \n\n\n  <ion-toolbar color=\'dark\' >\n    <ion-title>Menu </ion-title>\n\n\n\n\n    \n\n  </ion-toolbar>\n \n  <ion-content  color=\'dark\' >\n\n   <ion-list >\n  \n         <!--  <button ion-item>\n        \n      </button>\n -->\n\n    </ion-list> \n\n    <!-- <ion-list *ngIf="logeado==false" style=\'padding-top:37px;\'>\n\n\n      \n \n\n   \n  \n\n      <button ion-item *ngFor="let p of pagesnologeado" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n      <button ion-item (click)="video()">\n        Video\n      </button>\n\n      <button ion-item (click)="iralogin()">\n      Ingresar\n    </button>\n\n       <button ion-item (click)="sacasexo()">\n        Escoge tu género \n      </button>\n\n       <a ion-item style=\'\n    text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola"> Contáctenos <ion-icon name="logo-whatsapp" style=\'color: #25d366;float:right;\'></ion-icon></a>\n\n    <a ion-item style=\'text-decoration: none;\' href="tel:+910759370"> Llamanos <ion-icon name="call" style=\'color: #000;float:right;\'></ion-icon></a>\n\n\n    </ion-list>\n -->\n  \n    <ion-list  style=\'padding-top:37px;\'>\n\n    \n      \n   \n  \n      <button ion-item (click)="panico()" style=\'background: #161616;\n    color: #fff;\'>\n   \n      Emergencia\n\n      <ion-icon name="disc" style =\'float: right;\n\n    padding-top: -10px;\n    color: #f16b6b;\n}\'></ion-icon>\n      </button>\n      \n      \n       <button ion-item *ngFor="let p of pageslogeado" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n\n\n   \n\n <a ion-item style=\'\n    text-decoration: none;\' href=\'#\' (click)="sacasexo()"> Escoge tu género  <img style=\'width: 24px;\n    float: right;\'src="assets/icono-menu.jpg"></a>\n\n\n\n\n\n\n      <a ion-item style=\'\n    text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola"> Contáctenos <ion-icon name="logo-whatsapp" style=\'color: #25d366;float:right;\'></ion-icon></a>\n\n    <a ion-item style=\'text-decoration: none;\' href="tel:+910759370"> Llamanos <ion-icon name="call" style=\'color: #000;float:right;\'></ion-icon></a>\n\n\n        <button ion-item *ngFor="let p of otraspages" (click)="openPage(p)">\n\n        {{p.title}}\n      </button>\n\n\n<button  ion-item (click)="salir()">\n        Salir\n      </button>\n\n    </ion-list>\n\n\n\n   \n\n      \n\n\n  \n\n\n  </ion-content>\n \n</ion-menu>\n\n\n\n<ion-nav id="nav" [root]="xxxPage" #content swipe-back-enabled="true"></ion-nav>\n \n'/*ion-inline-end:"/home/andy/mylook/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_22__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_22__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_18_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

var LoginPage = (function () {
    function LoginPage(server, toastCtrl, fb, alertCtrl, view, _perfil, appCtrl, http, authHttp, storage) {
        this.server = server;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._perfil = _perfil;
        this.appCtrl = appCtrl;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.isLoggedIn = false;
        this.model = new User(null, null);
        this.cargandoregistro();
        this.registroPage = __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__["a" /* RegistroPage */];
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log('Will....Enter');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        console.log('Did....Enter');
        //this.storage.get('token').then((val) => {if(val){this.appCtrl.getRootNav().push(IntroPage);}});
    };
    //     signInWithGoogle(): void {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }
    // signInWithFB(): void {
    //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // }
    // signOut(): void {
    //   this.authService.signOut();
    // }
    LoginPage.prototype.nologin = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Usuario o contraseña incorrecta',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    //Facebook
    LoginPage.prototype.cargandoregistro = function () {
        var toast = this.toastCtrl.create({
            message: 'Registrarte con Facebook o por correo',
            duration: 4000
        });
        toast.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            _this.users = res;
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
            });
            var creds = JSON.stringify({ users: _this.users });
            _this.http.post(_this.server.getMyGlobalVar() + '/loginfacebook/', creds, options)
                .subscribe(function (data) {
                var creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face'] + JSON.parse(data['_body'])['gender'] });
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this.view.dismiss();
                });
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ///Fin
    LoginPage.prototype.authenticate = function (username, password) {
        var _this = this;
        console.log('ingresando...');
        var creds = JSON.stringify({ username: username, password: password });
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        // sleep time expects milliseconds
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post(this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
            .subscribe(function (data) {
            console.log('status', data.status);
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            if (data.status == 200) {
                _this.view.dismiss();
                console.log('Redirigiendo...');
                sleep(200).then(function () {
                    //this.appCtrl.getRootNav().push(IntroPage);
                });
            }
            console.log('jwtHelper', JSON.stringify(jwtHelper.decodeToken(JSON.parse(data["_body"]).token)));
        }, function (error) {
            _this.nologin();
        });
    };
    LoginPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* Nav */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/andy/mylook/src/pages/login/login.html"*/'\n<ion-header>\n    <ion-navbar color=\'dark\'>\n   \n      <ion-title>Ingresar</ion-title>\n\n\n      <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n    </ion-navbar>\n\n\n\n\n  </ion-header>\n\n\n\n<ion-content>\n\n\n    <div center>\n\n\n      <!--Facebook Login-->\n\n  <div padding>\n  <div *ngIf="isLoggedIn; else facebookLogin">\n   <!--  <h2>Hi, {{users.name}} ({{users.email}})</h2>\n    <p>\n      Gender: {{users.gender}}\n    </p>\n    <p>\n      <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n    </p> -->\n    <p>\n      <button ion-button full icon-right (click)="logout()">\n        Salir\n      </button>\n    </p>\n  </div>\n\n\n  <ng-template #facebookLogin>\n    <button ion-button full icon-right (click)="login()">\n\n      Ingresar con\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ng-template>\n\n</div>\n\n\n      <ion-list inset>\n  <form #loginForm="ngForm" (ngSubmit)="authenticate(model.username,model.password)" autocomplete="off">\n   \n        <ion-list inset>\n          <label color=\'light\'>Correo Electronico</label>\n          <ion-item>\n            <ion-input name="username" id="loginField" type="text" required [(ngModel)] = "model.username" #email></ion-input>\n          </ion-item>\n\n          \n          <div style=\'height: 20px\'></div>\n\n          <label color=\'light\'>Password</label>\n          <ion-item>\n            <ion-input name="password" id="passwordField" type="password" required [(ngModel)] = "model.password"></ion-input>\n          </ion-item>\n        </ion-list>\n    \n\n\n\n\n    <ion-row>\n      <ion-col padding>\n\n\n        <button  round ion-button class="submit-btn" color=\'dark\' full type="submit" [disabled]="!loginForm.form.valid">Ingresar\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n\n          \n      </ion-list>\n\n\n    \n\n      \n    </div>\n\n</ion-content>'/*ion-inline-end:"/home/andy/mylook/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_10__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__venta_venta__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ubicacion_ubicacion__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_alerta_alerta__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_subirimagen_subirimagen__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_carrito_carrito__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_servicio_servicio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__historial_historial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registro_registro__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ayuda_ayuda__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__loginprincipal_loginprincipal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notificacion_notificacion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var IntroPage = (function () {
    function IntroPage(server, appCtrl, toastCtrl, _photo, alertCtrl, http, zone, platform, modalCtrl, socialSharing, storage, _perfil, _categoria, navCtrl, navParams) {
        //this.primerencuentro()
        var _this = this;
        this.server = server;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this._photo = _photo;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.zone = zone;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this._perfil = _perfil;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address = '';
        this.anuncioModal();
        console.log('server', this.server.getMyGlobalVar());
        this.host = this.server.getMyGlobalVar();
        //alert(this.device.uuid);
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__["a" /* PerfilPage */];
        this.introPage = IntroPage_1;
        this.servicioPage = __WEBPACK_IMPORTED_MODULE_14__pages_servicio_servicio__["a" /* ServicioPage */];
        this.historialPage = __WEBPACK_IMPORTED_MODULE_15__historial_historial__["a" /* HistorialPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */];
        this.loginprincipalPage = __WEBPACK_IMPORTED_MODULE_19__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */];
        this.ventaPage = __WEBPACK_IMPORTED_MODULE_6__venta_venta__["a" /* VentaPage */];
        this.ayudaPage = __WEBPACK_IMPORTED_MODULE_18__ayuda_ayuda__["a" /* AyudaPage */];
        ///Por default
        this._categoria.getcategorias(1)
            .subscribe(function (data) { return _this.categoria = data; });
        // this._photo.getfotosdeportada(1)
        //   .subscribe(data => {
        //        this.photo1=data[0].photo;
        //        this.link1=data[0].enlace
        //        this.photo2=data[1].photo;
        //        this.link2=data[1].enlace
        //        this.photo3=data[2].photo
        //        this.link3=data[2].enlace
        //        this.photo4=data[3].photo
        //        this.link4=data[3].enlace
        //   })
        //         this._photo.getfotosdepublicidad()
        // .subscribe(data => {
        //     console.log('getfotosdepublicidad',data)
        //      this.photo5=data[0].photo
        //      this.link5=data[0].enlace
        //      this.photo6=data[1].photo
        //      this.link6=data[1].enlace
        //      this.photo7=data[2].photo
        //      this.link7=data[2].enlace
        //      this.photo8=data[3].photo
        //      this.link8=data[3].enlace
        // })
        /////
    }
    IntroPage_1 = IntroPage;
    IntroPage.prototype.cerrar = function () {
        this.navCtrl.pop();
    };
    IntroPage.prototype.sacadistrito = function () {
        var _this = this;
        var alert1 = this.alertCtrl.create();
        alert1.setTitle('Cual es tu distrito?');
        alert1.addInput({
            type: 'radio',
            label: 'Lima',
            value: '1',
            checked: false
        });
        this.http.get(this.server.getMyGlobalVar() + 'distrito/').subscribe(function (data) {
            for (var _i = 0, _a = JSON.parse(data['_body']); _i < _a.length; _i++) {
                var entry = _a[_i];
                console.log(entry['nombre']);
                alert1.addInput({
                    type: 'radio',
                    label: entry['nombre'],
                    value: entry['id'],
                    checked: false
                });
            }
        });
        alert1.addButton('Cancel');
        alert1.addButton({
            text: 'OK',
            handler: function (data) {
                _this.storage.set('distrito', data);
                console.log(data);
                _this.primerencuentro();
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        alert1.present();
    };
    IntroPage.prototype.sacasexo1 = function () {
        var _this = this;
        var alertsexo = this.alertCtrl.create({
            title: 'Escoge tu genero',
            cssClass: 'sexocss',
            buttons: [
                {
                    text: '',
                    role: 'cancel',
                    handler: function () {
                        _this.storage.set('sexo', 1);
                        _this.sexo = 1;
                        _this.sacacategoria(1);
                    }
                },
                {
                    text: '',
                    handler: function () {
                        _this.storage.set('sexo', 2);
                        _this.sacacategoria(2);
                    }
                }
            ]
        });
        alertsexo.present();
    };
    IntroPage.prototype.sacacategoria = function (sexo) {
        this.navCtrl.popToRoot();
        //     this._categoria.getcategorias(sexo)
        //       .subscribe(data => this.categoria = data);
        //                     this._photo.getfotosdeportada(sexo)
        // .subscribe(data => {
        //      this.photo1=data[0].photo;
        //      this.link1=data[0].enlace
        //      this.photo2=data[1].photo;
        //      this.link2=data[1].enlace
        //      this.photo3=data[2].photo
        //      this.link3=data[2].enlace
        //      this.photo4=data[3].photo
        //      this.link4=data[3].enlace
        // })
        //         this._photo.getfotosdepublicidad()
        // .subscribe(data => {
        //      this.photo5=data[0].photo
        //      this.link5=data[0].enlace
        //      this.photo6=data[1].photo
        //      this.link6=data[1].enlace
        //      this.photo7=data[2].photo
        //      this.link7=data[2].enlace
        //      this.photo8=data[3].photo
        //      this.link8=data[3].enlace
        // })
    };
    IntroPage.prototype.primerencuentro = function () {
        var toast = this.toastCtrl.create({
            message: 'Escoge uno de nuestros servicios a delivery que disponemos para ti',
            position: 'bottom',
            duration: 2000
        });
        toast.present();
    };
    IntroPage.prototype.loginModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_19__loginprincipal_loginprincipal__["a" /* LoginprincipalPage */], { userId: 8675309 });
        profileModal.present();
    };
    IntroPage.prototype.anuncioModal = function () {
        var _this = this;
        this.http.get(this.server.getMyGlobalVar() + 'activa_anuncio/')
            .subscribe(function (res) {
            console.log('res[_body]', res['_body']);
            if (res['_body'] == 1) {
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_alerta_alerta__["a" /* AlertaPage */], { userId: 8675309 });
                profileModal.present();
            }
        });
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad', 'Intro');
        this.storage.get('pedido').then(function (val) {
            console.log('intro...ionViewWillEnter', val);
            if (val) {
                _this.pedido = val;
                _this.book = _this.pedido.length;
                console.log('entre a book');
            }
        });
        //this.currentLocation()
    };
    IntroPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewWillLoad', 'Intro');
    };
    IntroPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter', 'Intro');
        this.storage.get('pedido').then(function (val) {
            console.log('intro...ionViewWillEnter', val);
            if (val) {
                _this.pedido = val;
                _this.book = _this.pedido.length;
                console.log('entre a book');
            }
        });
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_registro_registro__["a" /* RegistroPage */], {});
            }
        });
    };
    IntroPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter', 'Intro');
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.logeado = true;
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_registro_registro__["a" /* RegistroPage */], {});
            }
        });
    };
    IntroPage.prototype.carritoModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__pages_carrito_carrito__["a" /* CarritoPage */], { carrito: this.pedido });
        profileModal.onDidDismiss(function (data) {
            if (data.nivel == 'ubicacion') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_ubicacion_ubicacion__["a" /* UbicacionPage */], {});
            }
            if (data.pedido) {
                _this.book = data.pedido.length;
            }
        });
        profileModal.present();
    };
    IntroPage.prototype.iraventas = function (data) {
        console.log('hhh', data.id);
        if (data.id == 24 || data.id == 25) {
            this.subirimagen();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__venta_venta__["a" /* VentaPage */], {
                categoria: data,
            });
        }
    };
    IntroPage.prototype.gonoti = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__notificacion_notificacion__["a" /* NotificacionPage */], {
            user: 'data',
        });
    };
    IntroPage.prototype.subirimagen = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_subirimagen_subirimagen__["a" /* SubirimagenPage */], {});
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    IntroPage.prototype.shareSheetShare = function () {
        this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    ///Saca ubicacion
    // currentLocation() {
    //   this.geolocation.getCurrentPosition().then((position) => {
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     let latLngObj = {'lat': position.coords.latitude, 'long': position.coords.longitude};
    //     // Display  Marker
    //     //this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    //     //alert(latLngObj)
    //     //this.storage.set('ubicacion', latLngObj)
    //     this.ubicacion=latLngObj
    //     this.getAddress(latLngObj);
    //     localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
    //     return latLngObj;
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    // getAddress(latLngObj) {
    //   // Get the address object based on latLngObj
    //   this.mapService.getStreetAddress(latLngObj).subscribe(
    //     s_address => {
    //       if (s_address.status == "ZERO_RESULTS") {
    //         this.mapService.getAddress(latLngObj).subscribe(
    //           address => {
    //             this.address = address.results[0].formatted_address;
    //             //this.getAddressComponentByPlace(address.results[0], latLngObj);
    //           },
    //           err => console.log("Error in getting the street address " + err)
    //         )
    //       } else {
    //         console.log('ingrese.....',s_address)
    //         this.address = s_address.results[0].formatted_address;
    //         this.sacaactualdistrito(this.address)
    //         this.referencia = s_address.results[0].formatted_address;
    //         //this.getAddressComponentByPlace(s_address.results[0], latLngObj);
    //         //alert(latLngObj)
    //         //this.storage.set('ubicacion', latLngObj)
    //         //alert(this.address);
    //       }
    //     },
    //     err => {
    //       //alert('No Address found ' + err);
    //     }
    //   );
    // }
    IntroPage.prototype.sacaactualdistrito = function (ubicacion) {
        var _this = this;
        var creds = JSON.stringify({ ubicacion: ubicacion });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post(this.server.getMyGlobalVar() + 'obtienedistrito/', creds, options)
            .subscribe(function (data) {
            _this.storage.set('distrito', data['_body']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
    ], IntroPage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]) === "function" && _b || Object)
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = IntroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/andy/mylook/src/pages/intro/intro.html"*/'\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>STILO </ion-title>\n\n         <ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                         \n                            \'>{{book}}</ion-badge> \n                            \n\n        <ion-buttons end>\n      <button *ngIf=\'book>0\' end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n\n    </ion-navbar>\n  </ion-header>\n\n  \n<ion-content>\n\n\n\n<!--<ion-slides *ngIf="photo1" autoplay="2000"  speed="4000" pager paginationType=\'bullets\'>\n\n\n  <ion-slide ng-click=\'iradetalle(1)\'>\n\n    <img src="{{host}}{{photo1}}" alt="">\n  </ion-slide>\n\n  <ion-slide ng-click=\'iradetalle(2)\'>\n    <img src="{{host}}{{photo2}}" alt="">\n  </ion-slide>\n\n\n  <ion-slide ng-click=\'iradetalle(3)\'>\n    <img src="{{host}}{{photo3}}" alt="">\n  </ion-slide>\n\n  <ion-slide ng-click=\'iradetalle(4)\'>\n    <img src="{{host}}{{photo4}}" alt="">\n  </ion-slide>\n\n\n</ion-slides>\n\n\n<ion-slides *ngIf="photo5" effect=\'fade\' autoplay="2000"  speed="3000" style=\'margin-top: -2px;\'>\n\n\n  <ion-slide>\n\n    <a href=\'{{link5}}\'>\n    <img src="{{host}}{{photo5}}" alt="">\n    </a>\n\n  </ion-slide>\n  <ion-slide>\n\n    <a href=\'{{link6}}\'>\n    <img src="{{host}}{{photo6}}" alt="">\n    </a>\n\n  </ion-slide>\n  <ion-slide>\n    <a href=\'{{link7}}\'>\n    <img src="{{host}}{{photo7}}" alt="">\n    </a>\n  </ion-slide>\n\n  <ion-slide>\n    <a href="{{link8}}">\n    <img src="{{host}}{{photo8}}" alt="">\n    </a>\n  </ion-slide>\n\n\n  \n</ion-slides>-->\n\n\n\n\n<div style=\'margin-top:-2px;\'>\n\n\n<div  *ngFor = \'let c of categoria\' (click)=\'iraventas(c)\' >\n\n\n\n      <a  >\n        <img ng-if=\'c.photo\'  src="{{host}}{{c.photo}}"  class=\'categoriaimagen\'>\n         <div class=\'categoria\' style="color:#fff;">{{c.nombre}}</div>\n      </a>\n\n   \n\n<div style="height:2px;"></div>\n\n </div>\n\n </div>\n\n<!-- <div style=\'height: 50px\'></div> \n -->\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/andy/mylook/src/pages/intro/intro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__["a" /* PortadaProvider */], __WEBPACK_IMPORTED_MODULE_21__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_21__providers_server_server__["a" /* ServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_21__providers_server_server__["a" /* ServerProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__["a" /* PortadaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_portada_portada__["a" /* PortadaProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _s || Object])
    ], IntroPage);
    return IntroPage;
    var IntroPage_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registroprincipal_registroprincipal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
// import { SocialUser } from "angular4-social-login";
// import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = (function () {
    function RegistroPage(spinner, nav, server, toastCtrl, fb, storage, _perfil, alertCtrl, view, formBuilder, appCtrl, http, navCtrl, navParams) {
        //Telefono
        var _this = this;
        this.spinner = spinner;
        this.nav = nav;
        this.server = server;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.storage = storage;
        this._perfil = _perfil;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this.formBuilder = formBuilder;
        this.appCtrl = appCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isLoggedIn = false;
        this.user = {};
        this.muestraregistro = true;
        // this.toastingresar()
        this.registroprincipalPage = __WEBPACK_IMPORTED_MODULE_6__pages_registroprincipal_registroprincipal__["a" /* RegistroprincipalPage */];
        this.storage.get('telefono').then(function (val) {
            _this.telefono = val;
            _this.user.telefono = _this.telefono;
        });
        ///Facebook
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
        //this.cargandoregistro()
        ///
        this.todo = this.formBuilder.group({
            telefono: [''],
        });
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
    }
    // iralogin(){
    //     //this.navCtrl.push(RegistroprincipalPage, {}, {animate: true, direction: 'forward'});
    //     console.log('v')
    //     //this.nav.push(RegistroprincipalPage)
    //     this.navCtrl.setRoot(RegistroprincipalPage, {}, { animate: true, direction: 'forward' });
    // }
    //   signInWithGoogle(): void {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }
    // signInWithFB(): void {
    //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    //   console.log('datos')
    //    this.authService.authState.subscribe((user) => {
    //     console.log('user...social',user)
    //     this.userface = user;
    //     this.loggedIn = (user != null);
    //     //Conexion con Django
    //     let options: RequestOptions = new RequestOptions({
    //     headers: new Headers({ 'Content-Type': 'application/json' })
    //     });
    //     let creds = JSON.stringify({ users: this.userface});
    //     this.http.post(this.server.getMyGlobalVar()+'loginfacebook/', creds, options)
    //     .subscribe(
    //       data => {
    //         let creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face']+JSON.parse(data['_body'])['gender']});
    //         this.http.post(this.server.getMyGlobalVar()+'api-token-auth/', creds, options)
    //                 .subscribe(
    //                   data => {
    //                      this.storage.set('token', JSON.parse(data["_body"]).token)
    //                      this.view.dismiss()
    //                               }
    //                             );
    //       })
    //   });
    // }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.cargandoregistro = function () {
        var toast = this.toastCtrl.create({
            message: 'Registrarte con Facebook o por correo',
            duration: 4000
        });
        toast.present();
    };
    //Facebook
    RegistroPage.prototype.login = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    RegistroPage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    RegistroPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            _this.users = res;
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
            });
            var creds = JSON.stringify({ users: _this.users, telefono: _this.telefono });
            _this.http.post(_this.server.getMyGlobalVar() + 'loginfacebook/', creds, options)
                .subscribe(function (data) {
                var creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face'] + JSON.parse(data['_body'])['gender'] });
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this.view.dismiss();
                });
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ///Fin
    RegistroPage.prototype.toastingresar = function () {
        var toast = this.toastCtrl.create({
            message: 'Inicie sesion con su celular si ya se registro antes',
            position: 'top',
            duration: 4000
        });
        toast.present();
    };
    RegistroPage.prototype.toastregistro = function () {
        var toast = this.toastCtrl.create({
            message: 'Su numero no esta registrado porfavor registrate',
            position: 'top',
            duration: 4000
        });
        toast.present();
    };
    RegistroPage.prototype.toastcelular = function () {
        var toast = this.toastCtrl.create({
            message: 'Ingrese su numero de celular',
            position: 'bottom',
            duration: 2000
        });
        toast.present();
    };
    RegistroPage.prototype.toast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            position: 'bottom',
            duration: 5000
        });
        toast.present();
    };
    RegistroPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Bienvenido, porfavor ingresa',
            buttons: ['OK']
        });
        alert.present();
    };
    RegistroPage.prototype.autentifica = function (username, password) {
        var _this = this;
        console.log('autentificando...');
        var creds = JSON.stringify({ username: username, password: password });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        console.log(creds);
        return this.http.post(this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
            .subscribe(function (data) {
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            // this.view.dismiss()
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], { statuslogin: true });
        });
    };
    RegistroPage.prototype.emailrepetido = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Este correo ya existe porfavor escoja otra',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    RegistroPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    RegistroPage.prototype.iniciar = function (data) {
        console.log('datos...');
        this.muestraregistro = false;
        this.toastcelular();
    };
    RegistroPage.prototype.ingresar = function (newObj) {
        var _this = this;
        console.log(newObj);
        if (newObj) {
            this.spinner.load();
            this.storage.get('codigosms').then(function (val) {
                _this.codigosms = val;
                _this.valida = { 'cliente': newObj, 'codigosms': _this.codigosms };
                //Valida usuario
                _this._perfil.validauser(_this.valida)
                    .subscribe(function (data) {
                    console.log('valida usuario', data);
                    if (data == 'Ya valido codigo') {
                        _this.autentifica(newObj, 'rosa0000');
                        _this.spinner.dismiss();
                    }
                    if (data == 0) {
                        _this._perfil.enviasms(newObj)
                            .subscribe(function (data) {
                            _this.codigo = data.codigo;
                            _this.toast(data.contenido);
                            console.log('CODID..', data);
                            _this.sacatelefono(newObj);
                            _this.spinner.dismiss();
                        });
                    }
                    if (data == 1) {
                        console.log('data...');
                        _this.toast('Su numero no esta registrado porfavor registrate');
                        _this.spinner.dismiss();
                        // this.navCtrl.push(RegistroprincipalPage, {
                        //    categoria: data,
                        //  })
                    }
                }, function (error) {
                    console.log(error);
                    _this.toast(error);
                    _this.spinner.dismiss();
                });
            });
        }
        else {
            this.toast('Ingrese su telefono o registrese');
        }
    };
    RegistroPage.prototype.sacatelefono = function (env) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ingrese codigo de confirmacion',
            enableBackdropDismiss: false,
            inputs: [
                {
                    name: 'codigo',
                    placeholder: 'Codigo'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        console.log('enviando..', data.codigo, _this.codigo);
                        //this.logForm(env)
                        if (parseInt(_this.codigo) == parseInt(data.codigo)) {
                            _this.autentifica(env, 'rosa0000');
                            _this.storage.set('codigosms', _this.codigo);
                            alert.dismiss();
                        }
                        else {
                            _this.toast('Codigo Incorrecto');
                        }
                        return false;
                    }
                }
            ]
        });
        alert.present();
    };
    RegistroPage.prototype.logForm = function (env) {
        var _this = this;
        console.log(env.email);
        var creds = JSON.stringify({ username: env.email, password: env.password });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        function sleep(time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        }
        this.http.post(this.server.getMyGlobalVar() + 'registro/', env, options)
            .subscribe(function (data) {
            console.log('eroo..', data['_body']);
            if (data['_body'] == '"ok"') {
                console.log('ingrese');
                ///Logeandose
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    console.log('ingresando..', data);
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this.view.dismiss();
                    //this.appCtrl.getRootNav().push(UbicacionPage);
                });
            }
            if (data['_body'] == 0) {
                _this.emailrepetido();
            }
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro',template:/*ion-inline-start:"/home/andy/mylook/src/pages/registro/registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title> Registrate </ion-title>\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n -->\n\n\n<ion-content padding style=\'text-align: center;\' class=\'fondologin\'>\n\n\n\n\n\n<!-- \n<div class="app-icon">\n        <ion-icon name="ios-chatbubbles-outline" ></ion-icon>\n      </div> -->\n\n\n   <!--Facebook Login-->\n\n\n<!--   <div *ngIf="isLoggedIn; else facebookLogin">\n \n    <p>\n      <button ion-button full icon-right (click)="logout()">\n        Salir\n      </button>\n    </p>\n  </div>\n  <ng-template #facebookLogin>\n    <button ion-button full icon-right (click)="login()">\n      Ingresar con\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ng-template>\n -->\n \n\n\n<img class=\'animated fadeIn\'  src="assets/icono-iso.png" width="200px">\n\n\n \n<!-- <label *ngIf="!telefono" color=\'light\'>Registrate con tu celular</label>\n -->\n\n\n\n\n  \n<!--        <ion-list inset>\n\n\n      \n\n     \n      <label color=\'dark\'>Correo Electronico</label>\n      <ion-item>\n            <ion-input  formControlName="email"  name=\'email\' id="loginField" type="email" required [(ngModel)] = "user.email"></ion-input>\n      </ion-item>\n\n\n\n      <label color=\'dark\'>Nombre</label>\n      <ion-item>\n            <ion-input formControlName="nombre"  name=\'nombre\' id="loginField" type="text" required [(ngModel)] = "user.nombre"></ion-input>\n      </ion-item>\n\n\n\n      <label color=\'dark\'>Telefono</label>\n      <ion-item>\n            <ion-input formControlName="telefono"  name=\'telefono\' id="loginField" type="text" required [(ngModel)] = "user.telefono"></ion-input>\n      </ion-item>\n\n\n\n      <label color=\'dark\'>Password</label>\n\n\n      <ion-item>\n            <ion-input  formControlName="password" name="password" id="loginField" type="password" required [(ngModel)] = "user.password"></ion-input>\n      </ion-item>\n\n\n      </ion-list>\n\n\n\n      <button round ion-button type="submit" color=\'dark\' block [disabled]="!todo.valid">Registrar</button>\n -->    \n\n<!-- \n <ion-row padding>Si ya tienes cuenta ingresa <span [navPush]="loginPage" style=\'padding-left: 9px;text-decoration: underline;\n\'> AQUI</span></ion-row>\n -->\n<!-- \n<button round ion-button  color=\'white\' block  [navPush]="loginPage" >Ingresar</button> -->\n\n  <!--    <button round ion-button  color=\'white\' block  [navPush]="registrosociaPage" >Conviertete en socia</button>-->\n\n\n\n\n<ion-list inset >\n\n\n<label style=\'color:#fff;\'>Si ya estas registrado ingresa tu celular</label>\n\n  <form style=\'margin-top: 8px;\' (ngSubmit)="ingresar(tel)" [formGroup]="todo">\n<ion-row wrap>\n\n\n<ion-col col-12>\n\n            <ion-item>\n            <ion-input  round  formControlName="telefono"  placeholder=\'Ingrese tu número\'  name=\'telefono\' type="number" required [(ngModel)] = "tel"></ion-input>\n            </ion-item>\n\n</ion-col>\n\n <ion-col col-12>\n<button  ion-button full round block type="submit" color=\'danger\'   >Ingresar</button>\n</ion-col>\n </ion-row>\n\n\n\n\n\n\n</form>\n\n\n</ion-list>\n\n\n\n\n<ion-list inset >\n\n<button  style=\'background:#7765B7;\' round ion-button type="button" color=\'light\' block [navPush]="registroprincipalPage" ><ion-col col-2><ion-icon name="phone-portrait"></ion-icon> </ion-col><ion-col col-10>Registrate con tu celular </ion-col></button>\n\n\n<div style=\'height: 20px;\'></div>\n\n\n        <div  style=\'padding: 9px;\n    border-radius: 4em;\n    opacity: 0.8;\n    border: 1px solid #fff;\'>\n       <a color=\'light\' class=\'reportar\' style=\'text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola"> Reportar un problema  </a>\n     </div>\n\n</ion-list>\n\n\n\n</ion-content>\n\n<!-- <mytabs></mytabs>\n\n\n -->'/*ion-inline-end:"/home/andy/mylook/src/pages/registro/registro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicioPage = (function () {
    function ServicioPage(server, authHttp, http, device, navCtrl, navParams) {
        this.server = server;
        this.authHttp = authHttp;
        this.http = http;
        this.device = device;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var creds = JSON.stringify({ model: this.device.model, tipo: this.device.version });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.authHttp.post(this.server.getMyGlobalVar() + 'guardadatosmovil/', creds, options)
            .subscribe(function (data) {
            console.log(data);
        });
    }
    ServicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicioPage');
    };
    ServicioPage.prototype.home = function () {
        this.navCtrl.popToRoot();
    };
    ServicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-servicio',template:/*ion-inline-start:"/home/andy/mylook/src/pages/servicio/servicio.html"*/'<!--\n  Generated template for the ServicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Tu pedido </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card-content style=\'background: #222;\n    opacity: 0.6;\n    color: #fff;\n    margin-bottom: 14px;\n    border-radius: 6px;\n    padding: 52px !important;\'>\n\n	Felicitaciones se completo tu solicitud, estamos en la busqueda de una socia para ti\n\n  </ion-card-content>\n\n\n\n\n\n\n\n <button ion-button block round color="dark"  [navPush]="reservaPage" >Cancelar pedido</button>\n\n\n\n\n\n <button ion-button block round color="dark"  (click)=\'home()\' >Ir al home</button>\n\n\n\n</ion-content>\n\n\n<mytabs></mytabs>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/servicio/servicio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ServicioPage);
    return ServicioPage;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_categorias_categorias__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarritoPage = (function () {
    function CarritoPage(dataService, storage, view, navCtrl, navParams) {
        this.dataService = dataService;
        this.storage = storage;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('navParams', navParams.get('carrito'));
        this.pedido = navParams.get('carrito');
        this.ubicacion = navParams.get('ubicacion');
        this.precio = 0;
        for (this.p in this.pedido) {
            console.log('precio...', this.pedido[this.p].precio);
            this.pedido[this.p].precio_descuento_item = 0;
            this.pedido[this.p].precio_descuento_item = Math.round(this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad * 100) / 100;
            this.precio = this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad + this.precio;
            this.precio = Math.round(this.precio * 100) / 100;
            this.storage.set('precio', this.precio);
        }
    }
    CarritoPage.prototype.closeModal = function () {
        var data = { 'nivel': 'cerrar', 'pedido': this.pedido };
        this.view.dismiss(data);
    };
    CarritoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarritoPage');
        this.precio = 0;
        for (this.p in this.pedido) {
            console.log('precio...', this.pedido[this.p].precio);
            this.pedido[this.p].precio_descuento_item = 0;
            this.pedido[this.p].precio_descuento_item = Math.round(this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad * 100) / 100;
            this.precio = this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad + this.precio;
            this.precio = Math.round(this.precio * 100) / 100;
            //this.precio=this.precio.toFixed(2)
            this.storage.set('precio', this.precio);
        }
    };
    CarritoPage.prototype.ionViewWillEnter = function () {
    };
    CarritoPage.prototype.continuar = function () {
        var data = { 'nivel': 'ubicacion', 'pedido': this.pedido };
        this.view.dismiss(data);
        // if(this.pedido){
        //    this.navCtrl.push(UbicacionPage, {})
        // }
        // else{
        //     this.navCtrl.push(ReservaPage, {})
        // }
    };
    CarritoPage.prototype.quitacarrito = function (data) {
        this.u = this.pedido.filter(function (c) { return c.id === data.id; });
        console.log('quitando', this.u);
        var index = this.pedido.indexOf(data);
        if (index !== -1) {
            this.pedido.splice(index, 1);
            console.log('holaaa.', this.pedido);
            this.storage.set('pedido', this.pedido);
            this.precio = 0;
            for (this.p in this.pedido) {
                this.pedido[this.p].precio_descuento_item = 0;
                this.pedido[this.p].precio_descuento_item = Math.round(this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad * 100) / 100;
                console.log('precio...', this.pedido[this.p].precio_descuento);
                this.precio = this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad + this.precio;
                this.precio = Math.round(this.precio * 100) / 100;
                //this.precio=this.precio.toFixed(2)
                this.storage.set('precio', this.precio);
            }
        }
        // if (this.u.length==1){
        // this.book=this.book-1
        // this.precio = this.precio-data.precio
        // console.log('pedido',this.pedido)
        // }
    };
    CarritoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-carrito',template:/*ion-inline-start:"/home/andy/mylook/src/pages/carrito/carrito.html"*/'<!--\n  Generated template for the CarritoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'dark\'>\n\n      \n    <ion-title>Carrito</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n\n\n    \n\n\n\n</ion-header>\n\n\n<ion-content >\n\n   \n\n<ion-item-sliding *ngFor="let item of pedido">\n\n    \n\n    <button ion-item>\n\n    <ion-icon name="trash" item-end (click)="quitacarrito(item)"></ion-icon>\n  <span *ngIf=\'item.cantidad>1\'>{{item.cantidad}}</span>  {{item.nombre | slice:0:25}}.\n      \n <span style=\'float:right; font-family: "M PLUS Rounded 1c";\'>S/. {{item.precio_descuento_item.toFixed(2)}}</span>\n  </button>\n \n \n  </ion-item-sliding>\n\n     <button *ngIf=\'precio>0\' ion-item>\n\n      Precio Total\n <span style=\'float:right; font-family: "M PLUS Rounded 1c"\'  >S/. {{precio.toFixed(2)}}</span>\n  </button>\n\n\n    \n<div padding>\n<button color=\'danger\' *ngIf="pedido.length>0" class="animated  fadeInUp" ion-button full round  style=\'transition: none; color:#fff; \' (click)=\'continuar()\'>Pedir</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/carrito/carrito.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_categorias_categorias__["a" /* CategoriasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CarritoPage);
    return CarritoPage;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AyudaPage = (function () {
    function AyudaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AyudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyudaPage');
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ayuda',template:/*ion-inline-start:"/home/andy/mylook/src/pages/ayuda/ayuda.html"*/'<!--\n  Generated template for the AyudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n <ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Ayuda</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n\n  <ion-item>Para cualquier consulta al: </ion-item>\n  <ion-item-group>\n    <ion-item-divider color="light">Whatsapp</ion-item-divider>\n    <ion-item>990995742</ion-item>\n    <ion-item>980729169</ion-item>\n      <ion-item-divider color="light">Correo</ion-item-divider>\n    <ion-item>cliente@mylookxpress.com</ion-item>\n\n  </ion-item-group>\n</ion-content>'/*ion-inline-end:"/home/andy/mylook/src/pages/ayuda/ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reserva_reserva__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrito_carrito__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ubicacion_ubicacion__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detalleproducto_detalleproducto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaPage = (function () {
    function VentaPage(nav, viewCtrl, server, menuCtrl, appCtrl, modalCtrl, toastCtrl, formBuilder, alertCtrl, storage, _categoria, navCtrl, http, navParams) {
        var _this = this;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.server = server;
        this.menuCtrl = menuCtrl;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._categoria = _categoria;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.myVar = true;
        this.book = 0;
        this.precio = 0;
        this.pedido = new Array();
        this.muestradescripcion = true;
        this.elimina = false;
        this.first = true;
        this.footer = 'hidden';
        this.todo = this.formBuilder.group({
            experiencia: [''],
            referencia: [''],
            comentario: ['']
        });
        this.first = true;
        this.header = 'false';
        this.host = this.server.getMyGlobalVar();
        this.presentToast();
        this.storage.get('distrito').then(function (val) {
            _this.distrito = val;
            if (val == null) {
                _this.distrito = 1;
            }
            _this.cate = navParams.get("categoria");
            console.log('cate...', _this.cate);
            _this.toastcategoria(_this.cate.nombre);
            _this._categoria.getsubcategorias(_this.cate.id, _this.distrito)
                .subscribe(function (data) {
                //this.mano = data
                _this.traesubcategorias(_this.cate);
            });
        });
        this.reservaPage = __WEBPACK_IMPORTED_MODULE_5__reserva_reserva__["a" /* ReservaPage */];
        this.ubicacionPage = __WEBPACK_IMPORTED_MODULE_8__ubicacion_ubicacion__["a" /* UbicacionPage */];
        this.cate = navParams.get("categoria");
        console.log('nva', this.cate);
        this.storage.get('sexo').then(function (val) {
            _this.sexo = val;
            console.log('sexo', val);
            if (val == null) {
                val = 1;
            }
            _this._categoria.getcategorias(val)
                .subscribe(function (data) {
                _this.categoria = data;
            });
        });
    }
    VentaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter', 'Intro');
        this.header = 'false';
        this.storage.get('pedido').then(function (val) {
            if (val) {
                _this.pedido = val;
                _this.book = _this.pedido.length;
                _this.precio = 0;
                for (_this.p in _this.pedido) {
                    console.log('cantidad......', _this.pedido[_this.p].cantidad);
                    _this.precio = _this.pedido[_this.p].precio_descuento * _this.pedido[_this.p].cantidad + _this.precio;
                    _this.precio = Math.round(_this.precio * 100) / 100;
                }
            }
        });
    };
    VentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentaPage');
    };
    VentaPage.prototype.iralhome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], { statuslogin: true });
    };
    VentaPage.prototype.openMenu = function () {
        console.log('hdhdhd');
        this.menuCtrl.open();
    };
    VentaPage.prototype.carritoModal = function () {
        var _this = this;
        this.storage.set('pedido', this.pedido);
        this.storage.set('precio', this.precio);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__carrito_carrito__["a" /* CarritoPage */], { carrito: this.pedido });
        profileModal.onDidDismiss(function (data) {
            if (data.nivel == 'ubicacion') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__ubicacion_ubicacion__["a" /* UbicacionPage */], {});
            }
            console.log('oooo', data);
            if (data.pedido) {
                _this.book = data.pedido.length;
                _this.precio = 0;
                for (_this.p in _this.pedido) {
                    console.log('precio...', _this.pedido[_this.p].precio);
                    _this.precio = _this.pedido[_this.p].precio_descuento * _this.pedido[_this.p].cantidad + _this.precio;
                    _this.precio = Math.round(_this.precio * 100) / 100;
                    //this.storage.set('precio', this.precio)
                }
            }
        });
        profileModal.present();
    };
    VentaPage.prototype.detalleProducto = function (data) {
        var _this = this;
        console.log('detalleproducto', data);
        //Si es Lo quiero...
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__detalleproducto_detalleproducto__["a" /* DetalleproductoPage */], { producto: data });
        profileModal.onDidDismiss(function (data) {
            _this.agregacarrito(data.producto);
            console.log('ingrese aqui...', data);
            if (data.producto.categoria__nombre = 'Lo quiero') {
                _this.continuar();
            }
            //this.navCtrl.popToRoot();
        });
        profileModal.present();
    };
    VentaPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Agrega todas las categorias que desees, para llenar tu carrito de compras',
            duration: 1000
        });
        toast.present();
    };
    VentaPage.prototype.agregatoast = function (data) {
        var toast = this.toastCtrl.create({
            message: 'Perfecto !! agregaste ' + data,
            duration: 4000
        });
        toast.present();
    };
    VentaPage.prototype.toastcategoria = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    VentaPage.prototype.showAlert = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: item.nombre,
            subTitle: item.descripcion,
            cssClass: 'alertCustomCss',
            inputs: [
                {
                    name: 'cantidad',
                    placeholder: 'Ingrese Cantidad',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'Lo Quiero',
                    cssClass: 'alertcss',
                    handler: function (data) {
                        item.cantidad = data;
                        _this.agregacarrito(item);
                    }
                }
            ]
        });
        alert.present();
    };
    VentaPage.prototype.traesubcategorias = function (data) {
        var _this = this;
        console.log('traesubcategorias..........', data.id);
        this.cate = data;
        this.toastcategoria(data.nombre);
        this._categoria.getsubcategorias(data.id, this.distrito)
            .subscribe(function (data) {
            _this.subcategoria = data;
            if (_this.cate.id == 24 || _this.cate.id == 25) {
                console.log('redirigiendo...');
                _this.detalleProducto(data[0]);
            }
        });
    };
    VentaPage.prototype.agregacarrito = function (data) {
        //this.agregatoast(data.nombre)
        console.log('ENTRE......', data);
        if (data != undefined) {
            this.u = this.pedido.filter(function (c) { return c.id === data.id; });
            if (this.u.length == 0) {
                this.pedido.push(data);
                console.log('precio...', this.precio);
                this.precio = this.precio + data.precio_descuento * data.cantidad;
                this.precio = Math.round(this.precio * 100) / 100;
                this.book = this.book + 1;
                this.storage.set('pedido', this.pedido);
            }
            else {
                this.precio = 0;
                for (this.p in this.pedido) {
                    console.log('precio...', this.pedido[this.p].precio);
                    this.precio = this.pedido[this.p].precio_descuento * this.pedido[this.p].cantidad + this.precio;
                    this.precio = Math.round(this.precio * 100) / 100;
                    //this.storage.set('precio', this.precio)
                }
            }
        }
    };
    VentaPage.prototype.quitacarrito = function (data) {
        this.u = this.pedido.filter(function (c) { return c.id === data.id; });
        console.log('quitando', this.u);
        var index = this.pedido.indexOf(data);
        if (index !== -1) {
            this.pedido.splice(index, 1);
            this.storage.set('pedido', this.pedido);
        }
        if (this.u.length == 1) {
            this.book = this.book - 1;
            this.precio = this.precio - data.precio;
            console.log('pedido', this.pedido);
        }
    };
    VentaPage.prototype.continuar = function () {
        console.log('avanza', this.pedido);
        this.storage.set('pedido', this.pedido);
        this.storage.set('precio', this.precio);
        this.storage.set('precio', this.precio);
        //this.appCtrl.getRootNav().push(UbicacionPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__ubicacion_ubicacion__["a" /* UbicacionPage */], {});
    };
    VentaPage.prototype.reset = function (data) {
        console.log('resetando...', data, this.categoria);
        for (var i = 0; i < this.categoria.length; i++) {
            this.categoria[i]['check'] = true;
        }
        data.check = false;
    };
    VentaPage.prototype.enviasocia = function (data) {
        var creds = JSON.stringify({ categoria: this.pedido, socia: data });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post(this.server.getMyGlobalVar() + 'nuevasocia/', creds, options)
            .subscribe(function (data) {
        });
    };
    VentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-venta',template:/*ion-inline-start:"/home/andy/mylook/src/pages/venta/venta.html"*/'<ion-header >\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>{{cate.nombre}}</ion-title>\n\n\n         <ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                            \' >{{book}}</ion-badge> \n                            \n\n         <ion-buttons end>\n\n\n\n      <button end ion-button (click)="carritoModal()">\n        \n\n\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n    \n\n        \n\n\n    </ion-navbar>\n\n\n    <ion-slides   slidesPerView=5 class=\'carrete\'>\n\n  <ion-slide  *ngFor = \'let c of categoria\' (click)=\'traesubcategorias(c)\'>\n\n    <div style=\'text-align: center;\'>\n    <div *ngIf=\'c.check==true\' (click)=\'reset(c);\' style="\n    height: 61px;\n    font-size: 12px;\n    margin-bottom: 3px;\n    padding: 0px;\n    margin-top: 7px;">\n    <img style=\'border-radius:50%\' src=\'{{host}}{{c.icono}}\'>\n\n    </div>\n\n    <div *ngIf=\'c.check==false\'   style="\n    height: 61px;\n    font-size: 12px;\n    margin-bottom: 3px;\n    padding: 0px;\n    margin-top: 7px;">\n    <img style=\'border-radius:50%\' src=\'{{host}}{{c.icono_seleccionado}}\'>\n\n    </div>\n\n    <span style=\'color:#fff; font-size: 10px;\'> {{c.nombre}} </span>\n\n  </div>\n\n  </ion-slide>\n\n</ion-slides>\n\n \n  </ion-header>\n\n\n<ion-content >\n\n\n\n<div style=\'height: 100px;\'></div>\n<ion-card  class=\'fadeIn\' *ngFor="let item of subcategoria" >\n\n<button *ngIf=\'item.precio_descuento>0\' ion-button color=\'negro\' style="position:absolute;right:12px;" ><span style=\'font-family: "M PLUS Rounded 1c";\'> S/. {{item.precio_descuento.toFixed(2)}}</span></button>\n\n<span *ngIf=\'item.duracion_servicio>0\' class=\'duracion\'>{{item.duracion_servicio}} min</span>\n\n<div *ngIf="item.activar_descuento==true" class=\'descuento\' style=""></div>\n  \n<span *ngIf="item.activar_descuento==true"  class=\'textdescuento\'>{{item.descuento}}%</span>\n  \n  <img  (click)=\'detalleProducto(item)\'   style=\'border-radius: 17px;\' src="{{host}}{{item.photo}}"/>\n\n\n\n</ion-card>\n\n \n <div style=\'height: 50px\'  ></div>\n \n\n\n\n\n\n</ion-content>\n\n  \n<ion-footer *ngIf=\'book>0\'>\n  <ion-toolbar>\n    \n<button class="animated  fadeInUp" ion-button full round color="danger"  style=\'transition: none;\n     color:#fff;\' (click)=\'continuar()\'>\n\n <!-- \n        <ion-col><ion-icon name="cart"></ion-icon></ion-col> -->\n\n        <ion-col><ion-badge  style=\'color: #fff;\n    background-color: #4C4080;\n    position: absolute;\n    border:1px solid #fff;\n    font-size: 11px;\n    left: 55px;\n    top: 18px;\n    padding: 4px 6px;\n    \'>{{book}}</ion-badge> <ion-icon  col-3 style=\'font-size: 29px;color: #fff;\' name="cart"></ion-icon></ion-col>\n        \n        <ion-col col-6 center style=\'color: #fff;\'>PEDIR</ion-col>\n\n        <ion-col col-3><span style=\'margin-top: 4px;\n    position: absolute;\n    right: 23px;font-family: "M PLUS Rounded 1c";color: #fff;\'>S/. {{precio.toFixed(2)}} </span><ion-icon style=\'font-size: 20px;float: right;\' name="ios-arrow-forward"></ion-icon></ion-col>\n      \n     \n \n\n     </button> \n\n  </ion-toolbar>\n</ion-footer>\n\n\n<style type="text/css">\n  \n  .active{\n-webkit-filter: grayscale(100%);  \n filter: grayscale(100%); \n    color:#fff;\n  }\n\n  .desactivo{\n\n    -webkit-filter: grayscale(0%);   \n filter: grayscale(0%);\n\n\n  }\n\n  .textdescuento{\n        position: absolute;\n    padding: 5px;\n    color: #ffffff;\n    z-index: 1500;\n    font-family: \'Varela Round\';\n    font-size: 12px;\n  }\n\n  .descuento{\nposition: absolute;\n    z-index: 1000;\n    width: 0;\n    height: 0;\n    opacity: .9;\n    border-left: 54px solid #f75959;\n    border-top: 0px solid #f75959;\n    border-bottom: 44px solid transparent;\n\n}\n  \n</style>'/*ion-inline-end:"/home/andy/mylook/src/pages/venta/venta.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_categorias_categorias__["a" /* CategoriasProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _p || Object])
    ], VentaPage);
    return VentaPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=venta.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrito_carrito__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detalleproducto_detalleproducto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socias_socias__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagotarjeta_pagotarjeta__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_clipboard__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservaPage = (function () {
    function ReservaPage(clipboard, alertCtrl, server, _perfil, loadingCtrl, _servicio, toastCtrl, spinner, modalCtrl, appCtrl, authHttp, storage, http, navCtrl, navParams, googleMaps) {
        var _this = this;
        this.clipboard = clipboard;
        this.alertCtrl = alertCtrl;
        this.server = server;
        this._perfil = _perfil;
        this.loadingCtrl = loadingCtrl;
        this._servicio = _servicio;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.authHttp = authHttp;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.pedidos = [];
        this.todoservicio = '';
        this.todoser = '';
        this.cliente = {};
        this.precio_promo = null;
        this.muestra = false;
        this.unasocia = true;
        this.host = this.server.getMyGlobalVar();
        this.storage.get('pedido').then(function (val) {
            console.log('entre a pedidos.............', val);
            _this.pedidos = val;
            if (_this.pedidos.length == 1) {
                _this.unasocia = true;
            }
            if (_this.pedidos.length > 1) {
                _this.unasocia = false;
            }
            for (_this.i = 0; _this.i < _this.pedidos.length; _this.i++) {
                _this.todoservicio = _this.todoservicio + ' * ' + _this.pedidos[_this.i].nombre;
                _this.pedidos[_this.i].precio_descuento_item = Math.round(_this.pedidos[_this.i].precio_descuento * _this.pedidos[_this.i].cantidad * 100) / 100;
            }
        });
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.email = data[0]['email'];
            _this.telefono = data[0]['telefono'];
            _this.nombre = data[0]['nombre'];
            console.log('this.telefono=', data);
        });
        function toDate(dStr, format) {
            var now = new Date();
            if (format == "h:m") {
                now.setHours(dStr.substr(0, dStr.indexOf(":")));
                now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
                now.setSeconds(0);
                return now;
            }
            else
                return "Invalid Format";
        }
        function format_time(date_obj) {
            // formats a javascript Date object into a 12h AM/PM time string
            var hour = date_obj.getHours();
            var minute = date_obj.getMinutes();
            var amPM = (hour > 11) ? " pm" : " am";
            if (hour > 12) {
                hour -= 12;
            }
            else if (hour == 0) {
                hour = "12";
            }
            if (minute < 10) {
                minute = "0" + minute;
            }
            return hour + ":" + minute + amPM;
        }
        this.storage.get('ubicacion').then(function (val) {
            _this.ubicacion = val;
        });
        this.storage.get('precio').then(function (val) {
            _this.precio = val;
            _this.precio = Math.round(_this.precio * 100) / 100;
            _this.precio = _this.precio.toFixed(2);
        });
        this.storage.get('dia').then(function (val) {
            _this.dia = val;
        });
        this.storage.get('hora').then(function (val) {
            _this.hora = val;
            _this.hora_1 = format_time(toDate(_this.hora, "h:m"));
        });
        this.storage.get('referencia').then(function (val) {
            _this.referencia = val;
        });
        this.storage.get('tipo').then(function (val) {
            _this.tipo = val;
        });
        this.storage.get('datolugar').then(function (val) {
            _this.datolugar = val;
        });
        this.storage.get('distrito_v1').then(function (val) {
            _this.distrito = val;
        });
        this.spinner.load();
        this.storage.get('token').then(function (val) {
            if (val == null) {
                _this.presentProfileModal();
                _this.spinner.dismiss();
            }
            else {
                var myHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
                myHeader.append('Content-Type', 'application/json');
                _this.data = {
                    'pedido': _this.pedidos,
                    'ubicacion': _this.ubicacion,
                    'dia': _this.dia,
                    'hora': _this.hora,
                    'referencia': _this.referencia,
                    'tipo': _this.tipo,
                    'datolugar': _this.datolugar,
                    'distrito': _this.distrito
                };
                //    this.http.post(this.host+'upload',formData).subscribe(res =>
                //  console.log(res),
                //         err => {
                //           this.agregatoast(err);
                //         });
                _this.authHttp.post(_this.server.getMyGlobalVar() + 'buscasocia/1', _this.data)
                    .subscribe(function (data) {
                    console.log(JSON.parse(data['_body'])[0]['servicio_id']);
                    /// Subiendo fotos
                    for (_this.i = 0; _this.i < _this.pedidos.length; _this.i++) {
                        console.log('subiendo....', _this.pedidos[_this.i]);
                        _this.subir(_this.pedidos[_this.i]['archivo'], _this.pedidos[_this.i]['id'], JSON.parse(data['_body'])[0]['servicio_id']);
                    }
                    _this.estado = 'Pendiente';
                    _this.spinner.dismiss();
                }, function (error) {
                    _this.toastgenerico(error);
                    _this.spinner.dismiss();
                });
            }
        });
    }
    ReservaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pedido').then(function (val) {
            _this.pedido = val;
            _this.book = _this.pedido.length;
            if (_this.book == 0) {
                _this.navCtrl.popToRoot();
            }
        });
    };
    ReservaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._perfil.miperfil()
            .subscribe(function (data) {
            _this.email = data[0]['email'];
            _this.telefono = data[0]['telefono'];
            _this.nombre = data[0]['nombre'];
        });
    };
    ReservaPage.prototype.subir = function (archivo, subcategoria, servicio) {
        var _this = this;
        var formData = new FormData();
        formData.append('photo', archivo);
        formData.append('subcategoria', subcategoria);
        formData.append('servicio', servicio);
        this.http.post(this.host + 'upload', formData).subscribe(function (res) {
            return console.log(res);
        }, function (err) {
            _this.agregatoast(err);
        });
    };
    ReservaPage.prototype.alertaPago = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Como desea pagar?',
            cssClass: 'alertDanger',
            buttons: [
                {
                    cssClass: 'pagos',
                    text: 'Pago en Efectivo',
                    handler: function () {
                        console.log('Cancel clicked');
                        //this.confirmapago()
                        _this.metodopago = 'Efectivo';
                    }
                },
                {
                    cssClass: 'pagos',
                    text: 'Pago con Tarjeta',
                    handler: function () {
                        _this.metodopago = 'Tarjeta';
                        var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pagotarjeta_pagotarjeta__["a" /* PagotarjetaPage */], { servicio: _this.codigo_servicio });
                        profileModal.onDidDismiss(function (data) {
                        });
                        profileModal.present();
                        //this.pagotarjeta(this.codigo_servicio)
                    }
                },
                {
                    cssClass: 'tunki',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.metodopago = 'Tunki';
                        //this.pagotulki()
                    }
                }
            ]
        });
        alert.present();
    };
    ReservaPage.prototype.cupon = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ingrese Cupón',
            cssClass: 'my-class',
            inputs: [
                {
                    name: 'cupon',
                    placeholder: 'Cupón'
                }
            ],
            buttons: [
                {
                    text: 'Ingresar',
                    handler: function (data) {
                        data = _this.sanear(data);
                        console.log(data);
                        _this.codigopromo = data;
                        _this.agregapromo(data, _this.codigo_servicio);
                    }
                }
            ]
        });
        alert.present();
    };
    ReservaPage.prototype.pagofinal = function () {
        console.log(this.metodopago);
        if (this.metodopago == 'Tunki') {
            this.pagotulki();
        }
        if (this.metodopago == 'Efectivo') {
            this.pagarenefectivo();
        }
        if (this.metodopago == 'Tarjeta') {
            if (this.descuento == undefined) {
                this.pagotarjeta(this.codigo_servicio);
            }
            else {
                this.agregatoast('Los cupones solo estan disponibles con pagos en efectivo, cambiar a Pago en Efectivo');
            }
        }
        if (this.metodopago == undefined) {
            this.agregatoast('Porfavor agrege un metodo de pago');
        }
        //this.confirmapago()
        //this.metodopago='Efectivo'
        //this.pagotarjeta(this.codigo_servicio)
        //this.pagotulki()
    };
    ReservaPage.prototype.sanear = function (e) {
        var cadena = e['cupon'];
        console.log(e);
        return cadena.toUpperCase().replace(" ", "");
    };
    ReservaPage.prototype.onSelectChange = function (selectedValue) {
        console.log('Selected', selectedValue);
        if (selectedValue == 'Tarjeta') {
            var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pagotarjeta_pagotarjeta__["a" /* PagotarjetaPage */], { servicio: this.codigo_servicio });
            profileModal.onDidDismiss(function (data) {
            });
            profileModal.present();
        }
    };
    ReservaPage.prototype.pagotarjeta = function (data) {
        var _this = this;
        this._servicio.detalleservicio(this.id_servicio)
            .subscribe(function (data) {
            console.log('servicio...', data[0]['descuento'], data[0]['precio']);
            _this.precio = data[0]['precio'];
            _this.descuento = data[0]['descuento'];
            _this.total = _this.precio - _this.descuento;
            _this.total = _this.total * 100;
        });
        this.spinner.load();
        this.headers = { 'Content-type': 'application/json', 'Authorization': 'Bearer pk_test_BNfs2kwazeK2JRAl' };
        this.headers_cargo = { 'Content-type': 'application/json', 'Authorization': 'Bearer sk_test_Frd66tovy3zo6hAk' };
        data = {
            "card_number": "4111111111111111",
            "cvv": "123",
            "expiration_month": "09",
            "expiration_year": "2020",
            "email": "carlos@gmail.com"
        };
        this.url = 'https://api.culqi.com/v2/tokens';
        this.url_cargo = 'https://api.culqi.com/v2/charges';
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.headers)
        });
        var options_cargo = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](this.headers_cargo)
        });
        var creds = JSON.stringify(data);
        this.http.post(this.url, creds, options)
            .subscribe(function (data) {
            _this.token = JSON.parse(data['_body'])['id'];
            _this.agregatoast('Estamos procesando tu pago');
            ///Creando cargo
            _this.data_cargo = {
                "amount": _this.total,
                "currency_code": "PEN",
                "email": "carlos@gmail.com",
                "source_id": _this.token
            };
            var cargo = JSON.stringify(_this.data_cargo);
            _this.http.post(_this.url_cargo, cargo, options_cargo)
                .subscribe(function (data) {
                _this.agregatoast('Conectando y sincronizando los servicios');
                _this._servicio.pagarenefectivo(_this.id_servicio)
                    .subscribe(function (data) {
                    _this.navCtrl.popToRoot();
                    _this.storage.remove('pedido');
                    _this.agregatoast('Felicidades, se completo tu pago');
                    _this.spinner.dismiss();
                }, function (error) {
                    _this.agregatoast(error._body);
                    _this.spinner.dismiss();
                });
            }, function (error) {
                _this.agregatoast(error._body);
                _this.spinner.dismiss();
            });
        }, function (error) {
            _this.agregatoast(error._body);
            _this.spinner.dismiss();
        });
    };
    ReservaPage.prototype.agregatoast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000,
            position: 'top',
        });
        toast.present();
    };
    ReservaPage.prototype.detalleModal = function (data) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__detalleproducto_detalleproducto__["a" /* DetalleproductoPage */], { producto: data });
        profileModal.onDidDismiss(function (data) {
        });
        profileModal.present();
    };
    ReservaPage.prototype.tunki = function (data) {
        this.clipboard.copy('910759770');
        this.toastgenerico('Se copio Tunky');
    };
    ReservaPage.prototype.yape = function (data) {
        this.clipboard.copy('910759770');
        this.toastgenerico('Se copio Yape');
    };
    ReservaPage.prototype.toastgenerico = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000
        });
        toast.present();
    };
    ReservaPage.prototype.agregapromo = function (promo, codigo_servicio) {
        var _this = this;
        console.log('promo', promo);
        if (promo) {
            this.spinner.load();
            this._servicio.promo(promo, this.id_servicio)
                .subscribe(function (data) {
                console.log(data);
                _this.toastgenerico(data);
                _this.spinner.dismiss();
                _this._servicio.detalleservicio(_this.id_servicio)
                    .subscribe(function (data) {
                    console.log('data...', data);
                    _this.precio = data[0]['precio_promo'];
                    _this.descuento = data[0]['descuento'];
                });
            }, function (error) {
                _this.toastgenerico('Código no valido');
            });
        }
        else {
            this.toastgenerico('Ingrese codigo promocional para que recibas un descuento');
        }
    };
    ReservaPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */], { userId: 8675309 });
        profileModal.present();
    };
    ReservaPage.prototype.sociasModal = function (pedido, _socia_detalle) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__socias_socias__["a" /* SociasPage */], { pedido: pedido, _socia_detalle: _socia_detalle });
        profileModal.present();
    };
    ReservaPage.prototype.carritoModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__carrito_carrito__["a" /* CarritoPage */], { carrito: this.pedido });
        profileModal.onDidDismiss(function (data) {
            console.log('reserva dismiss carrito', data);
            _this.pedidos = data.pedido;
            if (_this.book.pedido) {
                _this.book = data.pedido.length;
            }
            _this.precio = 0;
            for (_this.p in _this.pedidos) {
                console.log('precio...', _this.pedido[_this.p].precio);
                _this.precio = _this.pedidos[_this.p].precio_descuento * _this.pedidos[_this.p].cantidad + _this.precio;
                _this.precio = Math.round(_this.precio * 100) / 100;
                _this.pedidos[_this.p].precio_descuento_item = Math.round(_this.pedidos[_this.p].precio_descuento * _this.pedidos[_this.p].cantidad * 100) / 100;
                _this.storage.set('precio', _this.precio);
            }
            if (_this.book == 0) {
                console.log('rooott...');
                _this.navCtrl.popToRoot();
            }
        });
        profileModal.present();
    };
    ReservaPage.prototype.pagar = function () {
        //this.presentProfileModal()
        //this.navCtrl.popToRoot();
        //window.open('https://mylookxpress.com/culqui.php?precio='+this.precio+'&codigo='+this.codigo_servicio+'&nombre='+this.nombre+'&pedidos='+this.todoser)
    };
    ReservaPage.prototype.quitacarrito = function (data) {
        var index = this.pedidos.indexOf(data);
        if (index !== -1) {
            this.precio = this.precio - this.pedidos[index].precio;
            this.precio = Math.round(this.precio * 100) / 100;
            this.pedidos.splice(index, 1);
        }
    };
    ReservaPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Excelente ! hemos completado tu solicitud, en breve te contactaremos con nuestra socia',
            duration: 4000
        });
        toast.present();
    };
    ReservaPage.prototype.pagotarjetaToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Esta opcion se habilitara dentro de 1 semana',
            duration: 4000
        });
        toast.present();
    };
    ReservaPage.prototype.pagoenefectivoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Esta opcion se habilitara dentro de 1 semana',
            duration: 4000
        });
        toast.present();
    };
    ReservaPage.prototype.pagarefectivoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Actualizamos para el pago en efectivo, Gracias',
            duration: 4000
        });
        toast.present();
    };
    ReservaPage.prototype.confirmapago_v2 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Gracias por tu preferencia, en breve nuestro personal se pondra en contacto con usted',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        //this.actualiza(this.nombre,this.email,data.telefono)
                        _this.pagarefectivoToast();
                        _this.pagarenefectivo();
                        _this.storage.remove('pedido');
                    }
                }
            ]
        });
        alert.present();
    };
    ReservaPage.prototype.confirmapago = function () {
        // this.pagarefectivoToast() 
        //this.presentLoadingDefault()
        this.pagarenefectivo();
    };
    ReservaPage.prototype.sacatelefono = function () {
        var _this = this;
        console.log('sacatelefono...', this.telefono, '8888');
        if (this.telefono == null || this.telefono == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'A que celular podemos comunicarnos?',
                inputs: [
                    {
                        name: 'telefono',
                        placeholder: 'Telefono'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Enviar',
                        handler: function (data) {
                            _this.actualiza(_this.nombre, _this.email, data.telefono);
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.aceptar();
        }
    };
    ReservaPage.prototype.actualiza = function (nombre, email, telefono) {
        var _this = this;
        this.cliente.nombre = nombre;
        this.cliente.email = email;
        this.cliente.telefono = telefono;
        this._perfil.actualiza(this.cliente)
            .subscribe(function (data) {
            _this.aceptar();
        });
    };
    ReservaPage.prototype.aceptar = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Estamos procesando tu pedido.',
        });
        this.spinner.load();
        loader.present().then(function () {
            _this._servicio.aceptaservicio(_this.id_servicio)
                .subscribe(function (data) {
                _this._servicio.detalleservicio(_this.id_servicio)
                    .subscribe(function (data) {
                    _this.estado = data[0]['estado__nombre'];
                    console.log('estado', _this.estado);
                });
                _this.navCtrl.popToRoot();
                _this.storage.set('newservice', 1);
                _this.spinner.dismiss();
                _this.presentToast();
            });
            loader.dismiss();
        });
    };
    ReservaPage.prototype.iralmenu = function () {
        this.navCtrl.popToRoot();
    };
    ReservaPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Gracias por su preferencia, Estamos procesando tu pedido.',
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    ReservaPage.prototype.pagarenefectivo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Gracias por su preferencia, Estamos procesando tu pedido.',
            duration: 50000
        });
        //this.spinner.load();
        loader.present().then(function () {
            console.log('service...', _this.id_servicio);
            _this._servicio.pagarenefectivo(_this.id_servicio)
                .subscribe(function (data) {
                _this.refresca(_this.id_servicio);
                _this.storage.remove('pedido');
                _this.navCtrl.popToRoot();
            });
            setTimeout(function () {
                loader.dismiss();
            }, 3000);
        });
    };
    ReservaPage.prototype.pagotulki = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Pago Tulki. No te olvides enviarnos tu constancia de pago por Whatsapp.',
            duration: 50000
        });
        loader.present().then(function () {
            _this._servicio.pagotulki(_this.id_servicio)
                .subscribe(function (data) {
                _this._servicio.pagarenefectivo(_this.id_servicio)
                    .subscribe(function (data) {
                    _this.navCtrl.popToRoot();
                    _this.storage.remove('pedido');
                    _this.agregatoast('Felicidades, se completo tu pedido');
                    _this.spinner.dismiss();
                }, function (error) {
                    _this.agregatoast(error._body);
                    _this.spinner.dismiss();
                });
            });
            setTimeout(function () {
                loader.dismiss();
            }, 3000);
        });
    };
    ReservaPage.prototype.refresca = function (id_servicio) {
        var _this = this;
        this._servicio.detalleservicio(id_servicio).subscribe(function (data) { _this.estado = data[0]['estado__nombre']; });
        //this.navCtrl.popToRoot();
        this.storage.set('newservice', 1);
        this.presentToast();
    };
    ReservaPage.prototype.pagoyape = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Pago Yape',
            duration: 50000
        });
        //this.spinner.load();
        loader.present().then(function () {
            _this._servicio.pagoyape(_this.id_servicio)
                .subscribe(function (data) {
                _this.refresca(_this.id_servicio);
                _this.storage.remove('pedido');
            });
            setTimeout(function () {
                loader.dismiss();
            }, 3000);
        });
    };
    ReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reserva',template:/*ion-inline-start:"/home/andy/mylook/src/pages/reserva/reserva.html"*/'\n\n<!-- <ion-nav [root]="rootPage"></ion-nav>\n\n -->\n\n<!-- 	<ion-list style=\'margin-top: 72px;\n    padding: 15px;\'>\n\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>Que dia y aque hora quieres el servicio?</div>\n</div>\n\n  <ion-item>\n  <ion-label>Date</ion-label>\n  <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n\n\n <div class="spacer" style="height:20px;"></div>\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>En donde deseas el servicio?</div>\n</div>\n\n\n</ion-list> -->\n\n\n<ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>Resumen </ion-title>\n\n\n           \n<!-- <ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                            \'>{{book}}</ion-badge> \n                           \n\n  <ion-buttons end>\n      <button end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n<<<<<<< HEAD\n      -->\n\n\n\n    </ion-navbar>\n  </ion-header>\n\n\n\n<ion-content >\n\n\n\n\n<ion-list>\n\n\n\n\n  <ion-item *ngIf=\'unasocia\'><h3><strong>La Stiler que te atendera sera: </strong></h3></ion-item>\n\n  <ion-item *ngIf=\'!unasocia\'><h3><strong>Las Stilers que te atendera seran: </strong></h3></ion-item>\n   \n\n  <ion-item ion-item *ngFor="let item of pedidos" >\n\n     <ion-thumbnail item-start>\n      <img style=\'border-radius:50%;\' src=\'{{host}}{{item.escogido.socia__photo}}\'>\n    </ion-thumbnail>\n\n    <ion-row>\n\n\n      <h6>{{item.escogido.socia__nombre}}</h6>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n    <span> {{item.cantidad}} {{item.nombre | slice:0:25}} </span>\n     </ion-row>\n    \n     <ion-row>\n\n\n</ion-row>\n  </ion-item>\n\n\n  <ion-item>\n<ion-label><ion-icon name="pin" style=\'padding-right: 3px;padding-top: 2px;\'></ion-icon> Direccion</ion-label>\n<ion-textarea  name="promo"  type="text" [(ngModel)]="referencia" class=\'_numero\' ></ion-textarea>\n</ion-item>\n\n\n <ion-item *ngIf=\'tipo\'>\n   \n   Lugar\n\n   <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\'> {{tipo}}</span>\n   \n</ion-item> \n\n\n <ion-item *ngIf=\'datolugar\'>\n   \n   Nro\n\n   <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;\'> {{datolugar}}</span>\n   \n</ion-item> \n\n\n<ion-item (click)=\'alertaPago()\'>\n  \n<ion-icon name="card"></ion-icon>\n   Método de Pago <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px !important;\' class="_numero"> {{metodopago}} </span>\n\n</ion-item>\n\n<ion-item (click)=\'cupon()\'>\n  \n <ion-icon name="pricetag"></ion-icon>\n    Ingrese Cupón <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px !important;\' class="_numero"> {{codigopromo}} </span>\n\n</ion-item>\n\n\n\n\n\n<!-- <button  ion-button color="light" (click)=\'agregapromo(promo,codigo_servicio)\'><ion-icon name="pricetag"></ion-icon></button> -->\n\n\n\n<ion-item>\n<strong>Resumen</strong>\n</ion-item>\n\n\n\n\n<ion-item  *ngFor="let item of pedidos">\n  \n \n   {{item.cantidad}} {{item.nombre | slice:0:25}} <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px !important;\' class="_numero">S/. {{item.precio.toFixed(2)}} </span>\n\n</ion-item>\n\n<ion-item *ngIf=\'descuento\'>\n  \n   Descuento <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px !important;\' class="_numero">S/. {{descuento.toFixed(2)}} </span>\n\n</ion-item>\n\n\n<ion-item >\n  \n  <ion-icon name="cash"></ion-icon>\n   Total a pagar  <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px !important;\' class="_numero">S/. {{precio}} </span>\n\n\n</ion-item>\n\n\n\n\n\n\n<ion-item >\n\n   \n  <ion-icon name="calendar" style=\'padding-right: 4px;\' ></ion-icon><span> Fecha: </span>\n\n   <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;font-family: "M PLUS Rounded 1c" !important;\'>{{dia}} </span>\n \n</ion-item>\n\n<ion-item>\n   \n   <ion-icon name="time" style=\'padding-right: 4px;\'></ion-icon> <span>Hora: </span>\n\n   <span style=\'float: right;\n    margin-right: -30px;\n    position: absolute;\n    right: 48px;font-family: "M PLUS Rounded 1c" !important;\'> {{hora_1}}</span>\n   \n</ion-item>\n\n\n\n\n\n\n\n\n\n\n\n<div style=\'height: 20px\'></div>\n</ion-list>\n\n\n\n\n\n<!-- <button block ion-button color="white" round (click)=\'pagar()\'>Pagar</button>\n -->\n\n\n\n\n<ion-fab left bottom>\n    <button ion-fab color="dark"><ion-icon name="call"></ion-icon></button>\n    <ion-fab-list side="right">\n    \n        <button  ion-fab round style=\'background: #25d366;\'><a style=\'color: #fff;\n    text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola%20soy%20{{nombre}}%20me%20gustaría%20reservar%20una%20cita%20para%20el%20{{dia}}%20a%20las%20{{hora}}%20{{todoservicio}}%20code:#%20{{codigo_servicio}}">  <ion-icon name="logo-whatsapp" style=\'color: #fff; padding-top: 20px;\'></ion-icon></a></button>\n\n\n  <button ion-fab round color="light"><a style=\'text-decoration: none;color: #fff; padding-top: 10px;\' href="tel:+910759370">  <ion-icon name="call" style=\'color: #fff;\'></ion-icon></a></button>\n  \n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content> \n\n\n<ion-footer>\n\n\n  <!--   <ion-row>\n\n    <ion-col  col-1>\n   <ion-icon *ngIf=\'muestra\' class=\'info\' name=\'close\' (click)=\'muestra=false\'></ion-icon>\n\n   <ion-icon *ngIf=\'!muestra\' class=\'info\' name=\'logo-whatsapp\' (click)=\'muestra=true\'></ion-icon>\n\n </ion-col>\n\n  <ion-col col-11 *ngIf=\'muestra\' style=\'text-align: center;\'>\n\n    <button  ion-button round style=\'background: #25d366;\'><a style=\'color: #fff;\n    text-decoration: none;\' href="https://api.whatsapp.com/send?phone=51910759370&text=Hola%20soy%20{{nombre}}%20me%20gustaría%20reservar%20una%20cita%20para%20el%20{{dia}}%20a%20las%20{{hora}}%20{{todoservicio}}%20code:#%20{{codigo_servicio}}"> Whatsapp <ion-icon name="logo-whatsapp" style=\'color: #fff;\'></ion-icon></a></button>\n\n\n  <button ion-button round color="light"><a style=\'text-decoration: none;color: #fff;\' href="tel:+910759370"> Llamar <ion-icon name="call" style=\'color: #fff;\'></ion-icon></a></button>\n  \n</ion-col>\n\n  </ion-row> -->\n \n\n    <ion-toolbar style=\'text-align: center;\'>\n  \n\n  \n<button   ion-button round full color="light" round (click)=\'pagofinal()\'>Pagar</button>\n\n\n\n  </ion-toolbar>\n</ion-footer>\n \n \n<!-- <mytabs></mytabs>\n -->'/*ion-inline-end:"/home/andy/mylook/src/pages/reserva/reserva.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_15__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_16__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_15__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_12__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_11__providers_spinner_spinner__["a" /* SpinnerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], ReservaPage);
    return ReservaPage;
}());

//# sourceMappingURL=reserva.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_map_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reserva_reserva__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_servicios_servicios__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertaPage = (function () {
    function AlertaPage(view, server, authHttp, _servicio, storage, navCtrl, geolocation, zone, platform, localStorage, mapService, spinner, viewCtrl, navParams) {
        this.view = view;
        this.server = server;
        this.authHttp = authHttp;
        this._servicio = _servicio;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.addressElement = null;
        this.address = '';
        this.reservaPage = __WEBPACK_IMPORTED_MODULE_7__reserva_reserva__["a" /* ReservaPage */];
        this.host = this.server.getMyGlobalVar();
    }
    AlertaPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlertaPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlertaPage.prototype, "searchbar", void 0);
    AlertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alerta',template:/*ion-inline-start:"/home/andy/mylook/src/pages/alerta/alerta.html"*/'<ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title> STYLO </ion-title>\n\n    <ion-buttons start="" (click)=\'closeModal()\' class="bar-buttons bar-buttons-ios">\n      <button ion-button="" class="disable-hover bar-button bar-button-ios bar-button-default bar-button-default-ios"><span class="button-inner" >Cerrar</span><div class="button-effect"></div></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n<img src="http://estokealo.com:8000/static/imagen.png">\n     \n\n   \n\n<!-- \n <video  width=\'100%\' controls autoplay>\n  <source src="assets/video.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\nYour browser does not support the video tag.\n</video> \n\n -->\n\n\n\n  \n  \n\n</ion-content>'/*ion-inline-end:"/home/andy/mylook/src/pages/alerta/alerta.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_9__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_9__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_8__providers_servicios_servicios__["a" /* ServiciosProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AlertaPage);
    return AlertaPage;
}());

//# sourceMappingURL=alerta.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reserva_reserva__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registro_registro__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_carrito_carrito__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_categorias_categorias__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UbicacionPage = (function () {
    function UbicacionPage(_categoria, server, storage, navCtrl, geolocation, zone, platform, localStorage, mapService, spinner, viewCtrl, alertCtrl, appCtrl, http, navParams, toastCtrl, modalCtrl) {
        var _this = this;
        this._categoria = _categoria;
        this.server = server;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.addressElement = null;
        this.address = '';
        _categoria.getdistritos().subscribe(function (data) {
            console.log('distritos...', data);
            _this.distritos = data;
        });
        this.monthNames = ['ene', '3', '3', 'ene', '3', '3', 'ene', '3', '3', 'ene', '3', '3'];
        this.columna_1 = 'col-10';
        this.reservaPage = __WEBPACK_IMPORTED_MODULE_8__reserva_reserva__["a" /* ReservaPage */];
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.today = new Date();
        this.anio = String(this.today).split(" ")[3];
        this.mes = String(this.today).split(" ")[1];
        this.dia = String(this.today).split(" ")[2];
        console.log('mes....', this.mes);
        if (this.mes == 'Jan') {
            this.mes = '01';
        }
        if (this.mes == 'Feb') {
            this.mes = '02';
        }
        if (this.mes == 'Mar') {
            this.mes = '03';
        }
        if (this.mes == 'Apr') {
            this.mes = '04';
        }
        if (this.mes == 'May') {
            this.mes = '05';
        }
        if (this.mes == 'Jun') {
            this.mes = '06';
        }
        if (this.mes == 'Jul') {
            this.mes = '07';
        }
        if (this.mes == 'Aug') {
            this.mes = '08';
        }
        if (this.mes == 'Sep') {
            this.mes = '09';
        }
        if (this.mes == 'Oct') {
            this.mes = '10';
        }
        if (this.mes == 'Nov') {
            this.mes = '11';
        }
        if (this.mes == 'Dec') {
            this.mes = '12';
        }
        this.today = this.anio + '-' + this.mes + '-' + this.dia;
        console.log('hoy....', this.today);
    }
    UbicacionPage_1 = UbicacionPage;
    UbicacionPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: 'Stilo',
            subTitle: 'Porfavor ingrese ' + data,
            buttons: ['OK']
        });
        alert.present();
    };
    UbicacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.ubicacion = 'jsjsjsj';
    };
    UbicacionPage.prototype.sacatelefono = function (dia, hora, ubicacion, referencia) {
        ///Registra///
        var _this = this;
        this.storage.get('telefono').then(function (val) {
            console.log('token', val);
            if (val == null) {
                var alert = _this.alertCtrl.create({
                    title: 'A que celular podemos comunicarnos?',
                    inputs: [
                        {
                            name: 'telefono',
                            placeholder: 'Telefono'
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function (data) {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Enviar',
                            handler: function (data) {
                                _this.storage.set('telefono', data.telefono);
                                //this.actualiza(this.nombre,this.email,data.telefono)
                                // this.reserva(dia,hora,ubicacion,referencia) 
                            }
                        }
                    ]
                });
                alert.present();
            }
            else {
                // this.reserva(dia,hora,ubicacion,referencia)
            }
        });
    };
    UbicacionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pedido').then(function (val) {
            _this.pedido = val;
            _this.book = _this.pedido.length;
        });
        this.storage.get('ubicacion').then(function (val) {
            _this.ubicacion = val;
        });
    };
    UbicacionPage.prototype.carritoModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_carrito_carrito__["a" /* CarritoPage */], { carrito: this.pedido });
        profileModal.onDidDismiss(function (data) {
            if (data.nivel == 'ubicacion') {
                _this.navCtrl.push(UbicacionPage_1, {});
            }
            console.log('oooo', data);
            if (data.pedido) {
                _this.book = data.pedido.length;
            }
            _this.precio = 0;
            for (_this.p in _this.pedido) {
                console.log('precio...', _this.pedido[_this.p].precio);
                _this.precio = _this.pedido[_this.p].precio + _this.precio;
            }
        });
        profileModal.present();
    };
    UbicacionPage.prototype.iralmenu = function () {
        this.navCtrl.popToRoot();
    };
    UbicacionPage.prototype.toastgenerico = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    UbicacionPage.prototype.horarioservicio = function () {
        console.log('enviando,,,,,');
        this.toastgenerico('Nuestro horario de atención es de 08:30 AM a 08:30 PM');
    };
    UbicacionPage.prototype.agregatoast = function () {
        var toast = this.toastCtrl.create({
            message: 'Arrastra el mapa para indicarnos donde te encuentras',
            duration: 4000
        });
        toast.present();
    };
    UbicacionPage.prototype.toast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000
        });
        toast.present();
    };
    UbicacionPage.prototype.cargandomapa = function () {
        var toast = this.toastCtrl.create({
            message: 'Estamos localizandote para llegar hacia ti',
            duration: 4000
        });
        toast.present();
    };
    UbicacionPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    UbicacionPage.prototype.initializeMap = function () {
        var _this = this;
        var that = this;
        that.currentLocation();
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 16,
                center: { lat: -12.971599, lng: -77.594563 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: true,
            });
            // Map drag started
            _this.map.addListener('dragstart', function () {
                console.log('Drag start');
            });
            // Map dragging
            _this.map.addListener('drag', function () {
                that.address = 'Searching...';
            });
            //Reload markers every time the map moves
            _this.map.addListener('dragend', function () {
                var map_center = that.getMapCenter();
                var latLngObj = { 'lat': map_center.lat(), 'long': map_center.lng() };
                that.ubicacion = latLngObj;
                that.getAddress(latLngObj);
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                google.maps.event.trigger(_this.map, 'resize');
                mapEle.classList.add('show-map');
            });
            google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                _this.zone.run(function () {
                    _this.resizeMap();
                });
            });
        });
    };
    UbicacionPage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var latLngObj = { 'lat': location.lat(), 'long': location.lng() };
            _this.getAddress(latLngObj);
            _this.ubicacion = latLngObj;
            var options = {
                center: location,
                zoom: 16
            };
            _this.map.setOptions(options);
        });
    };
    UbicacionPage.prototype.showAlertlocaliza = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Permiso',
            subTitle: 'Requerimos tu ubicación para poder atenderte, y brindarte un mejor servicio',
            cssClass: 'alertCustomCss',
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                        _this.loadMaps();
                    }
                }]
        });
        alert.present();
    };
    UbicacionPage.prototype.currentLocation = function () {
        //this.spinner.load();
        var _this = this;
        this.cargandomapa();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latLngObj = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
            // Display  Marker
            _this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            //alert(latLngObj)
            //this.storage.set('ubicacion', latLngObj)
            // this.storage.get('distrito').then((val) => { console.log('actual distrito',val)
            //   console.log('return...',this.sacaactualdistrito(val))
            // })
            _this.ubicacion = latLngObj;
            _this.getAddress(latLngObj);
            //this.spinner.dismiss();
            _this.agregatoast();
            localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
            return latLngObj;
        }, function (err) {
            console.log(err);
        });
    };
    UbicacionPage.prototype.getAddress = function (latLngObj) {
        var _this = this;
        // Get the address object based on latLngObj
        this.mapService.getStreetAddress(latLngObj).subscribe(function (s_address) {
            if (s_address.status == "ZERO_RESULTS") {
                _this.mapService.getAddress(latLngObj).subscribe(function (address) {
                    _this.address = address.results[0].formatted_address;
                    _this.getAddressComponentByPlace(address.results[0], latLngObj);
                }, function (err) { return console.log("Error in getting the street address " + err); });
            }
            else {
                console.log('ingrese.....', s_address);
                _this.address = s_address.results[0].formatted_address;
                _this.referencia = s_address.results[0].formatted_address;
                for (var d in _this.distritos) {
                    var n = _this.referencia.search(_this.distritos[d]['nombre']);
                    if (n != -1) {
                        _this.distrito = _this.distritos[d];
                    }
                }
                console.log('que paso,..', n);
                _this.getAddressComponentByPlace(s_address.results[0], latLngObj);
                //alert(latLngObj)
                //this.storage.set('ubicacion', latLngObj)
                //alert(this.address);
            }
        }, function (err) {
            //alert('No Address found ' + err);
        });
    };
    UbicacionPage.prototype.getMapCenter = function () {
        return this.map.getCenter();
    };
    UbicacionPage.prototype.createAutocomplete = function (addressEl) {
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    var latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() };
                    //this.getAddress(latLngObj);
                    sub.next(place.geometry.location);
                }
            });
        });
    };
    UbicacionPage.prototype.getAddressComponentByPlace = function (place, latLngObj) {
        var components;
        components = {};
        for (var i = 0; i < place.address_components.length; i++) {
            var ac = place.address_components[i];
            components[ac.types[0]] = ac.long_name;
        }
        var addressObj = {
            street: (components.street_number) ? components.street_number : 'not found',
            area: components.route,
            city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
            country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
            postCode: components.postal_code,
            loc: [latLngObj.long, latLngObj.lat],
            address: this.address
        };
        localStorage.clear();
        localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
        return components;
    };
    UbicacionPage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    UbicacionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    UbicacionPage.prototype.errorAlert = function (title, message) {
        alert('Error in Alert');
    };
    UbicacionPage.prototype.reserva = function (dia, hora, ubicacion, referencia, tipo, datolugar, distrito) {
        var _this = this;
        if (!hora) {
            this.showAlert('la hora');
        }
        if (!distrito) {
            this.showAlert('el distrito');
        }
        if (!dia) {
            this.showAlert('el dia');
        }
        if (dia.length < 3) {
            this.showAlert('el dia');
        }
        if (!referencia) {
            this.showAlert('una direccion');
        }
        if (dia && hora && referencia && distrito && dia.length > 2) {
            this.storage.set('dia', dia);
            this.storage.set('hora', hora);
            this.storage.set('ubicacion', ubicacion);
            this.storage.set('referencia', referencia);
            this.storage.set('tipo', tipo);
            this.storage.set('datolugar', datolugar);
            this.storage.set('distrito_v1', distrito);
            ///Registra///
            this.storage.get('token').then(function (val) {
                console.log('token', val);
                if (val == null) {
                    console.log('nullll');
                    _this.presentProfileModal();
                    _this.spinner.dismiss();
                }
                else {
                    //this.appCtrl.getRootNav().push(ReservaPage);
                    if (hora > '08:00' && hora < '20:00') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__reserva_reserva__["a" /* ReservaPage */], {});
                    }
                    else {
                        _this.toast('Modifique el horario, Nuestro horario de atención es de 08:30 AM a 08:30 PM');
                    }
                }
            });
        }
    };
    UbicacionPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_registro_registro__["a" /* RegistroPage */], { userId: 8675309 });
        profileModal.present();
    };
    UbicacionPage.prototype.sacaactualdistrito = function (ubicacion) {
        var _this = this;
        var creds = JSON.stringify({ ubicacion: ubicacion });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post(this.server.getMyGlobalVar() + 'infodistrito/', creds, options)
            .subscribe(function (data) {
            _this.lat = JSON.parse(data['_body'])[0]['latitud'];
            _this.lon = JSON.parse(data['_body'])[0]['longitud'];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], UbicacionPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], UbicacionPage.prototype, "searchbar", void 0);
    UbicacionPage = UbicacionPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ubicacion',template:/*ion-inline-start:"/home/andy/mylook/src/pages/ubicacion/ubicacion.html"*/'\n\n<ion-header>\n    <ion-navbar color=\'dark\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n      <ion-title>Dónde y cuándo </ion-title>\n\n      \n<ion-badge (click)="carritoModal()" *ngIf=\'book>0\' style=\'color: #fff;\n                            background-color: #4C4080;\n                            position: absolute;\n                            font-size: 11px;\n                            right: 5px;\n                            top: 25px;\n                            padding: 4px 6px;\n                            z-index:2000;\n                            \'>{{book}}</ion-badge> \n                            \n     \n      <ion-buttons end>\n      <button end ion-button (click)="carritoModal()">\n        <ion-icon style=\'font-size: 2.2em;\' name="cart"></ion-icon>\n      </button>\n    </ion-buttons> \n\n\n    \n\n        \n\n\n    </ion-navbar>\n  </ion-header>\n\n\n\n<ion-content>\n\n <ion-buttons float-end class="current-location">\n    <button ion-button icon-only (click)="currentLocation()">\n      <img src="./assets/icon/current-location.png" alt="">\n    </button>\n  </ion-buttons>\n\n  <ion-searchbar autocorrect="off" autocapitalize="off" spellcheck="off" #searchbar placeholder="Buscar" class="search-box"></ion-searchbar>\n\n  <div #map id="map" class="map"></div>\n  <div class="centerMarker"></div>\n  <!-- <div class="address-view">\n    <ion-list>\n      <ion-item no-lines class="help-text">\n        \n      </ion-item>\n       \n\n     \n    </ion-list>\n  </div> -->\n\n\n    \n\n          <ion-item>\n            <ion-label>Elige el día</ion-label>\n          \n           <ion-datetime name="dia"  style=\'font-family: "M PLUS Rounded 1c";\' displayFormat="DDDD, D MMM  YYYY"  monthValues=\'1,2,3,4,5,6,7,8,9,10,11,12\' cancelText=\'Cerrar\' doneText=\'Aplicar\'  [(ngModel)]="dia" max="2019-12-31" min=\'{{today}}\'></ion-datetime>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>A qué hora ?</ion-label>\n            <ion-datetime name="hora"  (click)=\'horarioservicio()\' displayFormat="hh:mm a"  cancelText=\'Cerrar\' pickerFormat="hh:mm a"  doneText=\'Aplicar\' [(ngModel)]="hora" hourValues="01,02,03,04,05,06,07,08,09,10,11,12 "></ion-datetime>\n          </ion-item>\n\n            <ion-item>\n            <ion-label>Distrito</ion-label>\n            <ion-select    id="loginField" type="text" required name=\'distrito\'  [(ngModel)] = "distrito" interface="popover">\n            <ion-option *ngFor="let d of distritos" [value]="d">{{d.nombre}}</ion-option>\n\n            </ion-select>\n            </ion-item>\n\n          \n          <ion-item>\n           <ion-label>Dirección</ion-label>\n            <ion-textarea [attr.rows]="2" name="direccion"  type="text" [(ngModel)]="referencia"  ></ion-textarea>\n          </ion-item>\n\n\n          <ion-row>\n\n          <ion-col col-8 style=\'padding: 0px;\'>\n           <ion-item>\n\n          <ion-label>Lugar</ion-label>\n          <ion-select name="tipo"  [(ngModel)]="tipo" interface="popover">\n            <ion-option value="casa">Casa</ion-option>\n            <ion-option value="departamento">Dpto</ion-option>\n            <ion-option value="oficina">Oficina</ion-option>\n          </ion-select>\n\n\n\n          <!-- <ion-input *ngIf=\'datolugar\' type=\'number\' placecolder=\'Nro\'></ion-input>\n -->\n      \n          </ion-item>\n\n          </ion-col>\n\n          <ion-col col-4  style=\'padding: 0px;\'>\n\n            <ion-item>\n\n          <ion-input  name=\'datolugar\' [(ngModel)]="datolugar" type=\'text\' placeholder=\'Nro\'></ion-input>\n\n        </ion-item>\n \n          </ion-col>\n\n         </ion-row>\n \n\n      \n\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar>\n<button  ion-button  block round color="light"  (click)=\'reserva(dia,hora,ubicacion,referencia,tipo,datolugar,distrito)\'    >Continuar</button>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n<!-- \n\n<mytabs></mytabs>\n -->'/*ion-inline-end:"/home/andy/mylook/src/pages/ubicacion/ubicacion.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__providers_categorias_categorias__["a" /* CategoriasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_categorias_categorias__["a" /* CategoriasProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_server_server__["a" /* ServerProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__providers_map_map__["a" /* MapProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_map_map__["a" /* MapProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__["a" /* SpinnerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__["a" /* SpinnerProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _u || Object])
    ], UbicacionPage);
    return UbicacionPage;
    var UbicacionPage_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroprincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registrofinal_registrofinal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_server_server__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terminos_terminos__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
// import { SocialUser } from "angular4-social-login";
// import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroprincipalPage = (function () {
    //@ViewChild('myInput') myInput
    function RegistroprincipalPage(nav, modalCtrl, server, toastCtrl, fb, storage, _perfil, alertCtrl, view, formBuilder, appCtrl, http, navCtrl, navParams) {
        //Telefono
        var _this = this;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.server = server;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.storage = storage;
        this._perfil = _perfil;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this.formBuilder = formBuilder;
        this.appCtrl = appCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isLoggedIn = false;
        this.user = {};
        this.activa = false;
        this.loger = 1;
        this.terminos = false;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_11__pages_terminos_terminos__["a" /* TerminosPage */];
        //this.keyboard.show();
        //this.activa=true;
        this.storage.get('telefono').then(function (val) {
            _this.telefono = val;
            _this.user.telefono = _this.telefono;
        });
        ///Facebook
        //   fb.getLoginStatus()
        // .then(res => {
        //   console.log(res.status);
        //   if(res.status === "connect") {
        //     this.isLoggedIn = true;
        //   } else {
        //     this.isLoggedIn = false;
        //   }
        // })
        // .catch(e => console.log(e));
        //this.cargandoregistro()
        ///
        this.todo = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            nombre: [''],
            apellido: [''],
            telefono: [''],
            terminos: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
        });
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
    }
    //   signInWithGoogle(): void {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }
    // signInWithFB(): void {
    //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    //   console.log('datos')
    //    this.authService.authState.subscribe((user) => {
    //     console.log('user...social',user)
    //     this.userface = user;
    //     this.loggedIn = (user != null);
    //     //Conexion con Django
    //     let options: RequestOptions = new RequestOptions({
    //     headers: new Headers({ 'Content-Type': 'application/json' })
    //     });
    //     let creds = JSON.stringify({ users: this.userface});
    //     this.http.post(this.server.getMyGlobalVar()+'loginfacebook/', creds, options)
    //     .subscribe(
    //       data => {
    //         let creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face']+JSON.parse(data['_body'])['gender']});
    //         this.http.post(this.server.getMyGlobalVar()+'api-token-auth/', creds, options)
    //                 .subscribe(
    //                   data => {
    //                      this.storage.set('token', JSON.parse(data["_body"]).token)
    //                      this.view.dismiss()
    //                               }
    //                             );
    //       })
    //   });
    // }
    //   ngAfterViewChecked(){
    // this.myInput.setFocus();
    //  }
    // ionViewDidLoad() {
    //   setTimeout(() => {
    //    this.myInput.setFocus();
    //  },150);
    // }
    RegistroprincipalPage.prototype.cargandoregistro = function () {
        var toast = this.toastCtrl.create({
            message: 'Registrarte con Facebook o por correo',
            duration: 4000
        });
        toast.present();
    };
    //  modelChanged(newObj) {
    //     console.log(newObj)
    //   this._perfil.validauser(newObj)
    //       .subscribe(data => {
    //           console.log(data)
    //           this.loger=data
    //           if(data==0){
    //             this.telefonorepetido()
    //              this.autentifica(newObj,'rosa0000')
    //           }
    //       })
    // }
    RegistroprincipalPage.prototype.autentifica = function (username, password) {
        var _this = this;
        console.log('autentificando...');
        var creds = JSON.stringify({ username: username, password: password });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        console.log(creds);
        return this.http.post(this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
            .subscribe(function (data) {
            _this.storage.set('token', JSON.parse(data["_body"]).token);
            _this.view.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { statuslogin: true });
        });
    };
    RegistroprincipalPage.prototype.telefonorepetido = function () {
        var toast = this.toastCtrl.create({
            message: 'Tu numero ya esta registrado',
            duration: 4000
        });
        toast.present();
    };
    RegistroprincipalPage.prototype.toast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    RegistroprincipalPage.prototype.codigoincorrecto = function () {
        var toast = this.toastCtrl.create({
            message: 'Lo sentimos no es el codigo correcto',
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    RegistroprincipalPage.prototype.sms = function (data) {
        this.activa = true;
        console.log(data);
        //this.sacatelefono()
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_registrofinal_registrofinal__["a" /* RegistrofinalPage */], { statuslogin: false });
    };
    //Facebook
    //   login() {
    //   this.fb.login(['public_profile', 'user_friends', 'email'])
    //     .then(res => {
    //       if(res.status === "connected") {
    //         this.isLoggedIn = true;
    //         this.getUserDetail(res.authResponse.userID);
    //       } else {
    //         this.isLoggedIn = false;
    //       }
    //     })
    //     .catch(e => console.log('Error logging into Facebook', e));
    // }
    // logout() {
    //   this.fb.logout()
    //     .then( res => this.isLoggedIn = false)
    //     .catch(e => console.log('Error logout from Facebook', e));
    // }
    RegistroprincipalPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            _this.users = res;
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
            });
            var creds = JSON.stringify({ users: _this.users, telefono: _this.telefono });
            _this.http.post(_this.server.getMyGlobalVar() + 'loginfacebook/', creds, options)
                .subscribe(function (data) {
                var creds = JSON.stringify({ username: JSON.parse(data['_body'])['email'], password: JSON.parse(data['_body'])['id_face'] + JSON.parse(data['_body'])['gender'] });
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this.view.dismiss();
                });
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ///Fin
    RegistroprincipalPage.prototype.logFormx = function (telefono) {
        //this.myInput.blur()
        // this.removeFocus()
        //this.keyboard.close();
        //console.log(this.myInput)
        //this.sacatelefono()
    };
    RegistroprincipalPage.prototype.showAlert = function (data) {
        console.log(data);
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Bienvenido, porfavor ingresa',
            buttons: ['OK']
        });
        alert.present();
    };
    RegistroprincipalPage.prototype.emailrepetido = function () {
        var alert = this.alertCtrl.create({
            title: 'My Look Xpress',
            subTitle: 'Este correo ya existe porfavor escoja otra',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    RegistroprincipalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    RegistroprincipalPage.prototype.sacatelefono = function (env) {
        var _this = this;
        console.log('sacatelefono...', this.telefono, '8888');
        this.toast('Se le envio un SMS con un codigo de confirmacion de 3 digitos');
        var alert = this.alertCtrl.create({
            title: 'Ingrese codigo de confirmacion',
            enableBackdropDismiss: false,
            inputs: [
                {
                    name: 'codigo',
                    placeholder: 'Codigo'
                },
            ],
            buttons: [
                {
                    text: 'Cerrar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        console.log('enviando..', data.codigo, _this.codigo);
                        //this.logForm(env)
                        if (parseInt(_this.codigo) == parseInt(data.codigo)) {
                            _this.logForm(env);
                            alert.dismiss();
                        }
                        else {
                            _this.codigoincorrecto();
                        }
                        return false;
                    }
                }
            ]
        });
        alert.present();
    };
    RegistroprincipalPage.prototype.ingresa = function (env) {
        var _this = this;
        console.log('Ingrese.....', env.telefono);
        if (this.terminos == false) {
            this.toast('Se requiere que acepte Terminos y Condiciones');
        }
        else {
            this._perfil.enviasms(env.telefono)
                .subscribe(function (data) {
                _this.codigo = data.codigo;
                _this.storage.set('codigosms', _this.codigo);
                console.log('CODID..', data);
                _this.sacatelefono(env);
            });
        }
        //this.logForm(env)
        //this.telefono=val
        //this.user.telefono=this.telefono
    };
    RegistroprincipalPage.prototype.logForm = function (env) {
        var _this = this;
        console.log(env.email);
        var creds = JSON.stringify({ apellido: env.apellido, username: env.telefono, email: env.email, password: 'rosa0000', nombre: env.nombre });
        console.log(creds);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' })
        });
        this.http.post(this.server.getMyGlobalVar() + 'registro_v2/', creds, options)
            .subscribe(function (data) {
            console.log('eroo..', data['_body']);
            if (data['_body'] == '"ok"') {
                console.log('ingrese');
                ///Logeandose
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    console.log('ingresando..', data);
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { statuslogin: true });
                    //this.appCtrl.getRootNav().setRoot(HomePage)
                    //this.view.dismiss()
                    //this.appCtrl.getRootNav().push(UbicacionPage);
                });
            }
            if (data['_body'] == 0) {
                //this.emailrepetido()
                _this.telefonorepetido();
                //this.toast('Tu numero ya esta registrado. Ingrese solo su numero')
                _this.http.post(_this.server.getMyGlobalVar() + 'api-token-auth/', creds, options)
                    .subscribe(function (data) {
                    _this.storage.set('token', JSON.parse(data["_body"]).token);
                    //this.appCtrl.getRootNav().setRoot(HomePage)
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { statuslogin: true });
                    //this.view.dismiss()
                });
            }
        });
    };
    RegistroprincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registroprincipal',template:/*ion-inline-start:"/home/andy/mylook/src/pages/registroprincipal/registroprincipal.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n <ion-header>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title> Registrate </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  >\n\n\n\n\n\n<!-- \n<div class="app-icon">\n        <ion-icon name="ios-chatbubbles-outline" ></ion-icon>\n      </div> -->\n\n<ion-list inset  >\n\n\n   <!--Facebook Login-->\n\n\n<!--   <div *ngIf="isLoggedIn; else facebookLogin">\n \n    <p>\n      <button ion-button full icon-right (click)="logout()">\n        Salir\n      </button>\n    </p>\n  </div>\n  <ng-template #facebookLogin>\n    <button ion-button full icon-right (click)="login()">\n      Ingresar con\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ng-template>\n -->\n \n\n\n\n\n \n<!-- <label *ngIf="!telefono" color=\'light\'>Registrate con tu celular</label>\n -->\n\n\n\n<!-- \n<span padding style=\'font-family: "Varela Round";font-size:18px;\'>MY LOOK XPRESS</span>\n\n -->\n\n<div style=\'height: 10px\'></div>\n<h6 padding>Te enviaremos un SMS con el codigo de confirmación</h6>\n\n\n\n  <form  (ngSubmit)="ingresa(user)" [formGroup]="todo">\n \n       <ion-list inset>\n\n\n\n\n\n        <label color=\'dark\'>Celular</label>\n      <ion-item>\n            <ion-input formControlName="telefono" maxlength="9" name=\'telefono\' id="loginField" type="number" required [(ngModel)] = "user.telefono"></ion-input>\n      </ion-item>\n\n     \n      <div style=\'height: 10px\' ></div>\n      <label *ngIf=\'loger==1\' color=\'dark\'>Correo Electronico</label>\n      <ion-item *ngIf=\'loger==1\'>\n            <ion-input  formControlName="email"  name=\'email\' id="loginField" type="email" required [(ngModel)] = "user.email"></ion-input>\n      </ion-item>\n\n      <div style=\'height: 10px\'></div>\n\n\n      <label color=\'dark\' *ngIf=\'loger==1\'>Nombre</label>\n      <ion-item *ngIf=\'loger==1\' style=\'border-bottom: 1px solid #dedede;\'>\n            <ion-input formControlName="nombre"  name=\'nombre\' id="loginField" type="text" required [(ngModel)] = "user.nombre"></ion-input>\n      </ion-item>\n\n      <div style=\'height: 10px\'></div>\n\n      <label color=\'dark\' *ngIf=\'loger==1\'>Apellidos</label>\n      <ion-item *ngIf=\'loger==1\' style=\'border-bottom: 1px solid #dedede;\'>\n            <ion-input formControlName="apellido"  name=\'apellido\' id="loginField" type="text" required [(ngModel)] = "user.apellido"></ion-input>\n      </ion-item>\n\n      <div style=\'height: 10px\'></div>\n\n       \n    \n       <ion-item  style=\'border-bottom: 1px solid #dedede;\'>\n        <ion-label color=\'dark\' style=\'font-size: 12px;\'>Acepta Términos y Condiciones </ion-label>\n    <ion-checkbox  formControlName="terminos"  [(ngModel)] = "terminos"></ion-checkbox>\n\n   </ion-item>\n\n\n   <div style=\'height: 10px\'></div>\n\n      <ion-item style=\'font-size: 12px;\n    color: #211837;\n    text-decoration: underline;\n    cursor: pointer;\' [navPush]="pushPage">Ver Términos y Condiciones</ion-item>\n\n\n      </ion-list>\n\n\n\n      <button *ngIf=\'loger==1\' round ion-button type="submit" color=\'dark\' block [disabled]="!todo.valid">Registrar</button>\n    </form> \n\n\n\n\n<!-- \n <ion-row padding>Si ya tienes cuenta ingresa <span [navPush]="loginPage" style=\'padding-left: 9px;text-decoration: underline;\n\'> AQUI</span></ion-row>\n -->\n<!-- \n<button round ion-button  color=\'white\' block  [navPush]="loginPage" >Ingresar</button> -->\n\n  <!--    <button round ion-button  color=\'white\' block  [navPush]="registrosociaPage" >Conviertete en socia</button>-->\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n<!-- <mytabs></mytabs>\n\n\n -->'/*ion-inline-end:"/home/andy/mylook/src/pages/registroprincipal/registroprincipal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_10__providers_server_server__["a" /* ServerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_server_server__["a" /* ServerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_perfil_perfil__["a" /* PerfilProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RegistroprincipalPage);
    return RegistroprincipalPage;
}());

//# sourceMappingURL=registroprincipal.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortadaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_server__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortadaProvider = (function () {
    function PortadaProvider(_http, server) {
        this._http = _http;
        this.server = server;
        console.log('Hello PortadaProvider Provider');
    }
    PortadaProvider.prototype.getfotosdeportada = function (sexo) {
        return this._http.get(this.server.getMyGlobalVar() + 'portadaphoto/' + sexo)
            .map(function (response) { return response.json(); });
    };
    PortadaProvider.prototype.getfotosdepublicidad = function () {
        return this._http.get(this.server.getMyGlobalVar() + 'publicidad')
            .map(function (response) { return response.json(); });
    };
    PortadaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* ServerProvider */]])
    ], PortadaProvider);
    return PortadaProvider;
}());

//# sourceMappingURL=portada.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServerProvider = (function () {
    function ServerProvider() {
        //this.myGlobalVar = "http://138.68.230.137:8000/";
        this.myGlobalVar = "https://aniavestidos.com:9000/";
    }
    ServerProvider.prototype.setMyGlobalVar = function (value) {
        this.myGlobalVar = value;
    };
    ServerProvider.prototype.getMyGlobalVar = function () {
        return this.myGlobalVar;
    };
    ServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ServerProvider);
    return ServerProvider;
}());

//# sourceMappingURL=server.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map