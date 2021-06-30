(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<!-- <app-slider></app-slider> -->\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/assignments/assignments.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/assignments/assignments.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>assignments works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task1/task1-child/task1-child.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task1/task1-child/task1-child.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <h3>Child Inputs</h3>\n        <label>Item Name</label>\n        <input type=\"text\" class=\"form-control\" #itemName>\n        <label>Item Qty</label>\n        <input type=\"text\" class=\"form-control\" #itemQty>\n        <br>\n        <button class=\"btn btn-primary\" (click)=\"onAddItem()\">Add Item</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task1/task1.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task1/task1.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <p>\n            1) Generate dynamic data using @viewchild decorator by attaching custom event and populate inside a\n            component.We should not use angular Event Binding - Ex - (ngSubmit). We should not use angular directives\n            such\n            as *ngFor or *ngIf instead try creating manupulating the\n            data inside controller file ie 'component TS file'.\n        </p>\n        <app-task1-child (itemAdded)=\"onItemAdded($event)\"></app-task1-child>\n        <div>\n            <h3>Data pushed from child</h3>\n            <div #output>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task2/task2.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task2/task2.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <p>5) Build components under services menu with you own HTML & CSS , Please dont use Bootstrap.</p>\r\n        <p>Not yet complete!</p>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task3/task3.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task3/task3.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <p>3) Create Custom Directive(Structural) that should collect the input from parent component and iterate the\n            template\n            over the no of time passed from parent?</p>\n        <div class=\"row\">\n\n            <div class=\"col-md-6\">\n                <h3>Loop</h3>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"num\">\n            </div>\n            <div class=\"col-md-6\">\n                <h3>Output</h3>\n                <p *appCustomIterate=\"num\" style=\"border: 1px solid grey;\">\n                    Repeat this text\n                </p>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4-child1/task4-child1.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4-child1/task4-child1.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <label>Input</label>\n    <input type=\"text\" class=\"form-control\" #input>\n    <br>\n    <button (click)=\"onSendInput(input)\" class=\"btn btn-primary\">Send input</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4-child2/task4-child2.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4-child2/task4-child2.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <label>Output</label>\n    <input type=\"text\" class=\"form-control\" value=\"{{output}}\" disabled>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <p>\n            4) Create sibling component and pass information between them\n        </p>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3>Child 1</h3>\n                <app-task4-child1 (inputSent)=\"onInputSent($event)\"></app-task4-child1>\n            </div>\n            <div class=\"col-md-6\">\n                <h3>Child 2</h3>\n                <app-task4-child2 [output]=\"receivedInput\"></app-task4-child2>\n            </div>\n        </div>\n    </div>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task5/task5-output/task5-output.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task5/task5-output/task5-output.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h3>Local Storage</h3>\n    <button class=\"btn btn-primary\" (click)=\"fetchLatestData()\">Fetch latest data</button>\n\n    <p *ngFor=\"let u of users; let i = index\" style=\"border-bottom: 1px solid grey;\">\n        Username: {{u.username}}\n        <br>\n        Email: {{u.email}}\n        <br>\n        Contact No: {{u.contactno}}\n        <br>\n        Message: {{u.message}}\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task5/task5.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task5/task5.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <p>2) Build contact component with validations and store the information in the Browser storage\n            and list the contact information in a separate component by reading from Browser storage</p>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3>Input</h3>\n            <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label>Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" ngModel #username=\"ngModel\" required>\n                    <p *ngIf=\"!username.valid && username.touched\">This field is required!</p>\n                </div>\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" ngModel #email=\"ngModel\" required>\n                    <p *ngIf=\"!email.valid && email.touched\">This field is required!</p>\n                </div>\n                <div class=\"form-group\">\n                    <label>Contact No</label>\n                    <input type=\"text\" class=\"form-control\" name=\"contactno\" ngModel #contactno=\"ngModel\" required>\n                    <p *ngIf=\"!contactno.valid && contactno.touched\">This field is required!</p>\n                </div>\n                <div class=\"form-group\">\n                    <label>Message</label>\n                    <textarea class=\"form-control\" rows=\"3\" name=\"message\" ngModel #message=\"ngModel\"\n                        required></textarea>\n                    <p *ngIf=\"!message.valid && message.touched\">This field is required!</p>\n                </div>\n                <br>\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n            </form>\n        </div>\n        <div class=\"col-md-6\">\n            <app-task5-output></app-task5-output>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/add-user/add-user.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/add-user/add-user.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ngComponent\">\n    <div class=\"row\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">Add Users</h3>\n                <form [formGroup]=\"addUserForm\" (ngSubmit)=\"addUser()\">\n                    <div class=\"form-group\">\n                        <label>Firstname</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\">\n                        <p *ngIf=\"f.firstname.touched && !f.firstname.valid\">This field is invalid!</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Lastname</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\">\n                        <p *ngIf=\"f.lastname.touched && !f.lastname.valid\">This field is invalid!</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n                        <p *ngIf=\"f.email.touched && !f.email.valid\">This field is invalid!</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Country</label>\n                        <select class=\"form-control\" formControlName=\"country\">\n                            <option value=\"\">Select ...</option>\n                            <option value=\"SG\">Singapore</option>\n                            <option value=\"IN\">India</option>\n                            <option value=\"USA\">United States</option>\n                        </select>\n                        <p *ngIf=\"f.country.touched && !f.country.valid\">This field is invalid!</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Address</label>\n                        <textarea rows=\"3\" class=\"form-control\" formControlName=\"address\"></textarea>\n                        <p *ngIf=\"f.address.touched && !f.address.valid\">This field is invalid!</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary form-control mt-4\" [disabled]=\"!addUserForm.valid\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/all-users/all-users.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/all-users/all-users.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ngComponent\">\n    <div class=\"row\">\n        <h3 class=\"text-center\">List of all Users</h3>\n        <a class=\"btn btn-secondary form-control\" (click)=\"getAllUsers()\">Click to refresh all users</a>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Firstname</th>\n                    <th>Lastname</th>\n                    <th>Email</th>\n                    <th>Country</th>\n                    <th>Address</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"users.length>0\">\n                <tr *ngFor=\"let user of users; let i=index\">\n                    <td>{{i+1}}</td>\n                    <td>{{user.firstname}}</td>\n                    <td>{{user.lastname}}</td>\n                    <td>{{user.email}}</td>\n                    <td>{{user.country}}</td>\n                    <td>{{user.address}}</td>\n                    <td>\n                        <a class=\"anchor\" data-bs-toggle=\"modal\" data-bs-target=\"#updateModal\"\n                            (click)=\"openUpdateModal(user)\">Update</a>\n                        |\n                        <a class=\"anchor\" (click)=\"deleteUser(i)\">Delete</a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <p *ngIf=\"users.length<=0\">No records found!</p>\n    </div>\n    <div class=\"modal fade\" id=\"updateModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\" *ngIf=\"!submitted\">\n                <form [formGroup]=\"updateForm\" (ngSubmit)=\"updateUser()\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Update user</h5>\n                        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <input type=\"hidden\" formControlName=\"id\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Firstname</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" />\n                        </div>\n                        <div class=\" form-group\">\n                            <label>Lastname</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Email</label>\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Address</label>\n                            <textarea class=\"form-control\" formControlName=\"address\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary\" data-bs-dismiss>Submit</button>\n                        <button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-content\" *ngIf=\"submitted\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Update user</h5>\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n                </div>\n                <div class=\"modal-body\">\n                    <p>User updated successfully!</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/users.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/users.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <app-add-user></app-add-user>\n    <app-all-users></app-all-users>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>careers works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"container-fluid p-0 bg-dark\">\n  <div class=\"row\">\n    <div class=\"col col-md-3 p-5\">\n      <img src=\"../../assets/images/logo.png\" alt=\"Accenture\" class=\"w-100\" />\n      <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book. </p>\n    </div>\n    <div class=\"col col-md-3 p-5\">\n      <ul class=\"list-unstyled\">\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Home</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">About</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4 \">Services</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Clients</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Blog</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Contact</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col col-md-3 p-5\">\n      <ul class=\"list-unstyled\">\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Facebook</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Twitter</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4 \">LinkedIn</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Instagram</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Pinterest</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"text-light text-decoration-none fs-4\">Youtube</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col col-md-3 p-5\">\n      <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62222.96541253389!2d77.59297932600656!3d12.91187747337624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b32a12864f%3A0x40d1865bca6244d2!2sAccenture!5e0!3m2!1sen!2sin!4v1623645080651!5m2!1sen!2sin\"\n        class=\"w-100\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"text-center text-light\">All Rights Reserved &copy; 2021 <a href=\"www.accenture.com\">Accenture</a></p>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"row bg-dark p-3 mx-0\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"container-fluid\">\r\n      <a class=\"navbar-brand\" routerLink=\"\">\r\n        <img src=\"../assets/images/logo.png\" alt=\"Accenture\" class=\"w-50\" />\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" routerLink=\"/insights\">Insights</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\"\r\n              aria-expanded=\"false\" routerLink=\"/services\">\r\n              Services\r\n            </a>\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/supply-chain\">Supply Chain</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/banking\">Banking</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/ai\">Artificial Intelligence</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/services/business-strategy\">Business Strategy</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/industries\" *ngIf=\"isLoggedIn\">Industries</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/contact\">Contact</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\"\r\n              aria-expanded=\"false\" routerLink=\"/assignments\">\r\n              Assignments\r\n            </a>\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/assignments/task1\">Task 1</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/assignments/task5\">Task 2</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/assignments/task3\">Task 3</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/assignments/task4\">Task 4</a></li>\r\n              <li><a class=\"dropdown-item\" href=\"#\" routerLink=\"/assignments/task2\">Task 5</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\"\r\n              aria-expanded=\"false\">\r\n              Final\r\n            </a>\r\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <li><a *ngIf=\"!isLoggedIn\" class=\"dropdown-item\" routerLink=\"/final/p01\">Login</a></li>\r\n              <li><a *ngIf=\"isLoggedIn\" class=\"dropdown-item\" routerLink=\"/final/p02\">{{ username }}</a></li>\r\n              <li><a *ngIf=\"isLoggedIn && showModeratorBoard\" class=\"dropdown-item\"\r\n                  routerLink=\"/final/p03\">Moderator</a></li>\r\n              <li><a *ngIf=\"isLoggedIn && showAdminBoard\" class=\"dropdown-item\" href=\"#\"\r\n                  routerLink=\"/final/p04\">Admin</a></li>\r\n              <li><a *ngIf=\"isLoggedIn\" class=\"dropdown-item\" routerLink=\"/final/p05\">Angular concepts</a></li>\r\n              <li><a *ngIf=\"isLoggedIn\" class=\"dropdown-item\" routerLink=\"/final/p06\">Chart</a></li>\r\n              <li><a *ngIf=\"isLoggedIn\" class=\"dropdown-item\" (click)=\"logout()\">Logout</a></li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron text-center p-2\">\r\n  <h1>Voices of Change</h1>\r\n  <p>From insights to action, the path to 360° value starts here.</p>\r\n</div>\r\n\r\n<app-services-list></app-services-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>industries works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/insights/insights.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insights/insights.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>insights works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-of-registered-users/list-of-registered-users.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-of-registered-users/list-of-registered-users.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"card login-form\">\n    <div class=\"card-body\">\n      <h3 class=\"card-title text-center text-danger text-underline\">Register in to Accenture</h3>\n      <app-sign-up (PostData)=\"getRegisteredUser($event)\" [user]=\"user\"></app-sign-up>\n    </div>\n  </div>\n  <app-user-data-display [userList]=\"allUser\"></app-user-data-display>\n  <!-- <button (click)=\"updateUser()\">Update Username</button> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"global-container\">\r\n  <div class=\"card login-form\">\r\n    <div class=\"card-body\">\r\n      <h3 class=\"card-title text-center\">Log in to Accenture</h3>\r\n      <div class=\"card-text\">\r\n        <!--\r\n\t\t\t<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">Incorrect username or password.</div> -->\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <!-- to error: add class \"has-danger\" -->\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email address</label>\r\n            <input \r\n              type=\"email\" \r\n              class=\"form-control form-control-sm\" \r\n              id=\"exampleInputEmail1\"\r\n              aria-describedby=\"emailHelp\" \r\n              name=\"username\" \r\n              [(ngModel)]=\"user\"\r\n              #username=\"ngModel\" \r\n              [ngClass]=\"{'is-invalid': f.submitted && username.invalid}\" \r\n              required \r\n              minlength=\"6\"\r\n              email>\r\n            <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-feedback\">\r\n              <p *ngIf=\"username.errors.required\">\r\n                Username field can't be blank\r\n              </p>\r\n              <div *ngIf=\"username.errors.minlength\">Username should be min of 6 characters.</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <a href=\"#\" style=\"float:right;font-size:12px;\">Forgot password?</a>\r\n            <input type=\"password\" class=\"form-control form-control-sm\" id=\"exampleInputPassword1\" #password=\"ngModel\"\r\n              [(ngModel)]=\"pass\" name=\"password\" [ngClass]=\"{'is-invalid': f.submitted && password.invalid}\" required>\r\n            <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"password.errors.required\">\r\n                Password field can't be blank\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\r\n\r\n          <div class=\"sign-up\">\r\n            Don't have an account? <a href=\"#\" routerLink=\"/signup\">Create One</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a routerLink=\"\">\n        <img src=\"../../assets/images/404.jpg\" alt=\"404 Page not found\" />\n      </a>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services-list/services-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services-list/services-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\n  <section class=\"row\">\n    <section class=\"col-md-3\" *ngFor=\"let service of homePageServices,trackBy: trackByFn\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/{{service.imgName}}.jpg\" class=\"card-img-top\" alt=\"Supply Chain\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{service.title}}</h5>\n          <h3>{{service.heading}}</h3>\n          <p class=\"card-text\">{{service.description}}</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"{{service.title}}\" [ngStyle]=\"{'background-color': 'red'}\">Go\n            somewhere</a>\n        </div>\n      </div>\n    </section>\n  </section>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/ai/ai.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/ai/ai.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ai works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking-description/banking-description.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking-description/banking-description.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{childDescObj.heading}}</p>\n<p>{{childDescObj.details}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking-title/banking-title.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking-title/banking-title.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{titleText}}</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-banking-title [title]=\"parentTitle\" (updateInfo)=\"bankingDetailsHandler($event)\"></app-banking-title>\n<app-banking-description [description]=\"parentDescObj\"></app-banking-description>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/business-strategy/business-strategy.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/business-strategy/business-strategy.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>business-strategy works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/finance/finance.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/finance/finance.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>finance works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/service-not-found/service-not-found.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/service-not-found/service-not-found.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>service-not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\n  <section class=\"row\">\n    <section class=\"col-md-3\" *ngFor=\"let service of homePageServices,trackBy: trackByFn\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/{{service.imgName}}.jpg\" class=\"card-img-top\" alt=\"Supply Chain\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{service.title}}</h5>\n          <h3>{{service.heading}}</h3>\n          <p class=\"card-text\">{{service.description}}</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"{{service.title}}\" [ngStyle]=\"{'background-color': 'red'}\"\n            (click)=\"componentRedirect(service.imgName)\">\n            Explore</a>\n        </div>\n      </div>\n    </section>\n  </section>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/supply-chain/supply-chain.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/supply-chain/supply-chain.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>supply-chain works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-text\" (scroll)=\"onScroll($event)\" style=\"height: 250px;\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"handleSubmit()\">\n    <div class=\"form-group\">\n      <label>Firstname</label>\n      <input type=\"text\" name=\"firstname\" #fname appHighlight [highlighter]=\"'yellow'\" class=\"form-control\"\n        formControlName=\"firstname\" [ngClass]=\"{'is-invalid': submited && f.firstname.errors }\" />\n      <div *ngIf=\"submited && f.firstname.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.firstname.errors.required\">First Name should not be empty!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Lastname</label>\n      <input type=\"text\" name=\"lastname\" appHighlight [highlighter]=\"'blue'\" class=\"form-control\"\n        formControlName=\"lastname\" [ngClass]=\"{'is-invalid': submited && f.lastname.errors }\" />\n      <div *ngIf=\"submited && f.lastname.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.lastname.errors.required\">Last Name should not be empty!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" name=\"email\" appHighlight [highlighter]=\"'red'\" class=\"form-control\" formControlName=\"email\"\n        [ngClass]=\"{'is-invalid': submited && f.email.errors }\" />\n      <div *ngIf=\"submited && f.email.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.email.errors.required\">Email should not be empty!</div>\n        <div *ngIf=\"f.email.errors.email\">Please enter the valid email!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Country</label>\n      <select class=\"form-control\" formControlName=\"country\" [ngClass]=\"{'is-invalid': submited && f.country.errors }\">\n        <option value=\"\">...Select...</option>\n        <option value=\"SG\">Singapore</option>\n        <option value=\"IN\">India</option>\n        <option value=\"USA\">United States</option>\n      </select>\n      <div *ngIf=\"submited && f.country.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.country.errors.required\">Country should not be empty!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <textarea class=\"form-control\" formControlName=\"address\"\n        [ngClass]=\"{'is-invalid': submited && f.address.errors }\"></textarea>\n      <div *ngIf=\"submited && f.address.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.address.errors.required\">Country should not be empty!</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"submit\" name=\"signup\" class=\"btn btn-danger float-end\" />\n    </div>\n  </form>\n  <!-- <input #nameInput placeholder=\"Enter Your Name\"> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slider/slider.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slider/slider.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n  <div class=\"carousel-indicators\">\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\"\n      aria-current=\"true\" aria-label=\"Slide 1\"></button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\n  </div>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"../../assets/images/apj/cropped-kalam-quote-22.jpg\" class=\"d-block w-100\" alt=\"...\">\n      <!-- <div class=\"carousel-caption d-none d-md-block\">\n        <h5>First slide label</h5>\n        <p>Some representative placeholder content for the first slide.</p>\n      </div> -->\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/apj/cropped-kalam-quote-23.jpg\" class=\"d-block w-100\" alt=\"...\">\n      <!-- <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Second slide label</h5>\n        <p>Some representative placeholder content for the second slide.</p>\n      </div> -->\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/apj/cropped-kalam-quote-25.jpg\" class=\"d-block w-100\" alt=\"...\">\n      <!-- <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Third slide label</h5>\n        <p>Some representative placeholder content for the third slide.</p>\n      </div> -->\n    </div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Previous</span>\n  </button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Next</span>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Unauthorized access. Please login.\n</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-data-display/user-data-display.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-data-display/user-data-display.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\" *ngIf=\"UserList.length>0\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First Name</th>\n      <th scope=\"col\">Last Name</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Country</th>\n      <th scope=\"col\">Address</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of UserList; let i=index;\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{user.firstname}}</td>\n      <td>{{user.lastname}}</td>\n      <td>{{user.email}}</td>\n      <td>{{user.country}}</td>\n      <td>{{user.address}}</td>\n      <td>\n        <button class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#modUpdate\"\n          (click)=\"updateUser(user)\">Update</button>\n        <button class=\"btn btn-danger\" (click)=\"deleteUser(user)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"modal fade\" id=\"modUpdate\" #m>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"updateForm\" (ngSubmit)=\"handleSubmit()\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update User</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\">\n          <!-- <form [formGroup]=\"updateForm\" (ngSubmit)=\"handleSubmit()\"> -->\n          <input type=\"hidden\" formControlName=\"id\">\n          <div class=\"form-group\">\n            <label>Firstname</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" />\n          </div>\n          <div class=\" form-group\">\n            <label>Lastname</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" />\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n          </div>\n          <!-- <div class=\"form-group\">\n            <label>Country</label>\n            <select class=\"form-control\" formControlName=\"country\">\n              <option value=\"\">...Select...</option>\n              <option value=\"SG\">Singapore</option>\n              <option value=\"IN\">India</option>\n              <option value=\"USA\">United States</option>\n            </select>\n          </div> -->\n          <div class=\"form-group\">\n            <label>Address</label>\n            <textarea class=\"form-control\" formControlName=\"address\"></textarea>\n          </div>\n          <!-- <div class=\"form-group\">\n              <input type=\"submit\" class=\"btn btn-danger float-end\" />\n            </div> -->\n          <!-- </form> -->\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\">Cancel</button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_directives/custom-iterate.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/_directives/custom-iterate.directive.ts ***!
  \*********************************************************/
/*! exports provided: CustomIterateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIterateDirective", function() { return CustomIterateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomIterateDirective = class CustomIterateDirective {
    constructor(tRef, vcRef) {
        this.tRef = tRef;
        this.vcRef = vcRef;
    }
    set appCustomIterate(num) {
        this.vcRef.clear();
        for (let i = 0; i < num; i++) {
            this.vcRef.createEmbeddedView(this.tRef);
        }
    }
};
CustomIterateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomIterateDirective.prototype, "appCustomIterate", null);
CustomIterateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCustomIterate]'
    })
], CustomIterateDirective);



/***/ }),

