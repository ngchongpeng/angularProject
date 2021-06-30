(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about works!</p>\n<!-- <section class=\"container\">\n  <section class=\"row\" [ngSwitch]=\"angularversion\">\n    <h3>Example for ngSwitch - Directive</h3>\n    <section class=\"col-md-3\" *ngSwitchCase=\"'angular2'\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Angular 2.0</h5>\n          <p class=\"card-text\">2.0</p>\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\n            Explore</a>\n        </div>\n      </div>\n    </section>\n    <section class=\"col-md-3\" *ngSwitchCase=\"'angular4'\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Angular 4.0</h5>\n          <p class=\"card-text\">4.0</p>\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': isgold ? 'red' : 'gold' }\">\n            Explore</a>\n        </div>\n      </div>\n    </section>\n    <section class=\"col-md-3\" *ngSwitchCase=\"'angular8'\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Angular 8.0</h5>\n          <p class=\"card-text\">8.0</p>\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\n            Explore</a>\n        </div>\n      </div>\n    </section>\n    <section class=\"col-md-3\" *ngSwitchDefault>\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/angular.png\" class=\"card-img-top\" alt=\"Supply Chain\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Angular 12.0</h5>\n          <p class=\"card-text\">12.0</p>\n          <a href=\"#\" class=\"btn btn-primary\" [ngStyle]=\"{'background-color': 'red'}\">\n            Explore</a>\n        </div>\n      </div>\n    </section>\n    <section class=\"col-md-3\">\n      <img src=\"../../assets/images/angular-icon.png\" appRotateAnimation alt=\"Angular Icon\" />\n    </section>\n  </section>\n</section> -->");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");




const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
let AboutRoutingModule = class AboutRoutingModule {
};
AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutRoutingModule);



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgRotate {\r\n  width: 250px;\r\n  height: 250px;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  -webkit-animation-name: rotateImg;\r\n          animation-name: rotateImg;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-duration: 5s;\r\n          animation-duration: 5s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n@-webkit-keyframes rotateImg {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotateImg {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdSb3RhdGUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUltZztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlSW1nIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
        this.angularversion = 'angular4';
        this.isgold = true;
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");





let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
        ]
    })
], AboutModule);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map