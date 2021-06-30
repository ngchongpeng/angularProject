function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["final-final-module"], {
  /***/
  "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js":
  /*!**********************************************************!*\
    !*** ./node_modules/ngx-echarts/fesm2015/ngx-echarts.js ***!
    \**********************************************************/

  /*! exports provided: NGX_ECHARTS_CONFIG, NgxEchartsDirective, NgxEchartsModule */

  /***/
  function node_modulesNgxEchartsFesm2015NgxEchartsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGX_ECHARTS_CONFIG", function () {
      return NGX_ECHARTS_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxEchartsDirective", function () {
      return NgxEchartsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxEchartsModule", function () {
      return NgxEchartsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! resize-observer-polyfill */
    "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ChangeFilter = /*#__PURE__*/function () {
      function ChangeFilter(changes) {
        _classCallCheck(this, ChangeFilter);

        this.changes = changes;
      }

      _createClass(ChangeFilter, [{
        key: "notEmpty",
        value: function notEmpty(key) {
          if (this.changes[key]) {
            var value = this.changes[key].currentValue;

            if (value !== undefined && value !== null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
            }
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }, {
        key: "has",
        value: function has(key) {
          if (this.changes[key]) {
            var value = this.changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }, {
        key: "notFirst",
        value: function notFirst(key) {
          if (this.changes[key] && !this.changes[key].isFirstChange()) {
            var value = this.changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }, {
        key: "notFirstAndEmpty",
        value: function notFirstAndEmpty(key) {
          if (this.changes[key] && !this.changes[key].isFirstChange()) {
            var value = this.changes[key].currentValue;

            if (value !== undefined && value !== null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
            }
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
      }], [{
        key: "of",
        value: function of(changes) {
          return new ChangeFilter(changes);
        }
      }]);

      return ChangeFilter;
    }();

    var NGX_ECHARTS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGX_ECHARTS_CONFIG');

    var NgxEchartsDirective = /*#__PURE__*/function () {
      function NgxEchartsDirective(config, el, ngZone) {
        _classCallCheck(this, NgxEchartsDirective);

        this.el = el;
        this.ngZone = ngZone;
        this.autoResize = true;
        this.loadingType = 'default'; // ngx-echarts events

        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.optionsError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // echarts mouse events

        this.chartClick = this.createLazyEvent('click');
        this.chartDblClick = this.createLazyEvent('dblclick');
        this.chartMouseDown = this.createLazyEvent('mousedown');
        this.chartMouseMove = this.createLazyEvent('mousemove');
        this.chartMouseUp = this.createLazyEvent('mouseup');
        this.chartMouseOver = this.createLazyEvent('mouseover');
        this.chartMouseOut = this.createLazyEvent('mouseout');
        this.chartGlobalOut = this.createLazyEvent('globalout');
        this.chartContextMenu = this.createLazyEvent('contextmenu'); // echarts mouse events

        this.chartLegendSelectChanged = this.createLazyEvent('legendselectchanged');
        this.chartLegendSelected = this.createLazyEvent('legendselected');
        this.chartLegendUnselected = this.createLazyEvent('legendunselected');
        this.chartLegendScroll = this.createLazyEvent('legendscroll');
        this.chartDataZoom = this.createLazyEvent('datazoom');
        this.chartDataRangeSelected = this.createLazyEvent('datarangeselected');
        this.chartTimelineChanged = this.createLazyEvent('timelinechanged');
        this.chartTimelinePlayChanged = this.createLazyEvent('timelineplaychanged');
        this.chartRestore = this.createLazyEvent('restore');
        this.chartDataViewChanged = this.createLazyEvent('dataviewchanged');
        this.chartMagicTypeChanged = this.createLazyEvent('magictypechanged');
        this.chartPieSelectChanged = this.createLazyEvent('pieselectchanged');
        this.chartPieSelected = this.createLazyEvent('pieselected');
        this.chartPieUnselected = this.createLazyEvent('pieunselected');
        this.chartMapSelectChanged = this.createLazyEvent('mapselectchanged');
        this.chartMapSelected = this.createLazyEvent('mapselected');
        this.chartMapUnselected = this.createLazyEvent('mapunselected');
        this.chartAxisAreaSelected = this.createLazyEvent('axisareaselected');
        this.chartFocusNodeAdjacency = this.createLazyEvent('focusnodeadjacency');
        this.chartUnfocusNodeAdjacency = this.createLazyEvent('unfocusnodeadjacency');
        this.chartBrush = this.createLazyEvent('brush');
        this.chartBrushEnd = this.createLazyEvent('brushend');
        this.chartBrushSelected = this.createLazyEvent('brushselected');
        this.chartRendered = this.createLazyEvent('rendered');
        this.chartFinished = this.createLazyEvent('finished');
        this.animationFrameID = null;
        this.echarts = config.echarts;
      }

      _createClass(NgxEchartsDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this2 = this;

          var filter = ChangeFilter.of(changes);
          filter.notFirstAndEmpty('options').subscribe(function (opt) {
            return _this2.onOptionsChange(opt);
          });
          filter.notFirstAndEmpty('merge').subscribe(function (opt) {
            return _this2.setOption(opt);
          });
          filter.has('loading').subscribe(function (v) {
            return _this2.toggleLoading(!!v);
          });
          filter.notFirst('theme').subscribe(function () {
            return _this2.refreshChart();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.autoResize) {
            this.resizeSub = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function () {
              _this3.animationFrameID = window.requestAnimationFrame(function () {
                return _this3.resize();
              });
            });
            this.resizeSub.observe(this.el.nativeElement);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizeSub) {
            this.resizeSub.unobserve(this.el.nativeElement);
            window.cancelAnimationFrame(this.animationFrameID);
          }

          this.dispose();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          setTimeout(function () {
            return _this4.initChart();
          });
        }
      }, {
        key: "dispose",
        value: function dispose() {
          if (this.chart) {
            this.chart.dispose();
            this.chart = null;
          }
        }
        /**
         * resize chart
         */

      }, {
        key: "resize",
        value: function resize() {
          if (this.chart) {
            this.chart.resize();
          }
        }
      }, {
        key: "toggleLoading",
        value: function toggleLoading(loading) {
          if (this.chart) {
            loading ? this.chart.showLoading(this.loadingType, this.loadingOpts) : this.chart.hideLoading();
          }
        }
      }, {
        key: "setOption",
        value: function setOption(option, opts) {
          if (this.chart) {
            try {
              this.chart.setOption(option, opts);
            } catch (e) {
              console.error(e);
              this.optionsError.emit(e);
            }
          }
        }
        /**
         * dispose old chart and create a new one.
         */

      }, {
        key: "refreshChart",
        value: function refreshChart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dispose();
                    _context.next = 3;
                    return this.initChart();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "createChart",
        value: function createChart() {
          var _this5 = this;

          var dom = this.el.nativeElement;

          if (window && window.getComputedStyle) {
            var prop = window.getComputedStyle(dom, null).getPropertyValue('height');

            if ((!prop || prop === '0px') && (!dom.style.height || dom.style.height === '0px')) {
              dom.style.height = '400px';
            }
          } // here a bit tricky: we check if the echarts module is provided as function returning native import('...') then use the promise
          // otherwise create the function that imitates behaviour above with a provided as is module


          return this.ngZone.runOutsideAngular(function () {
            var load = typeof _this5.echarts === 'function' ? _this5.echarts : function () {
              return Promise.resolve(_this5.echarts);
            };
            return load().then(function (_ref) {
              var init = _ref.init;
              return init(dom, _this5.theme, _this5.initOpts);
            });
          });
        }
      }, {
        key: "initChart",
        value: function initChart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.onOptionsChange(this.options);

                  case 2:
                    if (this.merge && this.chart) {
                      this.setOption(this.merge);
                    }

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onOptionsChange",
        value: function onOptionsChange(opt) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (opt) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    if (!this.chart) {
                      _context3.next = 6;
                      break;
                    }

                    this.setOption(this.options, true);
                    _context3.next = 11;
                    break;

                  case 6:
                    _context3.next = 8;
                    return this.createChart();

                  case 8:
                    this.chart = _context3.sent;
                    this.chartInit.emit(this.chart);
                    this.setOption(this.options, true);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // allows to lazily bind to only those events that are requested through the `@Output` by parent components
        // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info

      }, {
        key: "createLazyEvent",
        value: function createLazyEvent(eventName) {
          var _this6 = this;

          return this.chartInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (chart) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              chart.on(eventName, function (data) {
                return _this6.ngZone.run(function () {
                  return observer.next(data);
                });
              });
              return function () {
                return chart.off(eventName);
              };
            });
          }));
        }
      }]);

      return NgxEchartsDirective;
    }();

    NgxEchartsDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [NGX_ECHARTS_CONFIG]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "initOpts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "merge", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "autoResize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "loadingType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxEchartsDirective.prototype, "loadingOpts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "optionsError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartGlobalOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendSelectChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendUnselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartLegendScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDataZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDataRangeSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartTimelineChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartTimelinePlayChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartRestore", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartDataViewChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMagicTypeChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartPieSelectChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartPieSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartPieUnselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMapSelectChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMapSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartMapUnselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartAxisAreaSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartFocusNodeAdjacency", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartUnfocusNodeAdjacency", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartBrush", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartBrushEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartBrushSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartRendered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxEchartsDirective.prototype, "chartFinished", void 0);
    NgxEchartsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'echarts, [echarts]',
      exportAs: 'echarts'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGX_ECHARTS_CONFIG))], NgxEchartsDirective);
    var NgxEchartsModule_1;

    var NgxEchartsModule = NgxEchartsModule_1 = /*#__PURE__*/function () {
      function NgxEchartsModule() {
        _classCallCheck(this, NgxEchartsModule);
      }

      _createClass(NgxEchartsModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: NgxEchartsModule_1,
            providers: [{
              provide: NGX_ECHARTS_CONFIG,
              useValue: config
            }]
          };
        }
      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: NgxEchartsModule_1
          };
        }
      }]);

      return NgxEchartsModule;
    }();

    NgxEchartsModule = NgxEchartsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [],
      declarations: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    })], NgxEchartsModule);
    /*
     * Public API Surface of ngx-echarts
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-echarts.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p01/p01.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/p01/p01.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalP01P01ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"margin-top: 20px;\">\n    <div *ngIf=\"!isLoggedIn\" class=\"card\">\n        <div class=\"card-body\">\n            <h3 class=\"text-center\">Login</h3>\n            <div class=\"card-text\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\"\n                            #username=\"ngModel\" required email>\n                        <div *ngIf=\"username.invalid && username.touched\">\n                            <p *ngIf=\"username.errors.required\">\n                                Email field can't be blank\n                            </p>\n                            <p *ngIf=\"username.errors.email\">\n                                Email field should be a valid email\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" class=\"form-control\" #password=\"ngModel\" name=\"password\"\n                            [(ngModel)]=\"form.password\" #password=\"ngModel\" required>\n                        <div *ngIf=\"password.invalid && password.touched\">\n                            <p *ngIf=\"password.errors.required\">\n                                Password field can't be blank\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <br><button type=\"submit\" class=\"btn btn-primary btn-block\"\n                            [disabled]=\"f.invalid\">Login</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n        Logged in as {{ roles }}.\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p02/p02.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/p02/p02.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalP02P02ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h3>Profile</h3>\r\n    <p>\r\n        Username: {{ user?.username }}\r\n    </p>\r\n    <p>\r\n        Token: {{ user?.accessToken }}\r\n    </p>\r\n    <p>\r\n        Roles: {{ user?.roles }}\r\n    </p>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p03/p03.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/p03/p03.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalP03P03ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Welcome to moderator board!</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p04/p04.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/p04/p04.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalP04P04ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Welcome to admin board!</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p05/p05.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/p05/p05.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalP05P05ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h3>Angular Concepts</h3>\n\n    <p *ngFor=\"let c of concepts\" style=\"border: 1px solid grey; margin-top: 10px; max-width: 50%;\">\n        {{ c }}\n    </p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p06/p06.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/p06/p06.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinalP06P06ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div echarts [options]=\"options\" class=\"demo-chart\"></div>";
    /***/
  },

  /***/
  "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesResizeObserverPolyfillDistResizeObserverEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */

    /* eslint-disable require-jsdoc, valid-jsdoc */


    var MapShim = function () {
      if (typeof Map !== 'undefined') {
        return Map;
      }
      /**
       * Returns index in provided array that matches the specified key.
       *
       * @param {Array<Array>} arr
       * @param {*} key
       * @returns {number}
       */


      function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
          if (entry[0] === key) {
            result = index;
            return true;
          }

          return false;
        });
        return result;
      }

      return (
        /** @class */
        function () {
          function class_1() {
            this.__entries__ = [];
          }

          Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function get() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          /**
           * @param {*} key
           * @returns {*}
           */

          class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
          };
          /**
           * @param {*} key
           * @param {*} value
           * @returns {void}
           */


          class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
              this.__entries__[index][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype["delete"] = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
              entries.splice(index, 1);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
          };
          /**
           * @returns {void}
           */


          class_1.prototype.clear = function () {
            this.__entries__.splice(0);
          };
          /**
           * @param {Function} callback
           * @param {*} [ctx=null]
           * @returns {void}
           */


          class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }

            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };

          return class_1;
        }()
      );
    }();
    /**
     * Detects whether window and document objects are available in current environment.
     */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

    var global$1 = function () {
      if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
      }

      if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
      }

      if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
      } // eslint-disable-next-line no-new-func


      return Function('return this')();
    }();
    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */


    var requestAnimationFrame$1 = function () {
      if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
      }

      return function (callback) {
        return setTimeout(function () {
          return callback(Date.now());
        }, 1000 / 60);
      };
    }(); // Defines minimum timeout before adding a trailing call.


    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */

    function throttle(callback, delay) {
      var leadingCall = false,
          trailingCall = false,
          lastCallTime = 0;
      /**
       * Invokes the original callback function and schedules new invocation if
       * the "proxy" was called during current request.
       *
       * @returns {void}
       */

      function resolvePending() {
        if (leadingCall) {
          leadingCall = false;
          callback();
        }

        if (trailingCall) {
          proxy();
        }
      }
      /**
       * Callback invoked after the specified delay. It will further postpone
       * invocation of the original function delegating it to the
       * requestAnimationFrame.
       *
       * @returns {void}
       */


      function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
      }
      /**
       * Schedules invocation of the original function.
       *
       * @returns {void}
       */


      function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
          // Reject immediately following calls.
          if (timeStamp - lastCallTime < trailingTimeout) {
            return;
          } // Schedule new call to be in invoked when the pending one is resolved.
          // This is important for "transitions" which never actually start
          // immediately so there is a chance that we might miss one if change
          // happens amids the pending invocation.


          trailingCall = true;
        } else {
          leadingCall = true;
          trailingCall = false;
          setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
      }

      return proxy;
    } // Minimum delay before invoking the update of observers.


    var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.

    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */

    var ResizeObserverController =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserverController.
       *
       * @private
       */
      function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */

        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */

        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */

        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      /**
       * Adds observer to observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be added.
       * @returns {void}
       */


      ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        } // Add listeners if they haven't been added yet.


        if (!this.connected_) {
          this.connect_();
        }
      };
      /**
       * Removes observer from observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be removed.
       * @returns {void}
       */


      ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer); // Remove observer if it's present in registry.

        if (~index) {
          observers.splice(index, 1);
        } // Remove listeners if controller has no connected observers.


        if (!observers.length && this.connected_) {
          this.disconnect_();
        }
      };
      /**
       * Invokes the update of observers. It will continue running updates insofar
       * it detects changes.
       *
       * @returns {void}
       */


      ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.

        if (changesDetected) {
          this.refresh();
        }
      };
      /**
       * Updates every observer from observers list and notifies them of queued
       * entries.
       *
       * @private
       * @returns {boolean} Returns "true" if any observer has detected changes in
       *      dimensions of it's elements.
       */


      ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
          return observer.gatherActive(), observer.hasActive();
        }); // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.

        activeObservers.forEach(function (observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      /**
       * Initializes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
          return;
        } // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.


        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener('DOMSubtreeModified', this.refresh);
          this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
      };
      /**
       * Removes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
          return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
          document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      /**
       * "Transitionend" event handler.
       *
       * @private
       * @param {TransitionEvent} event
       * @returns {void}
       */


      ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName,
            propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

        var isReflowProperty = transitionKeys.some(function (key) {
          return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
          this.refresh();
        }
      };
      /**
       * Returns instance of the ResizeObserverController.
       *
       * @returns {ResizeObserverController}
       */


      ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
      };
      /**
       * Holds reference to the controller's instance.
       *
       * @private {ResizeObserverController}
       */


      ResizeObserverController.instance_ = null;
      return ResizeObserverController;
    }();
    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */


    var defineConfigurable = function defineConfigurable(target, props) {
      for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
          value: props[key],
          enumerable: false,
          writable: false,
          configurable: true
        });
      }

      return target;
    };
    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */


    var getWindowOf = function getWindowOf(target) {
      // Assume that the element is an instance of Node, which means that it
      // has the "ownerDocument" property from which we can retrieve a
      // corresponding global object.
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
      // provided element.

      return ownerGlobal || global$1;
    }; // Placeholder of an empty content rectangle.


    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */

    function toFloat(value) {
      return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */


    function getBordersSize(styles) {
      var positions = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
      }

      return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
      }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */


    function getPaddings(styles) {
      var positions = ['top', 'right', 'bottom', 'left'];
      var paddings = {};

      for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
      }

      return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */


    function getSVGContentRect(target) {
      var bbox = target.getBBox();
      return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */


    function getHTMLElementContentRect(target) {
      // Client width & height properties can't be
      // used exclusively as they provide rounded values.
      var clientWidth = target.clientWidth,
          clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
      // detached elements. Though elements with width & height properties less
      // than 0.5 will be discarded as well.
      //
      // Without it we would need to implement separate methods for each of
      // those cases and it's not possible to perform a precise and performance
      // effective test for hidden elements. E.g. even jQuery's ':visible' filter
      // gives wrong results for elements with width & height less than 0.5.

      if (!clientWidth && !clientHeight) {
        return emptyRect;
      }

      var styles = getWindowOf(target).getComputedStyle(target);
      var paddings = getPaddings(styles);
      var horizPad = paddings.left + paddings.right;
      var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
      // only dimensions available to JS that contain non-rounded values. It could
      // be possible to utilize the getBoundingClientRect if only it's data wasn't
      // affected by CSS transformations let alone paddings, borders and scroll bars.

      var width = toFloat(styles.width),
          height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
      // model is applied (except for IE).

      if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
          width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
          height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
      } // Following steps can't be applied to the document's root element as its
      // client[Width/Height] properties represent viewport area of the window.
      // Besides, it's as well not necessary as the <html> itself neither has
      // rendered scroll bars nor it can be clipped.


      if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.

        if (Math.abs(vertScrollbar) !== 1) {
          width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
          height -= horizScrollbar;
        }
      }

      return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    var isSVGGraphicsElement = function () {
      // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
      // interface.
      if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) {
          return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
      } // If it's so, then check that element is at least an instance of the
      // SVGElement and that it has the "getBBox" method.
      // eslint-disable-next-line no-extra-parens


      return function (target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
      };
    }();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    function isDocumentElement(target) {
      return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */


    function getContentRect(target) {
      if (!isBrowser) {
        return emptyRect;
      }

      if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
      }

      return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */


    function createReadOnlyRect(_a) {
      var x = _a.x,
          y = _a.y,
          width = _a.width,
          height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

      var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
      var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

      defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
      });
      return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */


    function createRectInit(x, y, width, height) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }
    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */


    var ResizeObservation =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObservation.
       *
       * @param {Element} target - Element to be observed.
       */
      function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */

        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */

        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      /**
       * Updates content rectangle and tells whether it's width or height properties
       * have changed since the last broadcast.
       *
       * @returns {boolean}
       */


      ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      /**
       * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
       * from the corresponding properties of the last observed content rectangle.
       *
       * @returns {DOMRectInit} Last observed content rectangle.
       */


      ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };

      return ResizeObservation;
    }();

    var ResizeObserverEntry =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObserverEntry.
       *
       * @param {Element} target - Element that is being observed.
       * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
       */
      function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.

        defineConfigurable(this, {
          target: target,
          contentRect: contentRect
        });
      }

      return ResizeObserverEntry;
    }();

    var ResizeObserverSPI =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback function that is invoked
       *      when one of the observed elements changes it's content dimensions.
       * @param {ResizeObserverController} controller - Controller instance which
       *      is responsible for the updates of observer.
       * @param {ResizeObserver} callbackCtx - Reference to the public
       *      ResizeObserver instance which will be passed to callback function.
       */
      function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */

        this.observations_ = new MapShim();

        if (typeof callback !== 'function') {
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      /**
       * Starts observing provided element.
       *
       * @param {Element} target - Element to be observed.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is already being observed.

        if (observations.has(target)) {
          return;
        }

        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this); // Force the update of observations.

        this.controller_.refresh();
      };
      /**
       * Stops observing provided element.
       *
       * @param {Element} target - Element to stop observing.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is not being observed.

        if (!observations.has(target)) {
          return;
        }

        observations["delete"](target);

        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      /**
       * Stops observing all elements.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      /**
       * Collects observation instances the associated element of which has changed
       * it's content rectangle.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;

        this.clearActive();
        this.observations_.forEach(function (observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      /**
       * Invokes initial callback function with a list of ResizeObserverEntry
       * instances collected from active resize observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
          return;
        }

        var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

        var entries = this.activeObservations_.map(function (observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      /**
       * Clears the collection of active observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      };
      /**
       * Tells whether observer has active observations.
       *
       * @returns {boolean}
       */


      ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      };

      return ResizeObserverSPI;
    }(); // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.


    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */

    var ResizeObserver =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback that is invoked when
       *      dimensions of the observed elements change.
       */
      function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
          throw new TypeError('Cannot call a class as a function.');
        }

        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        }

        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }

      return ResizeObserver;
    }(); // Expose public methods of ResizeObserver.


    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
      ResizeObserver.prototype[method] = function () {
        var _a;

        return (_a = observers.get(this))[method].apply(_a, arguments);
      };
    });

    var index = function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
      }

      return ResizeObserver;
    }();
    /* harmony default export */


    __webpack_exports__["default"] = index;
    /***/
  },

  /***/
  "./src/app/_guards/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/_guards/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var result = this.authService.isLoggedIn.getValue();
          if (result) return true;else return this.router.createUrlTree(['/unauthorized']);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_services/concepts.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/concepts.service.ts ***!
    \***********************************************/

  /*! exports provided: ConceptsService */

  /***/
  function srcApp_servicesConceptsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConceptsService", function () {
      return ConceptsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var API_URL = 'http://localhost:5000';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ConceptsService = /*#__PURE__*/function () {
      function ConceptsService(http) {
        _classCallCheck(this, ConceptsService);

        this.http = http;
      }

      _createClass(ConceptsService, [{
        key: "getConcepts",
        value: function getConcepts() {
          // return this.http.get(
          //   API_URL + '/concepts'
          // );
          var obs$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (consumer) {
            var concepts = ['routing', 'route guards', 'lazy loaded modules', 'string interpolation', 'property binding', 'event binding', 'two way binding', 'template variables', '@ViewChild()', 'td form', 'reactive form', 'form validation', 'services', 'http calls', 'http interceptors', 'directives', 'rxjs', 'authentication & authorization', 'pipes', 'component lifecycles', 'change detection'];
            consumer.next(concepts);
            consumer.complete();
          });
          return obs$;
        }
      }]);

      return ConceptsService;
    }();

    ConceptsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ConceptsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ConceptsService);
    /***/
  },

  /***/
  "./src/app/final/final-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/final/final-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: FinalRoutingModule */

  /***/
  function srcAppFinalFinalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalRoutingModule", function () {
      return FinalRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_guards/auth.guard */
    "./src/app/_guards/auth.guard.ts");
    /* harmony import */


    var _p01_p01_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./p01/p01.component */
    "./src/app/final/p01/p01.component.ts");
    /* harmony import */


    var _p02_p02_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./p02/p02.component */
    "./src/app/final/p02/p02.component.ts");
    /* harmony import */


    var _p03_p03_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./p03/p03.component */
    "./src/app/final/p03/p03.component.ts");
    /* harmony import */


    var _p04_p04_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./p04/p04.component */
    "./src/app/final/p04/p04.component.ts");
    /* harmony import */


    var _p05_p05_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./p05/p05.component */
    "./src/app/final/p05/p05.component.ts");
    /* harmony import */


    var _p06_p06_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./p06/p06.component */
    "./src/app/final/p06/p06.component.ts");

    var routes = [{
      path: 'p01',
      component: _p01_p01_component__WEBPACK_IMPORTED_MODULE_4__["P01Component"]
    }, {
      path: 'p02',
      component: _p02_p02_component__WEBPACK_IMPORTED_MODULE_5__["P02Component"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'p03',
      component: _p03_p03_component__WEBPACK_IMPORTED_MODULE_6__["P03Component"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'p04',
      component: _p04_p04_component__WEBPACK_IMPORTED_MODULE_7__["P04Component"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'p05',
      component: _p05_p05_component__WEBPACK_IMPORTED_MODULE_8__["P05Component"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'p06',
      component: _p06_p06_component__WEBPACK_IMPORTED_MODULE_9__["P06Component"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var FinalRoutingModule = function FinalRoutingModule() {
      _classCallCheck(this, FinalRoutingModule);
    };

    FinalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FinalRoutingModule);
    /***/
  },

  /***/
  "./src/app/final/final.module.ts":
  /*!***************************************!*\
    !*** ./src/app/final/final.module.ts ***!
    \***************************************/

  /*! exports provided: FinalModule */

  /***/
  function srcAppFinalFinalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalModule", function () {
      return FinalModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _final_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./final-routing.module */
    "./src/app/final/final-routing.module.ts");
    /* harmony import */


    var _p01_p01_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./p01/p01.component */
    "./src/app/final/p01/p01.component.ts");
    /* harmony import */


    var _p02_p02_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./p02/p02.component */
    "./src/app/final/p02/p02.component.ts");
    /* harmony import */


    var _p03_p03_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./p03/p03.component */
    "./src/app/final/p03/p03.component.ts");
    /* harmony import */


    var _p04_p04_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./p04/p04.component */
    "./src/app/final/p04/p04.component.ts");
    /* harmony import */


    var _p05_p05_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./p05/p05.component */
    "./src/app/final/p05/p05.component.ts");
    /* harmony import */


    var _p06_p06_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./p06/p06.component */
    "./src/app/final/p06/p06.component.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");

    var FinalModule = function FinalModule() {
      _classCallCheck(this, FinalModule);
    };

    FinalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_p01_p01_component__WEBPACK_IMPORTED_MODULE_5__["P01Component"], _p02_p02_component__WEBPACK_IMPORTED_MODULE_6__["P02Component"], _p03_p03_component__WEBPACK_IMPORTED_MODULE_7__["P03Component"], _p04_p04_component__WEBPACK_IMPORTED_MODULE_8__["P04Component"], _p05_p05_component__WEBPACK_IMPORTED_MODULE_9__["P05Component"], _p06_p06_component__WEBPACK_IMPORTED_MODULE_10__["P06Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _final_routing_module__WEBPACK_IMPORTED_MODULE_4__["FinalRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_11__["NgxEchartsModule"].forRoot({
        echarts: function echarts() {
          return __webpack_require__.e(
          /*! import() | echarts */
          "echarts").then(__webpack_require__.bind(null,
          /*! echarts */
          "./node_modules/echarts/index.js"));
        }
      })]
    })], FinalModule);
    /***/
  },

  /***/
  "./src/app/final/p01/p01.component.css":
  /*!*********************************************!*\
    !*** ./src/app/final/p01/p01.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalP01P01ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL3AwMS9wMDEuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final/p01/p01.component.ts":
  /*!********************************************!*\
    !*** ./src/app/final/p01/p01.component.ts ***!
    \********************************************/

  /*! exports provided: P01Component */

  /***/
  function srcAppFinalP01P01ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P01Component", function () {
      return P01Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");

    var P01Component = /*#__PURE__*/function () {
      function P01Component(authService, tokenStorage, router) {
        _classCallCheck(this, P01Component);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.roles = [];
      }

      _createClass(P01Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          this.authService.login(this.form).subscribe(function (data) {
            _this7.tokenStorage.saveToken(data.accessToken);

            _this7.tokenStorage.saveUser(data);

            _this7.isLoggedIn = true;

            _this7.authService.isLoggedIn.next(true);

            _this7.router.navigate(['final/p02']);
          }, function (err) {
            alert('Signin failed. Please try again!');
          });
        }
      }]);

      return P01Component;
    }();

    P01Component.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    P01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-p01',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./p01.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p01/p01.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./p01.component.css */
      "./src/app/final/p01/p01.component.css"))["default"]]
    })], P01Component);
    /***/
  },

  /***/
  "./src/app/final/p02/p02.component.css":
  /*!*********************************************!*\
    !*** ./src/app/final/p02/p02.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalP02P02ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL3AwMi9wMDIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final/p02/p02.component.ts":
  /*!********************************************!*\
    !*** ./src/app/final/p02/p02.component.ts ***!
    \********************************************/

  /*! exports provided: P02Component */

  /***/
  function srcAppFinalP02P02ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P02Component", function () {
      return P02Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");

    var P02Component = /*#__PURE__*/function () {
      function P02Component(tokenStorage, router) {
        _classCallCheck(this, P02Component);

        this.tokenStorage = tokenStorage;
        this.router = router;
      }

      _createClass(P02Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            this.user = this.tokenStorage.getUser();
          } else {
            this.router.navigate(['/final/p01']);
          }
        }
      }]);

      return P02Component;
    }();

    P02Component.ctorParameters = function () {
      return [{
        type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    P02Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-p02',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./p02.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p02/p02.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./p02.component.css */
      "./src/app/final/p02/p02.component.css"))["default"]]
    })], P02Component);
    /***/
  },

  /***/
  "./src/app/final/p03/p03.component.css":
  /*!*********************************************!*\
    !*** ./src/app/final/p03/p03.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalP03P03ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL3AwMy9wMDMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final/p03/p03.component.ts":
  /*!********************************************!*\
    !*** ./src/app/final/p03/p03.component.ts ***!
    \********************************************/

  /*! exports provided: P03Component */

  /***/
  function srcAppFinalP03P03ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P03Component", function () {
      return P03Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var P03Component = /*#__PURE__*/function () {
      function P03Component() {
        _classCallCheck(this, P03Component);
      }

      _createClass(P03Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P03Component;
    }();

    P03Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-p03',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./p03.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p03/p03.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./p03.component.css */
      "./src/app/final/p03/p03.component.css"))["default"]]
    })], P03Component);
    /***/
  },

  /***/
  "./src/app/final/p04/p04.component.css":
  /*!*********************************************!*\
    !*** ./src/app/final/p04/p04.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalP04P04ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL3AwNC9wMDQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final/p04/p04.component.ts":
  /*!********************************************!*\
    !*** ./src/app/final/p04/p04.component.ts ***!
    \********************************************/

  /*! exports provided: P04Component */

  /***/
  function srcAppFinalP04P04ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P04Component", function () {
      return P04Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var P04Component = /*#__PURE__*/function () {
      function P04Component() {
        _classCallCheck(this, P04Component);
      }

      _createClass(P04Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P04Component;
    }();

    P04Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-p04',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./p04.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p04/p04.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./p04.component.css */
      "./src/app/final/p04/p04.component.css"))["default"]]
    })], P04Component);
    /***/
  },

  /***/
  "./src/app/final/p05/p05.component.css":
  /*!*********************************************!*\
    !*** ./src/app/final/p05/p05.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalP05P05ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL3AwNS9wMDUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final/p05/p05.component.ts":
  /*!********************************************!*\
    !*** ./src/app/final/p05/p05.component.ts ***!
    \********************************************/

  /*! exports provided: P05Component */

  /***/
  function srcAppFinalP05P05ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P05Component", function () {
      return P05Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_concepts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/concepts.service */
    "./src/app/_services/concepts.service.ts");

    var P05Component = /*#__PURE__*/function () {
      function P05Component(conceptsService) {
        _classCallCheck(this, P05Component);

        this.conceptsService = conceptsService;
        this.concepts = [];
      }

      _createClass(P05Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.conceptsService.getConcepts().subscribe(function (data) {
            return _this8.concepts = data;
          });
        }
      }]);

      return P05Component;
    }();

    P05Component.ctorParameters = function () {
      return [{
        type: src_app_services_concepts_service__WEBPACK_IMPORTED_MODULE_2__["ConceptsService"]
      }];
    };

    P05Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-p05',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./p05.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p05/p05.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./p05.component.css */
      "./src/app/final/p05/p05.component.css"))["default"]]
    })], P05Component);
    /***/
  },

  /***/
  "./src/app/final/p06/p06.component.css":
  /*!*********************************************!*\
    !*** ./src/app/final/p06/p06.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinalP06P06ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL3AwNi9wMDYuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/final/p06/p06.component.ts":
  /*!********************************************!*\
    !*** ./src/app/final/p06/p06.component.ts ***!
    \********************************************/

  /*! exports provided: P06Component */

  /***/
  function srcAppFinalP06P06ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P06Component", function () {
      return P06Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var P06Component = /*#__PURE__*/function () {
      function P06Component() {
        _classCallCheck(this, P06Component);
      }

      _createClass(P06Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var xAxisData = [];
          var data1 = [];
          var data2 = [];

          for (var i = 0; i < 100; i++) {
            xAxisData.push('category' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
          }

          this.options = {
            legend: {
              data: ['bar', 'bar2'],
              align: 'left'
            },
            tooltip: {},
            xAxis: {
              data: xAxisData,
              silent: false,
              splitLine: {
                show: false
              }
            },
            yAxis: {},
            series: [{
              name: 'bar',
              type: 'bar',
              data: data1,
              animationDelay: function animationDelay(idx) {
                return idx * 10;
              }
            }, {
              name: 'bar2',
              type: 'bar',
              data: data2,
              animationDelay: function animationDelay(idx) {
                return idx * 10 + 100;
              }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function animationDelayUpdate(idx) {
              return idx * 5;
            }
          };
        }
      }]);

      return P06Component;
    }();

    P06Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-p06',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./p06.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/final/p06/p06.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./p06.component.css */
      "./src/app/final/p06/p06.component.css"))["default"]]
    })], P06Component);
    /***/
  }
}]);
//# sourceMappingURL=final-final-module-es5.js.map