/***/ "./src/app/_directives/custom-loop.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/_directives/custom-loop.directive.ts ***!
  \******************************************************/
/*! exports provided: CustomLoopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLoopDirective", function() { return CustomLoopDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomLoopDirective = class CustomLoopDirective {
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    set loop(num) {
        for (var i = 0; i < num; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
};
CustomLoopDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCustomLoop')
], CustomLoopDirective.prototype, "loop", null);
CustomLoopDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCustomLoop]'
    })
], CustomLoopDirective);



/***/ }),

/***/ "./src/app/_directives/highlight.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/_directives/highlight.directive.ts ***!
  \****************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(el) {
        this.el = el;
        el.nativeElement.style.border = '3px dotted red';
        //console.log(el.nativeElement);
    }
    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.highlighter;
        this.el.nativeElement.style.borderRadius = '10px';
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('highlighter')
], HighlightDirective.prototype, "highlighter", void 0);
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/_directives/rotate-animation.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/_directives/rotate-animation.directive.ts ***!
  \***********************************************************/
/*! exports provided: RotateAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateAnimationDirective", function() { return RotateAnimationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RotateAnimationDirective = class RotateAnimationDirective {
    constructor(el) {
        this.el = el;
        this.el.nativeElement.classList = 'imgRotate';
    }
};
RotateAnimationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
RotateAnimationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appRotateAnimation]'
    })
], RotateAnimationDirective);



/***/ }),

