(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-management-user-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-management/user-details/user-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-management/user-details/user-details.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-md-center\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>User</strong>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"company\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"First Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"company\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Last Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"country\">Role</label>\n          <select class=\"form-control\">\n            <option>\n              Teacher\n            </option>\n            <option>\n              Student\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-management/user-management.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-management/user-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Users\n          <button class=\"btn btn-sm btn-primary pull-right\" routerLink=\"./new\">Create</button>\n        </div>\n        <div class=\"card-body\">\n          <br>\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th>User</th>\n                <th class=\"text-center\">Country</th>\n                <th>Passed</th>\n                <th>Activity</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Yiorgos Avraamu</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>50%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>10 sec ago</strong>\n                </td>\n                <td>\n                  <button class=\"btn btn-success\" routerLink=\"./1\"><i class=\"fa fa-edit\"></i></button>\n                  <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-danger\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Avram Tarasios</div>\n                  <div class=\"small text-muted\">\n\n                    <span>Recurring</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-br h4 mb-0\" title=\"br\" id=\"br\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>10%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>5 minutes ago</strong>\n                </td>\n                <td>\n                  <button class=\"btn btn-success\" routerLink=\"./1\"><i class=\"fa fa-edit\"></i></button>\n                  <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-warning\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Quintin Ed</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-in h4 mb-0\" title=\"in\" id=\"in\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>74%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>1 hour ago</strong>\n                </td>\n                <td>\n                  <button class=\"btn btn-success\" routerLink=\"./1\"><i class=\"fa fa-edit\"></i></button>\n                  <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-secondary\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Enéas Kwadwo</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-fr h4 mb-0\" title=\"fr\" id=\"fr\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>98%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Last month</strong>\n                </td>\n                <td>\n                  <button class=\"btn btn-success\" routerLink=\"./1\"><i class=\"fa fa-edit\"></i></button>\n                  <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Agapetus Tadeáš</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-es h4 mb-0\" title=\"es\" id=\"es\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>22%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Last week</strong>\n                </td>\n                <td>\n                  <button class=\"btn btn-success\" routerLink=\"./1\"><i class=\"fa fa-edit\"></i></button>\n                  <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-danger\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>Friderik Dávid</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2015\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <i class=\"flag-icon flag-icon-pl h4 mb-0\" title=\"pl\" id=\"pl\"></i>\n                </td>\n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\">\n                      <strong>43%</strong>\n                    </div>\n                    <div class=\"float-right\">\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                    </div>\n                  </div>\n                  <div class=\"progress progress-xs\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>Yesterday</strong>\n                </td>\n                <td>\n                  <button class=\"btn btn-success\" routerLink=\"./1\"><i class=\"fa fa-edit\"></i></button>\n                  <button class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./src/app/views/user-management/user-details/user-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/user-management/user-details/user-details.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXItbWFuYWdlbWVudC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/user-management/user-details/user-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/user-management/user-details/user-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-management/user-details/user-details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-details.component.scss */ "./src/app/views/user-management/user-details/user-details.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/user-management/user-management-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/user-management/user-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management.component */ "./src/app/views/user-management/user-management.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/views/user-management/user-details/user-details.component.ts");





var routes = [
    {
        path: '',
        data: {
            title: 'Users'
        },
        children: [
            {
                path: '',
                component: _user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"],
                data: {
                    title: 'Users'
                }
            },
            {
                path: ':id',
                component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"],
                data: {
                    title: 'User'
                }
            },
        ]
    },
];
var UserManagementRoutingModule = /** @class */ (function () {
    function UserManagementRoutingModule() {
    }
    UserManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserManagementRoutingModule);
    return UserManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__);




var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
        this.radioModel = 'Month';
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // mainChart
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        /* tslint:disable:max-line-length */
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        /* tslint:enable:max-line-length */
        this.mainChartOptions = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"],
                intersect: true,
                mode: 'index',
                position: 'nearest',
                callbacks: {
                    labelColor: function (tooltipItem, chart) {
                        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["hexToRgba"])(Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'), 10),
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--success'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--danger'),
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.brandBoxChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.brandBoxChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.brandBoxChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.brandBoxChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.brandBoxChartOptions = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.brandBoxChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.brandBoxChartLegend = false;
        this.brandBoxChartType = 'line';
    }
    UserManagementComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    UserManagementComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-management/user-management.component.html")).default
        })
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/user-management/user-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/user-management/user-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management.component */ "./src/app/views/user-management/user-management.component.ts");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/views/user-management/user-management-routing.module.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/views/user-management/user-details/user-details.component.ts");









var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _user_management_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserManagementRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"]]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-user-management-user-management-module.js.map