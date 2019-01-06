webpackJsonp([0],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuandoPageModule", function() { return CuandoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuando__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CuandoPageModule = (function () {
    function CuandoPageModule() {
    }
    CuandoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cuando__["a" /* CuandoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cuando__["a" /* CuandoPage */]),
            ],
        })
    ], CuandoPageModule);
    return CuandoPageModule;
}());

//# sourceMappingURL=cuando.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuandoPage; });
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
 * Generated class for the CuandoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuandoPage = (function () {
    function CuandoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CuandoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CuandoPage');
    };
    CuandoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cuando',template:/*ion-inline-start:"/home/andy/mylook/src/pages/cuando/cuando.html"*/'<!--\n  Generated template for the CuandoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cuando</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n 	<ion-list style=\'margin-top: 72px;\n    padding: 15px;\'>\n\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>Que dia y aque hora quieres el servicio?</div>\n</div>\n\n  <ion-item>\n  <ion-label>Date</ion-label>\n  <ion-datetime min="2018-02-25"  displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n\n\n <div class="spacer" style="height:20px;"></div>\n\n<div class="row">\n<div class="col-30"><div class=\'circulo\'>1</div></div>\n<div class="col-70" style=\'font-family: "Didact Gothic", sans-serif;padding: 9px;\'>En donde deseas el servicio?</div>\n</div>\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/mylook/src/pages/cuando/cuando.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CuandoPage);
    return CuandoPage;
}());

//# sourceMappingURL=cuando.js.map

/***/ })

});
//# sourceMappingURL=0.js.map