/***/ "./src/app/_guards/un-saved-changes-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_guards/un-saved-changes-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: UnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function() { return UnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }
let UnsavedChangesGuard = class UnsavedChangesGuard {
    canDeactivate(component, currentRoute, currentState) {
        console.log(component);
        console.log(currentRoute);
        console.log(currentState);
        if (component.user == undefined && component.pass == undefined) {
            return window.confirm('You have not loggedin , would you like to leave?');
        }
        else {
            return true;
        }
    }
};
UnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UnsavedChangesGuard);



/***/ }),

/***/ "./src/app/_helpers/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




// const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
const TOKEN_HEADER_KEY = 'x-access-token'; // for Node.js Express back-end
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            // for Spring Boot back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            // for Node.js Express back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    login(credentials) {
        // return this.http.post(AUTH_API + 'signin', {
        //   username: credentials.username,
        //   password: credentials.password
        // }, httpOptions);
        let obs$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(consumer => {
            let user = {
                username: credentials.username,
                roles: ['ROLE_ADMIN', 'ROLE_MODERATOR'],
                accessToken: '1234567890'
            };
            consumer.next(user);
            consumer.complete();
        });
        return obs$;
    }
    register(user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/_services/users.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/users.service.ts ***!
  \********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const API_URL = 'http://localhost:5000';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(API_URL + '/users');
    }
    getUser() {
        return this.http.get(API_URL + '/users');
    }
    createUser(user) {
        console.log(user);
        return this.http.post(API_URL + '/users', user, httpOptions);
    }
    updateUser(user) {
        return this.http.put(API_URL + '/users' + `/${user.id}`, user, httpOptions);
    }
    deleteUser(user) {
        return this.http.delete(API_URL + '/users' + `/${user.id}`);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _list_of_registered_users_list_of_registered_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-of-registered-users/list-of-registered-users.component */ "./src/app/list-of-registered-users/list-of-registered-users.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/un-saved-changes-guard.service */ "./src/app/_guards/un-saved-changes-guard.service.ts");










const routes = [
    {
        // path: '', redirectTo: '/assignments/users', pathMatch: 'prefix'
        path: '', component: _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"]
    },
    {
        path: 'insights', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./insights/insights.module */ "./src/app/insights/insights.module.ts")).then(m => m.InsightsModule)
    },
    {
        path: 'services', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./services/services.module */ "./src/app/services/services.module.ts")).then(m => m.ServicesModule)
    },
    {
        path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutModule)
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canDeactivate: [_guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_9__["UnsavedChangesGuard"]]
    },
    {
        path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'assignments', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./assignments/assignments.module */ "./src/app/assignments/assignments.module.ts")).then(m => m.AssignmentsModule)
    },
    {
        path: 'final', loadChildren: () => __webpack_require__.e(/*! import() | final-final-module */ "final-final-module").then(__webpack_require__.bind(null, /*! ./final/final.module */ "./src/app/final/final.module.ts")).then(m => m.FinalModule)
    },
    {
        path: 'signup', component: _list_of_registered_users_list_of_registered_users_component__WEBPACK_IMPORTED_MODULE_4__["ListOfRegisteredUsersComponent"]
    },
    // {
    //   path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
    // },
    {
        path: 'unauthorized', component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_8__["UnauthorizedComponent"]
    },
    {
        path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularAccenture';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _assignments_assignments_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments/assignments.module */ "./src/app/assignments/assignments.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _directives_custom_loop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives/custom-loop.directive */ "./src/app/_directives/custom-loop.directive.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_directives/highlight.directive */ "./src/app/_directives/highlight.directive.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _insights_insights_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./insights/insights.module */ "./src/app/insights/insights.module.ts");
/* harmony import */ var _list_of_registered_users_list_of_registered_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-of-registered-users/list-of-registered-users.component */ "./src/app/list-of-registered-users/list-of-registered-users.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _directives_rotate_animation_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_directives/rotate-animation.directive */ "./src/app/_directives/rotate-animation.directive.ts");
/* harmony import */ var _services_list_services_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services-list/services-list.component */ "./src/app/services-list/services-list.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_guards/un-saved-changes-guard.service */ "./src/app/_guards/un-saved-changes-guard.service.ts");
/* harmony import */ var _user_data_display_user_data_display_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-data-display/user-data-display.component */ "./src/app/user-data-display/user-data-display.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _helpers_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_helpers/auth-interceptor.service */ "./src/app/_helpers/auth-interceptor.service.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_18__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _slider_slider_component__WEBPACK_IMPORTED_MODULE_24__["SliderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _industries_industries_component__WEBPACK_IMPORTED_MODULE_14__["IndustriesComponent"],
            _careers_careers_component__WEBPACK_IMPORTED_MODULE_5__["CareersComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
            _services_list_services_list_component__WEBPACK_IMPORTED_MODULE_21__["ServicesListComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
            _list_of_registered_users_list_of_registered_users_component__WEBPACK_IMPORTED_MODULE_16__["ListOfRegisteredUsersComponent"],
            _user_data_display_user_data_display_component__WEBPACK_IMPORTED_MODULE_26__["UserDataDisplayComponent"],
            _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_11__["HighlightDirective"],
            _directives_custom_loop_directive__WEBPACK_IMPORTED_MODULE_7__["CustomLoopDirective"],
            _directives_rotate_animation_directive__WEBPACK_IMPORTED_MODULE_20__["RotateAnimationDirective"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_27__["TestComponent"],
            _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_30__["UnauthorizedComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _services_services_module__WEBPACK_IMPORTED_MODULE_22__["ServicesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _assignments_assignments_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _insights_insights_module__WEBPACK_IMPORTED_MODULE_15__["InsightsModule"],
        ],
        providers: [
            _guards_un_saved_changes_guard_service__WEBPACK_IMPORTED_MODULE_25__["UnsavedChangesGuard"],
            _angular_common__WEBPACK_IMPORTED_MODULE_28__["AsyncPipe"],
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ChangeDetectorRef"],
            _helpers_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["authInterceptorProviders"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/assignments/assignments-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/assignments/assignments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AssignmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsRoutingModule", function() { return AssignmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments/assignments.component */ "./src/app/assignments/assignments/assignments.component.ts");
/* harmony import */ var _task1_task1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task1/task1.component */ "./src/app/assignments/task1/task1.component.ts");
/* harmony import */ var _task2_task2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task2/task2.component */ "./src/app/assignments/task2/task2.component.ts");
/* harmony import */ var _task3_task3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task3/task3.component */ "./src/app/assignments/task3/task3.component.ts");
/* harmony import */ var _task4_task4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task4/task4.component */ "./src/app/assignments/task4/task4.component.ts");
/* harmony import */ var _task5_task5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task5/task5.component */ "./src/app/assignments/task5/task5.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/assignments/users/users.component.ts");










const routes = [
    { path: '', component: _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_3__["AssignmentsComponent"] },
    { path: 'task1', component: _task1_task1_component__WEBPACK_IMPORTED_MODULE_4__["Task1Component"] },
    { path: 'task2', component: _task2_task2_component__WEBPACK_IMPORTED_MODULE_5__["Task2Component"] },
    { path: 'task3', component: _task3_task3_component__WEBPACK_IMPORTED_MODULE_6__["Task3Component"] },
    { path: 'task4', component: _task4_task4_component__WEBPACK_IMPORTED_MODULE_7__["Task4Component"] },
    { path: 'task5', component: _task5_task5_component__WEBPACK_IMPORTED_MODULE_8__["Task5Component"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"] },
];
let AssignmentsRoutingModule = class AssignmentsRoutingModule {
};
AssignmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssignmentsRoutingModule);



/***/ }),

/***/ "./src/app/assignments/assignments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/assignments/assignments.module.ts ***!
  \***************************************************/
/*! exports provided: AssignmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsModule", function() { return AssignmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _assignments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments-routing.module */ "./src/app/assignments/assignments-routing.module.ts");
/* harmony import */ var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments/assignments.component */ "./src/app/assignments/assignments/assignments.component.ts");
/* harmony import */ var _task1_task1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task1/task1.component */ "./src/app/assignments/task1/task1.component.ts");
/* harmony import */ var _task2_task2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task2/task2.component */ "./src/app/assignments/task2/task2.component.ts");
/* harmony import */ var _task3_task3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task3/task3.component */ "./src/app/assignments/task3/task3.component.ts");
/* harmony import */ var _task4_task4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task4/task4.component */ "./src/app/assignments/task4/task4.component.ts");
/* harmony import */ var _task5_task5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task5/task5.component */ "./src/app/assignments/task5/task5.component.ts");
/* harmony import */ var _task1_task1_child_task1_child_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task1/task1-child/task1-child.component */ "./src/app/assignments/task1/task1-child/task1-child.component.ts");
/* harmony import */ var _directives_custom_iterate_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_directives/custom-iterate.directive */ "./src/app/_directives/custom-iterate.directive.ts");
/* harmony import */ var _task4_task4_child1_task4_child1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task4/task4-child1/task4-child1.component */ "./src/app/assignments/task4/task4-child1/task4-child1.component.ts");
/* harmony import */ var _task4_task4_child2_task4_child2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task4/task4-child2/task4-child2.component */ "./src/app/assignments/task4/task4-child2/task4-child2.component.ts");
/* harmony import */ var _task5_task5_output_task5_output_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task5/task5-output/task5-output.component */ "./src/app/assignments/task5/task5-output/task5-output.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "./src/app/assignments/users/users.component.ts");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/assignments/users/add-user/add-user.component.ts");
/* harmony import */ var _users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/all-users/all-users.component */ "./src/app/assignments/users/all-users/all-users.component.ts");



















let AssignmentsModule = class AssignmentsModule {
};
AssignmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__["AddUserComponent"],
            _users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_18__["AllUsersComponent"],
            _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentsComponent"],
            _directives_custom_iterate_directive__WEBPACK_IMPORTED_MODULE_11__["CustomIterateDirective"],
            _task1_task1_child_task1_child_component__WEBPACK_IMPORTED_MODULE_10__["Task1ChildComponent"],
            _task1_task1_component__WEBPACK_IMPORTED_MODULE_5__["Task1Component"],
            _task2_task2_component__WEBPACK_IMPORTED_MODULE_6__["Task2Component"],
            _task3_task3_component__WEBPACK_IMPORTED_MODULE_7__["Task3Component"],
            _task4_task4_child1_task4_child1_component__WEBPACK_IMPORTED_MODULE_12__["Task4Child1Component"],
            _task4_task4_child2_task4_child2_component__WEBPACK_IMPORTED_MODULE_13__["Task4Child2Component"],
            _task4_task4_component__WEBPACK_IMPORTED_MODULE_8__["Task4Component"],
            _task5_task5_component__WEBPACK_IMPORTED_MODULE_9__["Task5Component"],
            _task5_task5_output_task5_output_component__WEBPACK_IMPORTED_MODULE_14__["Task5OutputComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _assignments_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ]
    })
], AssignmentsModule);



/***/ }),

/***/ "./src/app/assignments/assignments/assignments.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/assignments/assignments/assignments.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/assignments/assignments.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/assignments/assignments/assignments.component.ts ***!
  \******************************************************************/
/*! exports provided: AssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function() { return AssignmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssignmentsComponent = class AssignmentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssignmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/assignments/assignments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignments.component.css */ "./src/app/assignments/assignments/assignments.component.css")).default]
    })
], AssignmentsComponent);



/***/ }),

/***/ "./src/app/assignments/task1/task1-child/task1-child.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/assignments/task1/task1-child/task1-child.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2sxL3Rhc2sxLWNoaWxkL3Rhc2sxLWNoaWxkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/task1/task1-child/task1-child.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/assignments/task1/task1-child/task1-child.component.ts ***!
  \************************************************************************/
/*! exports provided: Task1ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task1ChildComponent", function() { return Task1ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task1ChildComponent = class Task1ChildComponent {
    constructor() {
        this.itemAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onAddItem() {
        this.itemAdded.emit({
            itemName: this.itemName.nativeElement.value,
            itemQty: parseInt(this.itemQty.nativeElement.value, 10)
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Task1ChildComponent.prototype, "itemAdded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemName', { static: false })
], Task1ChildComponent.prototype, "itemName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemQty', { static: false })
], Task1ChildComponent.prototype, "itemQty", void 0);
Task1ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task1-child',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task1-child.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task1/task1-child/task1-child.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task1-child.component.css */ "./src/app/assignments/task1/task1-child/task1-child.component.css")).default]
    })
], Task1ChildComponent);



/***/ }),

/***/ "./src/app/assignments/task1/task1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/assignments/task1/task1.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2sxL3Rhc2sxLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/task1/task1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/task1/task1.component.ts ***!
  \******************************************************/
/*! exports provided: Task1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task1Component", function() { return Task1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task1Component = class Task1Component {
    constructor() {
        this.items = [];
    }
    ngOnInit() {
    }
    onItemAdded(data) {
        this.items.push(data);
        let element = new DOMParser().parseFromString(`
        <div>
            ${data.itemName} (${data.itemQty})
        </div>
      `, 'text/html');
        this.output.nativeElement.appendChild(element.documentElement);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('output', { static: false })
], Task1Component.prototype, "output", void 0);
Task1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task1/task1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task1.component.css */ "./src/app/assignments/task1/task1.component.css")).default]
    })
], Task1Component);



/***/ }),

/***/ "./src/app/assignments/task2/task2.component.css":
/*!*******************************************************!*\
  !*** ./src/app/assignments/task2/task2.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2syL3Rhc2syLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/task2/task2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/task2/task2.component.ts ***!
  \******************************************************/
/*! exports provided: Task2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task2Component", function() { return Task2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task2Component = class Task2Component {
    constructor() { }
    ngOnInit() {
    }
};
Task2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task2/task2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task2.component.css */ "./src/app/assignments/task2/task2.component.css")).default]
    })
], Task2Component);



/***/ }),

/***/ "./src/app/assignments/task3/task3.component.css":
/*!*******************************************************!*\
  !*** ./src/app/assignments/task3/task3.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2szL3Rhc2szLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/task3/task3.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/task3/task3.component.ts ***!
  \******************************************************/
/*! exports provided: Task3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task3Component", function() { return Task3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task3Component = class Task3Component {
    constructor() { }
    ngOnInit() {
    }
};
Task3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task3/task3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task3.component.css */ "./src/app/assignments/task3/task3.component.css")).default]
    })
], Task3Component);



/***/ }),

/***/ "./src/app/assignments/task4/task4-child1/task4-child1.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/assignments/task4/task4-child1/task4-child1.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2s0L3Rhc2s0LWNoaWxkMS90YXNrNC1jaGlsZDEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/assignments/task4/task4-child1/task4-child1.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/assignments/task4/task4-child1/task4-child1.component.ts ***!
  \**************************************************************************/
/*! exports provided: Task4Child1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task4Child1Component", function() { return Task4Child1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task4Child1Component = class Task4Child1Component {
    constructor() {
        this.inputSent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSendInput(data) {
        this.inputSent.emit(data.value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Task4Child1Component.prototype, "inputSent", void 0);
Task4Child1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task4-child1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task4-child1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4-child1/task4-child1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task4-child1.component.css */ "./src/app/assignments/task4/task4-child1/task4-child1.component.css")).default]
    })
], Task4Child1Component);



/***/ }),

/***/ "./src/app/assignments/task4/task4-child2/task4-child2.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/assignments/task4/task4-child2/task4-child2.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2s0L3Rhc2s0LWNoaWxkMi90YXNrNC1jaGlsZDIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/assignments/task4/task4-child2/task4-child2.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/assignments/task4/task4-child2/task4-child2.component.ts ***!
  \**************************************************************************/
/*! exports provided: Task4Child2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task4Child2Component", function() { return Task4Child2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task4Child2Component = class Task4Child2Component {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Task4Child2Component.prototype, "output", void 0);
Task4Child2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task4-child2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task4-child2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4-child2/task4-child2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task4-child2.component.css */ "./src/app/assignments/task4/task4-child2/task4-child2.component.css")).default]
    })
], Task4Child2Component);



/***/ }),

/***/ "./src/app/assignments/task4/task4.component.css":
/*!*******************************************************!*\
  !*** ./src/app/assignments/task4/task4.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2s0L3Rhc2s0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/task4/task4.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/task4/task4.component.ts ***!
  \******************************************************/
/*! exports provided: Task4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task4Component", function() { return Task4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task4Component = class Task4Component {
    constructor() { }
    ngOnInit() {
    }
    onInputSent(data) {
        this.receivedInput = data;
    }
};
Task4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task4/task4.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task4.component.css */ "./src/app/assignments/task4/task4.component.css")).default]
    })
], Task4Component);



/***/ }),

/***/ "./src/app/assignments/task5/task5-output/task5-output.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/assignments/task5/task5-output/task5-output.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2s1L3Rhc2s1LW91dHB1dC90YXNrNS1vdXRwdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/assignments/task5/task5-output/task5-output.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/assignments/task5/task5-output/task5-output.component.ts ***!
  \**************************************************************************/
/*! exports provided: Task5OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task5OutputComponent", function() { return Task5OutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task5OutputComponent = class Task5OutputComponent {
    constructor() { }
    ngOnInit() {
        this.fetchLatestData();
    }
    fetchLatestData() {
        this.users = JSON.parse(localStorage.getItem('contacts'));
    }
};
Task5OutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task5-output',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task5-output.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task5/task5-output/task5-output.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task5-output.component.css */ "./src/app/assignments/task5/task5-output/task5-output.component.css")).default]
    })
], Task5OutputComponent);



/***/ }),

/***/ "./src/app/assignments/task5/task5.component.css":
/*!*******************************************************!*\
  !*** ./src/app/assignments/task5/task5.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3Rhc2s1L3Rhc2s1LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/task5/task5.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/task5/task5.component.ts ***!
  \******************************************************/
/*! exports provided: Task5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task5Component", function() { return Task5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Task5Component = class Task5Component {
    constructor() { }
    ngOnInit() {
    }
    onSubmit() {
        // localStorage.removeItem('contacts');
        if (localStorage.getItem('contacts') === null) {
            localStorage.setItem('contacts', JSON.stringify([]));
        }
        let contacts = JSON.parse(localStorage.getItem('contacts'));
        (contacts).push(this.contactForm.form.value);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        alert('Submitted');
        this.contactForm.form.reset();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], Task5Component.prototype, "contactForm", void 0);
Task5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task5.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/task5/task5.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task5.component.css */ "./src/app/assignments/task5/task5.component.css")).default]
    })
], Task5Component);



/***/ }),

/***/ "./src/app/assignments/users/add-user/add-user.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/assignments/users/add-user/add-user.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3VzZXJzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/users/add-user/add-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/assignments/users/add-user/add-user.component.ts ***!
  \******************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users.service */ "./src/app/_services/users.service.ts");




let AddUserComponent = class AddUserComponent {
    constructor(formBuilder, usersService) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
    }
    get f() { return this.addUserForm.controls; }
    ngOnInit() {
        this.addUserForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['SG', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    addUser() {
        let user = this.addUserForm.value;
        this.usersService.createUser(user).subscribe(data => {
            this.addUserForm.reset();
        });
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.css */ "./src/app/assignments/users/add-user/add-user.component.css")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/assignments/users/all-users/all-users.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/assignments/users/all-users/all-users.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3VzZXJzL2FsbC11c2Vycy9hbGwtdXNlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/assignments/users/all-users/all-users.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/assignments/users/all-users/all-users.component.ts ***!
  \********************************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users.service */ "./src/app/_services/users.service.ts");




let AllUsersComponent = class AllUsersComponent {
    constructor(usersService, formBuilder) {
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.users = [];
    }
    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            id: [''],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getAllUsers();
    }
    openUpdateModal(user) {
        this.updateForm.setValue(user);
        this.submitted = false;
    }
    getAllUsers() {
        this.usersService.getUsers().subscribe(data => {
            this.users = data;
        });
    }
    updateUser() {
        let user = this.updateForm.value;
        this.usersService.updateUser(user).subscribe(data => {
            this.submitted = true;
        });
    }
    deleteUser(index) {
        let user = this.users[index];
        this.usersService.deleteUser(user).subscribe(data => {
            this.users.splice(index, 1);
        });
    }
};
AllUsersComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AllUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/all-users/all-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-users.component.css */ "./src/app/assignments/users/all-users/all-users.component.css")).default]
    })
], AllUsersComponent);



/***/ }),

/***/ "./src/app/assignments/users/users.component.css":
/*!*******************************************************!*\
  !*** ./src/app/assignments/users/users.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/assignments/users/users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/users/users.component.ts ***!
  \******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsersComponent = class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/assignments/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/careers/careers.component.css":
/*!***********************************************!*\
  !*** ./src/app/careers/careers.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/careers/careers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/careers/careers.component.ts ***!
  \**********************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CareersComponent = class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
};
CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-careers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./careers.component.css */ "./src/app/careers/careers.component.css")).default]
    })
], CareersComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav #services {\r\n  display: block !important;\r\n}\r\n\r\n#services {\r\n  position: absolute;\r\n  top: 67px;\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav li {\r\n  flex: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgI3NlcnZpY2VzIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2VydmljZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY3cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ubmF2YmFyLW5hdiBsaSB7XHJcbiAgZmxleDogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.isLoggedIn = false;
        this.showModeratorBoard = false;
        this.showAdminBoard = false;
    }
    ngOnInit() {
        this.refreshHeader();
        this.authService.isLoggedIn.subscribe(info => {
            this.refreshHeader();
        });
    }
    refreshHeader() {
        if (this.tokenStorage.getToken()) {
            const user = this.tokenStorage.getUser();
            this.isLoggedIn = true;
            this.username = user.username;
            this.showAdminBoard = user.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = user.roles.includes('ROLE_MODERATOR');
        }
        else {
            this.isLoggedIn = false;
            this.username = null;
            this.showAdminBoard = false;
            this.showModeratorBoard = false;
        }
    }
    logout() {
        this.tokenStorage.signOut();
        this.authService.isLoggedIn.next(false);
        this.router.navigate(['final/p01']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/industries/industries.component.css":
/*!*****************************************************!*\
  !*** ./src/app/industries/industries.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/industries/industries.component.ts":
/*!****************************************************!*\
  !*** ./src/app/industries/industries.component.ts ***!
  \****************************************************/
/*! exports provided: IndustriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function() { return IndustriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndustriesComponent = class IndustriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndustriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-industries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industries.component.css */ "./src/app/industries/industries.component.css")).default]
    })
], IndustriesComponent);



/***/ }),

/***/ "./src/app/insights/insights-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/insights/insights-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InsightsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsRoutingModule", function() { return InsightsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _insights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insights.component */ "./src/app/insights/insights.component.ts");




const routes = [
    { path: '', component: _insights_component__WEBPACK_IMPORTED_MODULE_3__["InsightsComponent"] }
];
let InsightsRoutingModule = class InsightsRoutingModule {
};
InsightsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InsightsRoutingModule);



/***/ }),

/***/ "./src/app/insights/insights.component.css":
/*!*************************************************!*\
  !*** ./src/app/insights/insights.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHRzL2luc2lnaHRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/insights/insights.component.ts":
/*!************************************************!*\
  !*** ./src/app/insights/insights.component.ts ***!
  \************************************************/
/*! exports provided: InsightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsComponent", function() { return InsightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InsightsComponent = class InsightsComponent {
    constructor() { }
    ngOnInit() {
    }
};
InsightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insights',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insights.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/insights/insights.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insights.component.css */ "./src/app/insights/insights.component.css")).default]
    })
], InsightsComponent);



/***/ }),

/***/ "./src/app/insights/insights.module.ts":
/*!*********************************************!*\
  !*** ./src/app/insights/insights.module.ts ***!
  \*********************************************/
/*! exports provided: InsightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsModule", function() { return InsightsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _insights_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insights-routing.module */ "./src/app/insights/insights-routing.module.ts");
/* harmony import */ var _insights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insights.component */ "./src/app/insights/insights.component.ts");





let InsightsModule = class InsightsModule {
};
InsightsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _insights_component__WEBPACK_IMPORTED_MODULE_4__["InsightsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _insights_routing_module__WEBPACK_IMPORTED_MODULE_3__["InsightsRoutingModule"]
        ]
    })
], InsightsModule);



/***/ }),

/***/ "./src/app/list-of-registered-users/list-of-registered-users.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/list-of-registered-users/list-of-registered-users.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtb2YtcmVnaXN0ZXJlZC11c2Vycy9saXN0LW9mLXJlZ2lzdGVyZWQtdXNlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/list-of-registered-users/list-of-registered-users.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/list-of-registered-users/list-of-registered-users.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListOfRegisteredUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfRegisteredUsersComponent", function() { return ListOfRegisteredUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/users.service */ "./src/app/_services/users.service.ts");




let ListOfRegisteredUsersComponent = class ListOfRegisteredUsersComponent {
    //@ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
    //@ViewChild('nameInput',{static: false,read:ElementRef}) someInput: ElementRef;
    constructor(usersService) {
        this.usersService = usersService;
        this.allUser = [];
        this.usersFromChild = [];
        this.user = {
            name: "Alex"
        };
    }
    ngOnInit() {
        //this.firstname.nativeElement.style.border = "3px dashed green";
        this.usersService.getUsers().subscribe((json) => this.allUser = json);
    }
    ngAfterViewInit() {
        this.usersFromChild = this.child.message;
        //this.someInput.nativeElement.value = "Jugal";
        //this.firstname.nativeElement.style.border = "3px dashed green";
    }
    ngAfterViewChecked() {
        this.usersFromChild = this.child.usersData;
    }
    getRegisteredUser(event) {
        this.usersService.createUser(event).subscribe(json => this.allUser.push(event));
    }
};
ListOfRegisteredUsersComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"], { static: true })
], ListOfRegisteredUsersComponent.prototype, "child", void 0);
ListOfRegisteredUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-of-registered-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-of-registered-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-of-registered-users/list-of-registered-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-of-registered-users.component.css */ "./src/app/list-of-registered-users/list-of-registered-users.component.css")).default]
    })
], ListOfRegisteredUsersComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".global-container {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\nform {\r\n  padding-top: 10px;\r\n  font-size: 14px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.card-title {\r\n  font-weight: 300;\r\n}\r\n\r\n.btn {\r\n  font-size: 14px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-form {\r\n  width: 330px;\r\n  margin: 20px;\r\n}\r\n\r\n.sign-up {\r\n  text-align: center;\r\n  padding: 20px 0 0;\r\n}\r\n\r\n.alert {\r\n  margin-bottom: -30px;\r\n  font-size: 13px;\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWwtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnbi11cCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    //model:any;
    constructor() {
    }
    ngOnInit() {
    }
    onSubmit() {
        event.preventDefault();
        console.log(this.user);
        console.log(this.pass);
        sessionStorage.setItem('Username', this.user);
        sessionStorage.setItem('Password', this.pass);
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/services-list/services-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/services-list/services-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/services-list/services-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/services-list/services-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesListComponent", function() { return ServicesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesListComponent = class ServicesListComponent {
    constructor() { }
    ngOnInit() {
        this.homePageServices = [
            {
                imgName: 'suppy-chain',
                title: 'Supply Chain',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'banking',
                title: 'banking',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'ai',
                title: 'Artificial intelligence',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'business',
                title: 'Business Strategy',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'suppy-chain',
                title: 'Supply Chain',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'banking',
                title: 'banking',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'ai',
                title: 'Artificial intelligence',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            },
            {
                imgName: 'business',
                title: 'Business Strategy',
                heading: 'Lorem Ipsum is simply dummy',
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
            }
        ];
    }
    trackByFn(index) {
        return index;
    }
};
ServicesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services-list/services-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services-list.component.css */ "./src/app/services-list/services-list.component.css")).default]
    })
], ServicesListComponent);



/***/ }),

/***/ "./src/app/services/ai/ai.component.css":
/*!**********************************************!*\
  !*** ./src/app/services/ai/ai.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2FpL2FpLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/ai/ai.component.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ai/ai.component.ts ***!
  \*********************************************/
/*! exports provided: AiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiComponent", function() { return AiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AiComponent = class AiComponent {
    constructor(route) {
        this.route = route;
        // this.types = route.snapshot.queryParamMap.get('types');
        // this.version = route.snapshot.queryParamMap.get('version');
        // this.released = route.snapshot.queryParamMap.get('released');
        // console.log(this.types,this.version,this.released);
        console.log(route.snapshot.queryParams);
        var { types, version, released } = route.snapshot.queryParams;
        // this.types = types;
        // this.version = version;
        // this.released = released;
        console.log(types, version, released);
    }
    ngOnInit() {
        console.log(this.types, this.version, this.released);
    }
};
AiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/ai/ai.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ai.component.css */ "./src/app/services/ai/ai.component.css")).default]
    })
], AiComponent);



/***/ }),

/***/ "./src/app/services/banking/banking-description/banking-description.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/services/banking/banking-description/banking-description.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2JhbmtpbmcvYmFua2luZy1kZXNjcmlwdGlvbi9iYW5raW5nLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/banking/banking-description/banking-description.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/banking/banking-description/banking-description.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BankingDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingDescriptionComponent", function() { return BankingDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BankingDescriptionComponent = class BankingDescriptionComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.childDescObj);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('description')
], BankingDescriptionComponent.prototype, "childDescObj", void 0);
BankingDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banking-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banking-description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking-description/banking-description.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banking-description.component.css */ "./src/app/services/banking/banking-description/banking-description.component.css")).default]
    })
], BankingDescriptionComponent);



/***/ }),

/***/ "./src/app/services/banking/banking-title/banking-title.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/services/banking/banking-title/banking-title.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2JhbmtpbmcvYmFua2luZy10aXRsZS9iYW5raW5nLXRpdGxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/banking/banking-title/banking-title.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/banking/banking-title/banking-title.component.ts ***!
  \***************************************************************************/
/*! exports provided: BankingTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingTitleComponent", function() { return BankingTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let BankingTitleComponent = class BankingTitleComponent {
    constructor() {
        this.updateInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000)
            .subscribe(data => {
            this.bankingDetails = {
                updateBy: 'murali',
                updatedOn: '17/06/2021'
            };
            this.updateInfo.emit(this.bankingDetails);
        });
    }
    ngOnInit() {
        console.log(this.titleText);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')
], BankingTitleComponent.prototype, "titleText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BankingTitleComponent.prototype, "updateInfo", void 0);
BankingTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banking-title',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banking-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking-title/banking-title.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banking-title.component.css */ "./src/app/services/banking/banking-title/banking-title.component.css")).default]
    })
], BankingTitleComponent);



/***/ }),

/***/ "./src/app/services/banking/banking.component.css":
/*!********************************************************!*\
  !*** ./src/app/services/banking/banking.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2JhbmtpbmcvYmFua2luZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/services/banking/banking.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/banking/banking.component.ts ***!
  \*******************************************************/
/*! exports provided: BankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingComponent", function() { return BankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BankingComponent = class BankingComponent {
    constructor() {
        this.parentDescObj = {};
        this.parentTitle = 'Supply chain transformation on the cloud';
    }
    ngOnInit() {
        this.parentDescObj = {
            heading: 'What’s the true value of the cloud?123',
            details: 'Throughout the pandemic, all eyes have been on the supply chain. Supply chain leaders have been challenged to figure out how to quickly, cost-effectively, and responsibly meet ever-changing demand while ensuring their supply chains are as flexible as possible. If COVID-19 has taught us one thing, it’s that we can’t simply optimize for what the new normal is. There is no new normal. If a supply chain is to survive, it has to be resilient forever, so it can continuously evolve to respond effectively to whatever’s thrown at it.'
        };
        console.log(this.bankingInfoByChild);
    }
    bankingDetailsHandler(event) {
        this.bankingInfoByChild = event;
    }
};
BankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/banking/banking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banking.component.css */ "./src/app/services/banking/banking.component.css")).default]
    })
], BankingComponent);



/***/ }),

/***/ "./src/app/services/business-strategy/business-strategy.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/services/business-strategy/business-strategy.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2J1c2luZXNzLXN0cmF0ZWd5L2J1c2luZXNzLXN0cmF0ZWd5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/business-strategy/business-strategy.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/business-strategy/business-strategy.component.ts ***!
  \***************************************************************************/
/*! exports provided: BusinessStrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessStrategyComponent", function() { return BusinessStrategyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BusinessStrategyComponent = class BusinessStrategyComponent {
    constructor() { }
    ngOnInit() {
    }
};
BusinessStrategyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business-strategy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./business-strategy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/business-strategy/business-strategy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./business-strategy.component.css */ "./src/app/services/business-strategy/business-strategy.component.css")).default]
    })
], BusinessStrategyComponent);



/***/ }),

/***/ "./src/app/services/finance/finance.component.css":
/*!********************************************************!*\
  !*** ./src/app/services/finance/finance.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2ZpbmFuY2UvZmluYW5jZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/services/finance/finance.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/finance/finance.component.ts ***!
  \*******************************************************/
/*! exports provided: FinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceComponent", function() { return FinanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinanceComponent = class FinanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/finance/finance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance.component.css */ "./src/app/services/finance/finance.component.css")).default]
    })
], FinanceComponent);



/***/ }),

/***/ "./src/app/services/service-not-found/service-not-found.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/services/service-not-found/service-not-found.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2Utbm90LWZvdW5kL3NlcnZpY2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/service-not-found/service-not-found.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/service-not-found/service-not-found.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNotFoundComponent", function() { return ServiceNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceNotFoundComponent = class ServiceNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/service-not-found/service-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-not-found.component.css */ "./src/app/services/service-not-found/service-not-found.component.css")).default]
    })
], ServiceNotFoundComponent);



/***/ }),

/***/ "./src/app/services/services-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai/ai.component */ "./src/app/services/ai/ai.component.ts");
/* harmony import */ var _banking_banking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banking/banking.component */ "./src/app/services/banking/banking.component.ts");
/* harmony import */ var _business_strategy_business_strategy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-strategy/business-strategy.component */ "./src/app/services/business-strategy/business-strategy.component.ts");
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finance/finance.component */ "./src/app/services/finance/finance.component.ts");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _supply_chain_supply_chain_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supply-chain/supply-chain.component */ "./src/app/services/supply-chain/supply-chain.component.ts");









const routes = [
    {
        path: '', component: _services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"]
    },
    {
        path: 'supply-chain', component: _supply_chain_supply_chain_component__WEBPACK_IMPORTED_MODULE_8__["SupplyChainComponent"]
    },
    {
        path: 'banking', component: _banking_banking_component__WEBPACK_IMPORTED_MODULE_4__["BankingComponent"]
    },
    {
        path: 'banking/finance', component: _finance_finance_component__WEBPACK_IMPORTED_MODULE_6__["FinanceComponent"]
    },
    {
        path: 'ai', component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_3__["AiComponent"]
    },
    {
        path: 'business-strategy', component: _business_strategy_business_strategy_component__WEBPACK_IMPORTED_MODULE_5__["BusinessStrategyComponent"]
    }
    // {
    //   path: '**', component: ServiceNotFoundComponent
    // }
];
let ServicesRoutingModule = class ServicesRoutingModule {
};
ServicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ServicesRoutingModule);



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ServicesComponent = class ServicesComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
        this.homePageServices = [
            {
                imgName: 'suppy-chain',
                title: 'Supply Chain',
                heading: 'Supply chain transformation on the cloud',
                description: 'Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains.'
            },
            {
                imgName: 'banking',
                title: 'banking',
                heading: 'Driving powerfull transformation for banks',
                description: 'Learn how a purpose-driven strategy is about doing the right thing for customers and society--and also a powerful way to drive growth.'
            },
            {
                imgName: 'ai',
                title: 'Artificial intelligence',
                heading: 'Change how you work with AI',
                description: 'Professionalize your approach to AI to change what’s possible for your business.'
            },
            {
                imgName: 'business',
                title: 'Business Strategy',
                heading: 'Make the leap, take the lead',
                description: 'Leaders have doubled down on tech—and are growing 5x faster than Laggards.'
            }
        ];
    }
    trackByFn(index) {
        return index;
    }
    componentRedirect(title) {
        event.preventDefault();
        if (title === "suppy-chain") {
            this._router.navigate(['services/supply-chain']);
        }
        else if (title === 'banking') {
            this._router.navigate(['services/banking', 'finance']);
        }
        else if (title === 'ai') {
            this._router.navigate(['services/ai'], { queryParams: { types: 'popular', version: '1.0', released: '15-06-2021' } });
        }
        else if (title === "business") {
            this._router.navigate(['services/business-strategy']);
        }
    }
};
ServicesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/services/services-routing.module.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _supply_chain_supply_chain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supply-chain/supply-chain.component */ "./src/app/services/supply-chain/supply-chain.component.ts");
/* harmony import */ var _banking_banking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banking/banking.component */ "./src/app/services/banking/banking.component.ts");
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ai/ai.component */ "./src/app/services/ai/ai.component.ts");
/* harmony import */ var _business_strategy_business_strategy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./business-strategy/business-strategy.component */ "./src/app/services/business-strategy/business-strategy.component.ts");
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finance/finance.component */ "./src/app/services/finance/finance.component.ts");
/* harmony import */ var _service_not_found_service_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service-not-found/service-not-found.component */ "./src/app/services/service-not-found/service-not-found.component.ts");
/* harmony import */ var _banking_banking_title_banking_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banking/banking-title/banking-title.component */ "./src/app/services/banking/banking-title/banking-title.component.ts");
/* harmony import */ var _banking_banking_description_banking_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./banking/banking-description/banking-description.component */ "./src/app/services/banking/banking-description/banking-description.component.ts");













let ServicesModule = class ServicesModule {
};
ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], _supply_chain_supply_chain_component__WEBPACK_IMPORTED_MODULE_5__["SupplyChainComponent"], _banking_banking_component__WEBPACK_IMPORTED_MODULE_6__["BankingComponent"], _ai_ai_component__WEBPACK_IMPORTED_MODULE_7__["AiComponent"], _business_strategy_business_strategy_component__WEBPACK_IMPORTED_MODULE_8__["BusinessStrategyComponent"], _finance_finance_component__WEBPACK_IMPORTED_MODULE_9__["FinanceComponent"], _service_not_found_service_not_found_component__WEBPACK_IMPORTED_MODULE_10__["ServiceNotFoundComponent"], _banking_banking_title_banking_title_component__WEBPACK_IMPORTED_MODULE_11__["BankingTitleComponent"], _banking_banking_description_banking_description_component__WEBPACK_IMPORTED_MODULE_12__["BankingDescriptionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicesRoutingModule"]
        ]
    })
], ServicesModule);



/***/ }),

/***/ "./src/app/services/supply-chain/supply-chain.component.css":
/*!******************************************************************!*\
  !*** ./src/app/services/supply-chain/supply-chain.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3N1cHBseS1jaGFpbi9zdXBwbHktY2hhaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/services/supply-chain/supply-chain.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/supply-chain/supply-chain.component.ts ***!
  \*****************************************************************/
/*! exports provided: SupplyChainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyChainComponent", function() { return SupplyChainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupplyChainComponent = class SupplyChainComponent {
    constructor() {
        this.title = 'Supply Chain Management';
    }
    ngOnChanges() {
        console.log('ng Onchanges');
    }
    ngOnInit() {
        console.log('NgOninit');
    }
    ngDoCheck() {
        console.log('ngDoCheck()');
    }
    ngAfterContentInit() {
        console.log('NgAftercontentInit()');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked()');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit()');
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked()');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy()');
    }
};
SupplyChainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supply-chain',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./supply-chain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/supply-chain/supply-chain.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./supply-chain.component.css */ "./src/app/services/supply-chain/supply-chain.component.css")).default]
    })
], SupplyChainComponent);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SignUpComponent = class SignUpComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.message = "This is child Message";
        this.PostData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submited = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngAfterViewInit() {
        this.firstname.nativeElement.style.border = "3px dashed green";
    }
    get f() {
        return this.registerForm.controls;
    }
    onScroll(event) {
        // console.log('On scroll in Signup Component');
    }
    handleSubmit() {
        this.submited = true;
        this.usersData = this.registerForm.value;
        this.PostData.emit(this.usersData);
        // this.message = "This is child Message Updated";
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SignUpComponent.prototype, "PostData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('user')
], SignUpComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fname', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], SignUpComponent.prototype, "firstname", void 0);
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slider/slider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")).default]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.css":
/*!*********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.ts ***!
  \********************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnauthorizedComponent = class UnauthorizedComponent {
    constructor() { }
    ngOnInit() {
    }
};
UnauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unauthorized',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unauthorized.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unauthorized.component.css */ "./src/app/unauthorized/unauthorized.component.css")).default]
    })
], UnauthorizedComponent);



/***/ }),

/***/ "./src/app/user-data-display/user-data-display.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-data-display/user-data-display.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGF0YS1kaXNwbGF5L3VzZXItZGF0YS1kaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-data-display/user-data-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-data-display/user-data-display.component.ts ***!
  \******************************************************************/
/*! exports provided: UserDataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataDisplayComponent", function() { return UserDataDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/users.service */ "./src/app/_services/users.service.ts");




let UserDataDisplayComponent = class UserDataDisplayComponent {
    constructor(formBuilder, usersService) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
    }
    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            id: [''],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngAfterViewChecked() {
        if (this.UserList.length > 0) {
        }
    }
    updateUser(user) {
        this.updateForm.setValue(user);
    }
    handleSubmit() {
        let user = this.updateForm.value;
        this.usersService.updateUser(user)
            .subscribe(() => {
            let i = this.UserList.findIndex(u => u.id == user.id);
            this.UserList[i] = user;
        });
        this.updateForm.reset();
    }
    deleteUser(user) {
        this.usersService.deleteUser(user)
            .subscribe(() => {
            let i = this.UserList.findIndex(u => u.id == user.id);
            this.UserList.splice(i, 1);
        });
    }
};
UserDataDisplayComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userList')
], UserDataDisplayComponent.prototype, "UserList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('m', { static: false })
], UserDataDisplayComponent.prototype, "modUpdate", void 0);
UserDataDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-data-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-data-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-data-display/user-data-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-data-display.component.css */ "./src/app/user-data-display/user-data-display.component.css")).default]
    })
], UserDataDisplayComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiHost: 'https://jsonplaceholder.typicode.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ngcho\Desktop\angular\project-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map