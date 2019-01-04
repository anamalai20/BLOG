(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/Models/chatroom.model.ts":
/*!**************************************!*\
  !*** ./src/Models/chatroom.model.ts ***!
  \**************************************/
/*! exports provided: ChatRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoom", function() { return ChatRoom; });
var ChatRoom = /** @class */ (function () {
    function ChatRoom(id, hashtag, members, createdBy, messages) {
        this._id = id;
        this.hashTag = hashtag;
        this.members = members;
        this.createdBy = createdBy;
        this.messages = messages;
    }
    return ChatRoom;
}());



/***/ }),

/***/ "./src/Models/message.model.ts":
/*!*************************************!*\
  !*** ./src/Models/message.model.ts ***!
  \*************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(by, text, time) {
        this.by = by;
        this.text = text;
        this.time = time;
    }
    return Message;
}());



/***/ }),

/***/ "./src/Models/post.model.ts":
/*!**********************************!*\
  !*** ./src/Models/post.model.ts ***!
  \**********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(id, hashtag, type, content, image, title, by, path) {
        this._id = id;
        this.hashtag = hashtag;
        this.type = type;
        this.content = content;
        this.image = image;
        this.title = title;
        this.by = by;
        this.path = path;
    }
    return Post;
}());



/***/ }),

/***/ "./src/Models/user.model.ts":
/*!**********************************!*\
  !*** ./src/Models/user.model.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, password, name, email, who) {
        this._id = id;
        this.password = password;
        this.name = name;
        this.email = email;
        this.who = who;
        this.chats = null;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/viewprofile/viewprofile.component */ "./src/app/home/viewprofile/viewprofile.component.ts");
/* harmony import */ var _services_Auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/Auth.service */ "./src/app/services/Auth.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _home_postchat_postchat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/postchat/postchat.component */ "./src/app/home/postchat/postchat.component.ts");
/* harmony import */ var _home_viewfprofile_viewfprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/viewfprofile/viewfprofile.component */ "./src/app/home/viewfprofile/viewfprofile.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = { url: '', options: { reconnection: false } };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_7__["ViewprofileComponent"],
                _home_postchat_postchat_component__WEBPACK_IMPORTED_MODULE_13__["PostchatComponent"],
                _home_viewfprofile_viewfprofile_component__WEBPACK_IMPORTED_MODULE_14__["ViewfprofileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_16__["SocketIoModule"].forRoot(config)
            ],
            providers: [
                _services_Auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _services_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"],
                _services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.routing */ "./src/app/home.routing.ts");




var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: _home_routing__WEBPACK_IMPORTED_MODULE_3__["homeRoutes"] },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
    { path: 'notfound', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home.routing.ts":
/*!*********************************!*\
  !*** ./src/app/home.routing.ts ***!
  \*********************************/
/*! exports provided: homeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function() { return homeRoutes; });
/* harmony import */ var _home_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/viewprofile/viewprofile.component */ "./src/app/home/viewprofile/viewprofile.component.ts");
/* harmony import */ var _home_viewfprofile_viewfprofile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/viewfprofile/viewfprofile.component */ "./src/app/home/viewfprofile/viewfprofile.component.ts");
/* harmony import */ var _home_postchat_postchat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/postchat/postchat.component */ "./src/app/home/postchat/postchat.component.ts");



var homeRoutes = [
    { path: '', redirectTo: 'postchat', pathMatch: 'full' },
    { path: 'viewProfile', component: _home_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_0__["ViewprofileComponent"] },
    { path: 'viewfProfile', component: _home_viewfprofile_viewfprofile_component__WEBPACK_IMPORTED_MODULE_1__["ViewfprofileComponent"] },
    { path: 'postchat', component: _home_postchat_postchat_component__WEBPACK_IMPORTED_MODULE_2__["PostchatComponent"] },
    { path: '**', redirectTo: 'postchat', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar{\r\n    background: white;\r\n    height: auto;\r\n}\r\n#navbar ul li p{\r\n    margin: 0px;\r\n}\r\n#navbar{\r\n    display: none;\r\n     height: auto;\r\n     border-bottom: 0px solid;\r\n     box-shadow: 0px 0px 25px grey;\r\n     display: block;\r\n     margin-bottom: 30px;\r\n     width: 100%;\r\n     position: fixed;\r\n     z-index: 1;\r\n }\r\n#navbar ul{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns:20% 72% 8%;\r\n        grid-template-columns:20% 72% 8%;\r\n    margin: 0 auto;\r\n    padding-left: 0px;\r\n}\r\n#navbar ul li{\r\n    font-family: cursive;\r\n    font-size: 1.2em;\r\n    padding: 6px 3px 0px 3px; \r\n    display: inline-block;\r\n    list-style-type: none;\r\n    text-align: center;\r\n}\r\n#logo{\r\n    font-weight: bold;\r\n    -ms-grid-column-align: start;\r\n        justify-self: start;\r\n    display: block;\r\n    height: 30px;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n#logo :hover{\r\n    cursor: pointer;\r\n}\r\n#welcome{\r\n    height: 30px;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n#chatRoom{\r\n    display: block;\r\n    min-width: 400px;\r\n}\r\n#chatHead{\r\n    display: block;\r\n    margin: 0px;\r\n}\r\nh3{\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n}\r\n.fstyle{\r\n    font-family: cursive;\r\n    color: slategray;\r\n}\r\n.postbody{\r\n    display: block;\r\n    border: 1px solid silver;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    max-width: 670px;\r\n    overflow: auto;\r\n    height: auto;\r\n}\r\n.pimg{\r\n    display: block;\r\n    width: 650px;\r\n    height: 450px;\r\n    resize: both;\r\n    margin-bottom: 5px;\r\n}\r\n#chatbox{\r\n    position: fixed;\r\n    display: block;\r\n    border: 1px solid silver;\r\n    height: 520px;\r\n    padding: 20px;\r\n}\r\n#chatroom{\r\n    display: block;\r\n    border: 1px solid black;\r\n    min-height: 510px;\r\n    min-width: 300px;\r\n}\r\n.pdescription{\r\n    display: block;\r\n    width: 650px;\r\n}\r\n#posts{\r\n    margin-left: 60px;\r\n}\r\n.sbar{\r\n    display: inline-block;\r\n    max-width: 400px;\r\n    margin-bottom: 5px;\r\n}\r\n#homepage{\r\n    display: block;\r\n    position: relative;\r\n    top: 60px;\r\n}\r\n#sndbtn{\r\n    display: block;\r\n    position: relative;\r\n    bottom: 0px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\" ngif=\"!home\">\r\n    <ul>\r\n        <li id=\"logo\"><img id=\"welcome\" src=\"../../assets/logo.jpg\" (click)=\"goHome()\" alt=\"Give Alternate Path\" class=\"rounded\" ></li>\r\n        <li>  \r\n                    <div id=\"custom-search-input\" class=\"sbar\">\r\n                            <div class=\"input-group col-md-12\">\r\n                                <input type=\"text\" class=\"form-control\" id =\"searchbox\"  placeholder=\"Search for HashTag\" [(ngModel)]=\"searchHash\"/>\r\n                                <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-info\" type=\"button\">\r\n                                        <i class=\"fa fa-search fa-1x\"></i>\r\n                                    </button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n        </li>\r\n        <li id=\"Profile\"><img src=\"../../assets/user.png\" alt=\"Give Alternate Path\" class=\"rounded\" (click)=\"viewProfile()\" ></li>\r\n    </ul>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route, postservice) {
        this.router = router;
        this.route = route;
        this.postservice = postservice;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.home = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngDoCheck = function () {
        this.modelChange.next(this.model);
    };
    HomeComponent.prototype.viewProfile = function () {
        this.router.navigate(['viewProfile'], { relativeTo: this.route });
    };
    HomeComponent.prototype.goHome = function () {
        this.router.navigate(['/home/postchat']);
    };
    HomeComponent.prototype.getPosts = function () {
        return this.postservice.getPosts().subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "modelChange", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/postchat/postchat.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/postchat/postchat.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo{\r\n    font-weight: bold;\r\n    -ms-grid-column-align: start;\r\n        justify-self: start;\r\n    display: block;\r\n    height: 30px;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n#logo :hover{\r\n    cursor: pointer;\r\n}\r\n#welcome{\r\n    height: 30px;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n#chatHead{\r\n    display: block;\r\n    margin: 0px;\r\n}\r\nh3{\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n}\r\n.fstyle{\r\n    font-family: cursive;\r\n    color: slategray;\r\n}\r\n.postbody{\r\n    display: block;\r\n    border: 1px solid silver;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    max-width: 670px;\r\n    overflow: auto;\r\n    height: auto;\r\n}\r\n.pimg{\r\n    display: block;\r\n    width: 650px;\r\n    height: 450px;\r\n    resize: both;\r\n    margin-bottom: 5px;\r\n}\r\n#chatbox{\r\n    position: fixed;\r\n    display: block;\r\n    min-height: 610px;\r\n    padding: 25px;\r\n}\r\n#msgbox{\r\n    display: block;\r\n    position: relative;\r\n    top: 10px;\r\n    width: 400px;\r\n}\r\n#sndbtn{\r\n    display: block;\r\n    width: 200px;\r\n    position: relative;\r\n    top: 20px;\r\n    left: 100px;\r\n}\r\n#newTag{\r\n    display:inline-block;\r\n    position: fixed;\r\n    width: 200px;\r\n    left:960px;\r\n    z-index: 1;\r\n}\r\n#newTagBtn{\r\n    z-index: 1;\r\n    display: inline-block;\r\n    position: fixed;\r\n    width: 170px;\r\n    left: 1200px;\r\n    \r\n}\r\n::-webkit-scrollbar { \r\n    display: none; \r\n    }\r\n.pdescription{\r\n    display: block;\r\n    width: 650px;\r\n}\r\n#posts{\r\n    margin-left: 60px;\r\n}\r\n.sbar{\r\n    display: inline-block;\r\n    max-width: 400px;\r\n    margin-bottom: 5px;\r\n}\r\n#homepage{\r\n    display: block;\r\n    position: relative;\r\n    top: 60px;\r\n}\r\n#sndbtn{\r\n    display: block;\r\n    position: relative;\r\n    bottom: 0px;\r\n}\r\n/* ---------------------------- */\r\n#navbar{\r\n    background: white;\r\n    height: auto;\r\n}\r\n#navbar ul li p{\r\n    margin: 0px;\r\n}\r\n#navbar{\r\n    display: none;\r\n     height: auto;\r\n     border-bottom: 0px solid;\r\n     box-shadow: 0px 0px 25px grey;\r\n     display: block;\r\n     margin-bottom: 30px;\r\n     width: 100%;\r\n     position: fixed;\r\n     z-index: 1;\r\n }\r\n#navbar ul{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns:20% 72% 8%;\r\n        grid-template-columns:20% 72% 8%;\r\n    margin: 0 auto;\r\n    padding-left: 0px;\r\n}\r\n#navbar ul li{\r\n    font-family: cursive;\r\n    font-size: 1.2em;\r\n    padding: 6px 3px 0px 3px; \r\n    display: inline-block;\r\n    list-style-type: none;\r\n    text-align: center;\r\n}\r\n#logo{\r\n    font-weight: bold;\r\n    -ms-grid-column-align: start;\r\n        justify-self: start;\r\n    display: block;\r\n    height: 30px;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n#logo :hover{\r\n    cursor: pointer;\r\n}\r\n#welcome{\r\n    height: 30px;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n#chatHead{\r\n    display: block;\r\n    margin: 0px;\r\n    position: relative;\r\n    top:10px;\r\n}\r\nh3{\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n}\r\n.fstyle{\r\n    font-family: cursive;\r\n    color: slategray;\r\n}\r\n.postbody{\r\n    display: block;\r\n    border: 1px solid silver;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    max-width: 670px;\r\n    overflow: auto;\r\n    height: auto;\r\n}\r\n.pimg{\r\n    display: block;\r\n    width: 650px;\r\n    height: 450px;\r\n    resize: both;\r\n    margin-bottom: 5px;\r\n}\r\n#chatbox{\r\n    position: fixed;\r\n    display: block;\r\n    border: 1px solid silver;\r\n    height: 570px;\r\n    padding: 20px;\r\n}\r\n#chatRoom{\r\n    display: block;\r\n    border: 0.5px solid black;\r\n    min-height: 380px;\r\n    max-height: 380px;\r\n    overflow: scroll;\r\n    padding: 10px;\r\n}\r\n.pdescription{\r\n    display: block;\r\n    width: 650px;\r\n}\r\n#posts{\r\n    margin-left: 60px;\r\n}\r\n.sbar{\r\n    display: inline-block;\r\n    max-width: 400px;\r\n    margin-bottom: 5px;\r\n}\r\n#homepage{\r\n    display: block;\r\n    position: relative;\r\n    top: 60px;\r\n}\r\n#sndbtn{\r\n    display: block;\r\n    position: relative;\r\n    bottom: 0px;\r\n}\r\n/*-------*/\r\n.msg {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n}\r\n.darker {\r\n    border-color: #ccc;\r\n    background-color: #ddd;\r\n}\r\n.msg::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n.msg img {\r\n    float: left;\r\n    max-width: 60px;\r\n    width: 100%;\r\n    margin-right: 20px;\r\n    border-radius: 50%;\r\n}\r\n.msg img.right {\r\n    float: right;\r\n    margin-left: 20px;\r\n    margin-right:0;\r\n}\r\n.time-right {\r\n    float: right;\r\n    color: #aaa;\r\n}\r\n.time-left {\r\n    float: left;\r\n    color: #999;\r\n}\r\n#chatTags{\r\n    display: block;\r\n    border-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/home/postchat/postchat.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/postchat/postchat.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\">\n    <ul>\n        <li id=\"logo\"><img id=\"welcome\" src=\"../../assets/logo.jpg\" (click)=\"goHome()\" alt=\"Give Alternate Path\" class=\"rounded\" ></li>\n        <li>  \n                    <div id=\"custom-search-input\" class=\"sbar\">\n                            <div class=\"input-group col-md-12\">\n                                <input type=\"text\" class=\"form-control\" id =\"searchbox\" name=\"searchbox\" laceholder=\"Search for HashTag\" [(ngModel)]=\"searchHash\"/>\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-info\" type=\"button\">\n                                        <i class=\"fa fa-search fa-1x\"></i>\n                                    </button>\n                                </span>\n                            </div>\n                        </div>\n        </li>\n        <li id=\"Profile\"><img src=\"../../assets/user.png\" alt=\"Give Alternate Path\" class=\"rounded\" (click)=\"viewProfile()\" ></li>\n    </ul>\n</div>\n\n\n<div id=\"homepage\">\n  <div class=\"row\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-6\">\n           <div class=\"postbody\" *ngFor=\"let post of posts  | filter:searchHash \">\n                 <div class=\"pauthor fstyle\"><h4>{{post.by}}</h4></div>\n                 <img class=\"pimg img-rounded rounded\" [src]=\"post.path\" [alt]=\"post.title\" *ngIf=\"post.type\">\n                 <div class=\"pdescription fstyle\">{{post.hashtag | uppercase}}</div>\n                 <div class=\"pdescription fstyle\">{{post.content}}</div>\n            </div>\n     </div>\n      <!--\n      <div class=\"col-md-6\">\n                 <div class=\"postbody\">\n                      <div class=\"pauthor fstyle\" ><h4>Scarlett</h4></div>\n                      <img class=\"pimg img-rounded rounded\" src=\"../../../assets/art.jpg\" alt=\"\">\n                      <div class=\"pdescription fstyle\">Scarlett Johanson</div>\n                  </div>\n                  <div class=\"postbody\">\n                          <div class=\"pauthor fstyle\" ><h4>Scarlett</h4></div>\n                          <img class=\"pimg img-rounded rounded\" src=\"../../../assets/chairs.jpg\" alt=\"\">\n                          <div class=\"pdescription fstyle\">Scarlett Johanson</div>\n                      </div>\n                      <div class=\"postbody\">\n                              <div class=\"pauthor fstyle\" ><h4>Scarlett</h4></div>\n                              <img class=\"pimg img-rounded rounded\" src=\"../../../assets/math-art.jpg\" alt=\"\">\n                              <div class=\"pdescription fstyle\">Scarlett Johanson</div>\n                          </div>\n      </div>\n      -->\n      <div class=\"col-md-4\">\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"newTag\" name=\"newTag\" id=\"newTag\"> \n            <button id=\"newTagBtn\" class=\"btn btn-dark\" (click)=\"createNewTag()\" >Create New HashTag</button>\n              <div id=\"chatbox\">\n                          <div id=\"chatHead\">\n                             <h3  class=\"fstyle\">Chat</h3> \n                          </div>\n                          <select id=\"chatTags\" name=\"currentTag\" class=\"form-control\"  [(ngModel)]=\"currentTag\" value=\"null\" (ngModelChange)=\"loadChatRoom()\">\n                            <option [ngValue]=\"null\">Select HashTag</option>   \n                            <option *ngFor=\"let tag of chatTags\">{{tag}}</option>\n                          </select>\n                      <div id=\"chatRoom\">\n                         <!--\n                          <div class=\"msg\" *ngFor=\"let msg of messages\" >\n                          <p>{{msg.text}}</p>\n                          <p>{{msg.by}}</p>\n                          <p>{{msg.time}}</p>\n                          </div>\n                        -->\n                        <div class=\"msg\" *ngFor=\"let msg of messages\">\n                                <p>{{msg.text}}</p>\n                                <span class=\"time-right\"><pre>{{msg.by}}  {{msg.time | date:'medium' }}</pre></span>\n                        </div>\n                      </div>\n                      <i class=\"fa fa-refresh\" aria-hidden=\"true\" (click)=\"loadChatRoom()\"></i>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"chatmsg\" id=\"msgbox\" name=\"newmessage\">\n                      <button id=\"sndbtn\" (click)=\"sendmsg()\" class=\"btn btn-primary\" >Send</button>\n            </div>          \n      </div>\n  </div>\n</div>\n  \n  "

/***/ }),

/***/ "./src/app/home/postchat/postchat.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/postchat/postchat.component.ts ***!
  \*****************************************************/
/*! exports provided: PostchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostchatComponent", function() { return PostchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _Models_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Models/post.model */ "./src/Models/post.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_chatroom_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Models/chatroom.model */ "./src/Models/chatroom.model.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Models/user.model */ "./src/Models/user.model.ts");
/* harmony import */ var _Models_message_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Models/message.model */ "./src/Models/message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PostchatComponent = /** @class */ (function () {
    function PostchatComponent(postservice, router, route, chatservice, dataservice) {
        var _this = this;
        this.postservice = postservice;
        this.router = router;
        this.route = route;
        this.chatservice = chatservice;
        this.dataservice = dataservice;
        this.url = 'http://localhost:8080';
        this.posts = [];
        this.searchHash = '';
        this.chatmsg = '';
        this.chatTags = [];
        this.currentTag = ' ';
        this.newTag = '';
        this.messages = [];
        // this.socket = io(this.url);
        this.chatservice.loadChatTags().subscribe(function (data) {
            _this.chatTags = [];
            data.forEach(function (room) {
                _this.chatTags.push(room.hashTag);
            });
        });
        this.dataservice.currentUser.subscribe(function (tuser) {
            _this.currentUser = new _Models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"](tuser._id, null, tuser.name, tuser.email, tuser.who);
        });
    }
    PostchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.postservice.getPosts().subscribe(function (data) {
            //      console.log(data);
            data.forEach(function (p) {
                if (p.type !== null) {
                    _this.posts.push(new _Models_post_model__WEBPACK_IMPORTED_MODULE_2__["Post"](null, p.hashtag, p.type, p.content, null, p.title, p.by, p.imagepath));
                }
                else {
                    _this.posts.push(new _Models_post_model__WEBPACK_IMPORTED_MODULE_2__["Post"](null, p.hashtag, p.type, p.content, null, p.title, p.by, null));
                }
            });
        });
    };
    PostchatComponent.prototype.loadChatTags = function () {
        var _this = this;
        console.log('Loading tags');
        this.chatservice.loadChatTags().subscribe(function (data) {
            _this.chatTags = [];
            data.forEach(function (room) {
                _this.chatTags.push(room.hashTag);
            });
        });
        console.log(this.chatTags);
    };
    PostchatComponent.prototype.createNewTag = function () {
        var _this = this;
        console.log(this.newTag);
        this.newRoom = new _Models_chatroom_model__WEBPACK_IMPORTED_MODULE_4__["ChatRoom"](null, this.newTag, null, this.currentUser.name, [null]);
        this.chatservice.createNewTag(this.newRoom).subscribe(function (data) {
            console.log(data);
            _this.loadChatTags();
        });
    };
    PostchatComponent.prototype.viewProfile = function () {
        this.router.navigate(['../viewProfile'], { relativeTo: this.route });
    };
    PostchatComponent.prototype.sendmsg = function () {
        var _this = this;
        console.log(new Date());
        this.newMessage = new _Models_message_model__WEBPACK_IMPORTED_MODULE_8__["Message"](this.currentUser.name, this.chatmsg, new Date());
        this.chatservice.sendMessage(this.newMessage, this.currentChatRoom._id).subscribe(function (data) {
            console.log(data);
            _this.chatmsg = '';
            _this.socket.emit('new-message', _this.currentTag);
        }, null, function () {
            _this.loadChatRoom();
        });
    };
    /*
    public getMessages = () => {
      return Observable.create((observer) => {
          this.socket.on('new-message', (message) => {
              console.log('New Message Emitted');
          });
      });
    }
  */
    PostchatComponent.prototype.loadChatRoom = function () {
        var _this = this;
        console.log('Loading chat Room');
        this.chatservice.loadChatRoom(this.currentTag).subscribe(function (data) {
            _this.currentChatRoom = new _Models_chatroom_model__WEBPACK_IMPORTED_MODULE_4__["ChatRoom"](data._id, data.hashTag, null, data.createdBy, null);
            //  console.log(data);
            _this.messages = [];
            data.messages.forEach(function (msg) {
                _this.messages.push(new _Models_message_model__WEBPACK_IMPORTED_MODULE_8__["Message"](msg.by, msg.text, msg.time));
            });
        }, null, function () {
            console.log(_this.messages);
        });
    };
    PostchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postchat',
            template: __webpack_require__(/*! ./postchat.component.html */ "./src/app/home/postchat/postchat.component.html"),
            styles: [__webpack_require__(/*! ./postchat.component.css */ "./src/app/home/postchat/postchat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], PostchatComponent);
    return PostchatComponent;
}());



/***/ }),

/***/ "./src/app/home/viewfprofile/viewfprofile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/viewfprofile/viewfprofile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/viewfprofile/viewfprofile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/viewfprofile/viewfprofile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewfprofile works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/viewfprofile/viewfprofile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/viewfprofile/viewfprofile.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewfprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfprofileComponent", function() { return ViewfprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewfprofileComponent = /** @class */ (function () {
    function ViewfprofileComponent() {
    }
    ViewfprofileComponent.prototype.ngOnInit = function () {
    };
    ViewfprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewfprofile',
            template: __webpack_require__(/*! ./viewfprofile.component.html */ "./src/app/home/viewfprofile/viewfprofile.component.html"),
            styles: [__webpack_require__(/*! ./viewfprofile.component.css */ "./src/app/home/viewfprofile/viewfprofile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewfprofileComponent);
    return ViewfprofileComponent;
}());



/***/ }),

/***/ "./src/app/home/viewprofile/viewprofile.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/viewprofile/viewprofile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins:900i');\r\n\r\n.img-preview{\r\n  position: relative;\r\n  top: 80px;\r\n  height: 10rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.img-preview img{\r\n    height: 100%;\r\n    \r\n}\r\n\r\n#usrDetail\r\n{\r\n    position: relative;\r\n    display: block;\r\n    top: 70px;\r\n    height: auto;\r\n    overflow: visible;\r\n}\r\n\r\n#status{\r\n  display: block;\r\n  position: absolute;\r\n  top: 200px;\r\n  border:1px solid black;\r\n}\r\n\r\n* { font-family: cursive;}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\ntextarea.ng-touched {\r\n    border: 3px solid rgb(0, 247, 255);\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\n#profilePic {\r\n  display: block;\r\n  position: relative;\r\n  width: 450px;\r\n  height: 350px;\r\n  resize: both;\r\n  padding: 10px;\r\n  top: 60px;\r\n}\r\n\r\n#change{\r\n    top: 200px;\r\n    color: black;\r\n     left: 15px;\r\n     width: 200px;\r\n     height:50x;\r\n     position: absolute;\r\n\r\n  }\r\n\r\n#add{\r\n    top: 140px;\r\n    color: black;\r\n     left: 675px;\r\n     width: 80px;\r\n     height:20px;\r\n     position: absolute;\r\n  }\r\n\r\n.marked{\r\n border: 2px solid blue;\r\n  }\r\n\r\ninput[type=text] {\r\n    width: 300px;\r\n    height: 30px;\r\n    margin: 8px 0;\r\n    border: 3px solid #ccc;\r\n   /* -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    */\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\ninput[type=text]:focus  {\r\n    border: 3px solid #008CBA;\r\n}\r\n\r\ntextarea{\r\n  border: 3px solid #ccc;\r\n  border-radius: 10px;\r\n /* -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n */\r\n padding: 10px;\r\n}\r\n\r\ntextarea:focus{\r\n  border: 3px solid #008CBA;\r\n\r\n}\r\n\r\n#bio\r\n  {\r\n  display: block;\r\n  padding: 10px 10px 10px 10px;\r\n  min-width: 300px;\r\n  min-height: 180px;\r\n  max-width: 300px;\r\n  max-height: 180px;\r\n  width: 300px;\r\n  height: 150px;\r\n  position: relative;   \r\n  }\r\n\r\n#status\r\n{ \r\n  padding: 10px;\r\n  top: 100px;\r\n  border-radius: 20px;\r\n  left: 1030px;\r\n  position: absolute;\r\n  min-width: 290px;\r\n min-height: 170px;\r\n min-width: 290px;\r\n max-height: 170px;\r\n max-width: 290px;\r\n    \r\n}\r\n\r\n#up\r\n{\r\n\r\n    top: 165px;\r\n \r\n    left: 1225px;\r\n    width: 70px;\r\n    height:20px;\r\n    position: absolute;\r\n    \r\n}\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\nbody {\r\n    background-color: beige;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    display: flex;\r\n    height: 10vh;\r\n  }\r\n\r\n.shiny-btn {\r\n    position: relative;\r\n    color: white;\r\n    top: 60px;\r\n    left: 10px;\r\n    width: 430px;\r\n    height:50x;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    padding: 10px  10px;\r\n    background-color: #7681b9;\r\n    transition: background-position 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear, -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;\r\n    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear, -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n    background-image: url('data:image/svg+xml;utf8,<?xml version=\"1.0\" encoding=\"utf-8\"?><svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"   width=\"1296px\" height=\"768px\" viewBox=\"0 0 1296 768\" enable-background=\"new 0 0 1296 768\" xml:space=\"preserve\"><g><polygon fill=\"#8694D1\" points=\"766.6,1.2 -0.2,768 200.7,768 967.5,1.2   \"/></g><g><polygon fill=\"#8694D1\" points=\"1094.8,1.2 328,768 528.9,768 1295.7,1.2   \"/></g></svg>');\r\n    background-size: 10%;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  }\r\n\r\n.shiny-btn:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    background-position: -10px;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  }\r\n\r\n.shiny-btn:active {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    background-position: 100px;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  }\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  \r\n  display: flex;\r\n  \r\n  align-items: center;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  \r\n}\r\n\r\n.cta {\r\n    display: block;\r\n    padding: 2px 2px;\r\n    text-decoration: none;\r\n    font-family: 'Poppins', sans-serif;\r\n    color: white;\r\n    background: #6225E6;\r\n    transition: 1s;\r\n    box-shadow: 6px 6px 0 black;\r\n    -webkit-transform: skewX(-15deg);\r\n            transform: skewX(-15deg);\r\n    position: relative;\r\n    top: 20px;\r\n}\r\n\r\n.cta:focus {\r\n   outline: none; \r\n}\r\n\r\n.cta:hover {\r\n    transition: 0.5s;\r\n    box-shadow: 10px 10px 0 #FBC638;\r\n    cursor: pointer;\r\n  }\r\n\r\n.cta span:nth-child(2) {\r\n    transition: 0.5s;\r\n    margin-right: 0px;\r\n}\r\n\r\n.cta:hover  span:nth-child(2) {\r\n    transition: 0.5s;\r\n    margin-right: 45px;\r\n}\r\n\r\nspan {\r\n    -webkit-transform: skewX(15deg);\r\n            transform: skewX(15deg) \r\n  }\r\n\r\n.button:hover{\r\n    cursor: pointer;\r\n  }\r\n\r\nspan:nth-child(2) {\r\n    width: 20px;\r\n    margin-left: 30px;\r\n    position: relative;\r\n    top: 12%;\r\n  }\r\n\r\n/**************SVG****************/\r\n\r\npath.one {\r\n    transition: 0.4s;\r\n    -webkit-transform: translateX(-60%);\r\n            transform: translateX(-60%);\r\n}\r\n\r\npath.two {\r\n    transition: 0.5s;\r\n    -webkit-transform: translateX(-30%);\r\n            transform: translateX(-30%);\r\n}\r\n\r\n.cta:hover path.three {\r\n    -webkit-animation: color_anim 1s infinite 0.2s;\r\n            animation: color_anim 1s infinite 0.2s;\r\n}\r\n\r\n.cta:hover path.one {\r\n    -webkit-transform: translateX(0%);\r\n            transform: translateX(0%);\r\n    -webkit-animation: color_anim 1s infinite 0.6s;\r\n            animation: color_anim 1s infinite 0.6s;\r\n}\r\n\r\n.cta:hover path.two {\r\n    -webkit-transform: translateX(0%);\r\n            transform: translateX(0%);\r\n    -webkit-animation: color_anim 1s infinite 0.4s;\r\n            animation: color_anim 1s infinite 0.4s;\r\n}\r\n\r\n/* SVG animations */\r\n\r\n@-webkit-keyframes color_anim {\r\n    0% {\r\n        fill: white;\r\n    }\r\n    50% {\r\n        fill: #FBC638;\r\n    }\r\n    100% {\r\n        fill: white;\r\n    }\r\n}\r\n\r\n@keyframes color_anim {\r\n    0% {\r\n        fill: white;\r\n    }\r\n    50% {\r\n        fill: #FBC638;\r\n    }\r\n    100% {\r\n        fill: white;\r\n    }\r\n}\r\n\r\n.stretch, .button:after, .button:before {\r\n    bottom: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n\r\n.button {\r\n    background: #0962EA;\r\n    background-size: 100%;\r\n    background-image: linear-gradient(to right, #0962EA, #0AA0F6);\r\n    border-radius: 1.5em;\r\n    transition: opacity 300ms;\r\n    border: none;\r\n    padding: 10px 20px 10px 20px;\r\n    color: #FAF15D;\r\n    font-weight: bold;\r\n    letter-spacing: 0.05em;\r\n    outline: none;\r\n    overflow: hidden;\r\n    position: relative;\r\n    top: 10px;\r\n    cursor: pointer;\r\n    z-index: 99;\r\n  }\r\n\r\n.button:after {\r\n    box-shadow: rgba(212, 207, 201, 0.75) 0 0 15px 2px;\r\n    background: #FAF15D;\r\n    content: \"\";\r\n    height: 2px;\r\n    opacity: 0;\r\n  }\r\n\r\n.button:before {\r\n    content: \"\";\r\n    opacity: 0;\r\n  }\r\n\r\n.button:hover {\r\n    -webkit-animation: glitch 750ms infinite;\r\n  }\r\n\r\n.button:hover:before {\r\n    opacity: 1;\r\n  }\r\n\r\n.button:hover:after {\r\n    -webkit-animation: scan 2s infinite;\r\n    opacity: 1;\r\n  }\r\n\r\n@-webkit-keyframes glitch {\r\n    0% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n    }\r\n    5% {\r\n      -webkit-transform: skewX(2deg);\r\n      transform: skewX(2deg);\r\n      opacity: 0.75;\r\n    }\r\n    10% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n      opacity: 1;\r\n    }\r\n    15% {\r\n      -webkit-transform: skewX(-5deg);\r\n      transform: skewX(-5deg);\r\n      opacity: 0.75;\r\n    }\r\n    20% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n      opacity: 1;\r\n    }\r\n    45% {\r\n      -webkit-transform: skewX(3deg);\r\n      transform: skewX(3deg);\r\n      opacity: 0.75;\r\n    }\r\n    50% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n      opacity: 1;\r\n    }\r\n    55% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n      opacity: 0.75;\r\n    }\r\n    60% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n      opacity: 1;\r\n    }\r\n    75% {\r\n      -webkit-transform: skewX(2deg);\r\n      transform: skewX(2deg);\r\n    }\r\n    80% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n    }\r\n    85% {\r\n      -webkit-transform: skewX(-8deg);\r\n      transform: skewX(-8deg);\r\n      opacity: 0.75;\r\n    }\r\n    90% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      -webkit-transform: skewX(0deg);\r\n      transform: skewX(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes scan {\r\n    0% {\r\n      top: 0%;\r\n    }\r\n    50% {\r\n      top: 97%;\r\n    }\r\n    100% {\r\n      top: 0%;\r\n    }\r\n  }\r\n\r\na:link, a:visited\r\n  {\r\n      color: white;\r\n      text-decoration: none;\r\n  }\r\n\r\n.biobtn {\r\n    display: block;\r\n    border-radius: 10px;\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #008CBA;\r\n}\r\n\r\n.biobtn:hover {\r\n    background-color: #008CBA;\r\n    color: white;\r\n}\r\n\r\n/*-------------*/\r\n\r\n#posts{\r\n  margin-left: 60px;\r\n}\r\n\r\n.postbody{\r\n  display: block;\r\n  border: 1px solid silver;\r\n  border-radius: 10px;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  max-width: 670px;\r\n  overflow: auto;\r\n  height: auto;\r\n}\r\n\r\n.pimg{\r\n  display: block;\r\n  width: 650px;\r\n  height: 450px;\r\n  resize: both;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#line{\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n}\r\n\r\n#userPosts{\r\n  position: relative;\r\n  top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/home/viewprofile/viewprofile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/viewprofile/viewprofile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button  (click)=\"filepicker.click()\">Choose File</button>\n<input type=\"file\" #filepicker (change)=\"onImageSelected($event)\"> \n\n<div id=\"imgPreview\">\n    <img src=\"\" alt=\"userForm.value.username\">\n</div>\n-->\n\n<div class=\"row\">\n\n    <div class=\"col-md-4\">\n      <img id=\"profilePic\"  class=\"img-rounded rounded\" src=\"../../../assets/art.jpg\" alt=\"Avatar\">\n      <button class=\"shiny-btn\"  (click)=\"changeProfilePic()\" > Change Picture</button>\n    </div>\n    \n    <div class=\"col-md-4\">     \n      <form    [formGroup]=\"userForm\">\n      <div id = \"usrDetail\"> \n        <label id=\"lbio\" type=\"text\">About me</label>\n        <textarea type=\"text\" id=\"bio\" placeholder=\"Something About You\" formControlName=\"who\"></textarea>   \n        <label class=\"ilabel\" type=\"text\">Role </label>\n        <br>\n        <input class=\"ibox\" type=\"text\" formControlName=\"name\">\n        <br>\n        <label class=\"ilabel\" type=\"text\">Email </label> \n        <br>\n        <input class=\"ibox\" type=\"text\" formControlName=\"email\">\n        <button class=\"biobtn\">Submit BIO</button>\n      </div>\n      </form>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div id = \"usrDetail\"> \n            <form    [formGroup]=\"postForm\" (ngSubmit)=\"post()\">\n            <label class=\"ilabel\" type=\"text\">What's on your mind</label> \n            <br>\n            <textarea type=\"text\" id=\"bio\" formControlName=\"content\"></textarea>\n            <label class=\"ilabel\" type=\"text\">HashTag</label>\n            <br>\n            <input class=\"ibox\" type=\"text\" formControlName=\"hashtag\">\n            <br>\n            <label class=\"ilabel\" type=\"text\" >Title</label>\n            <br>\n            <input class=\"ibox\" type=\"text\" formControlName=\"title\">\n            <br>\n            <button  type=\"button\" class=\"button\" for=\"switch\" (click)=\"filepicker.click()\"> Upload Picture</button>\n            <input type=\"file\" #filepicker (change)=\"onImageSelected($event)\" style=\"display:none\">              \n            <button class=\"cta\" type=\"submit\"> \n              <span>Post Status</span>\n              <span>\n                <svg width=\"40px\" height=\"21px\" viewBox=\"0 0 66 43\" version=\"1.1\" >\n                  <g id=\"arrow\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <path class=\"one\" d=\"M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z\" fill=\"#FFFFFF\"></path>\n                    <path class=\"two\" d=\"M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z\" fill=\"#FFFFFF\"></path>\n                    <path class=\"three\" d=\"M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z\" fill=\"#FFFFFF\"></path>\n                  </g>\n                </svg>\n              </span>  \n             </button>\n             <br>\n             <br>\n            </form>\n          </div>\n         <div class=\"img-preview\" *ngIf=\"imagePreview !== '' && imagePreview\">\n            <img [src]=\"imagePreview\" [alt]=\"userForm.value.name\" class=\"img img-rounded\">\n         </div> \n    </div>\n</div>\n<hr id=\"line\">\n\n<div class=\"row\" id=\"userPosts\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n    <div class=\"postbody\" *ngFor=\"let post of posts\">\n        <div class=\"pauthor fstyle\"><h4>{{post.by}}</h4></div>\n        <img class=\"pimg img-rounded rounded\" [src]=\"post.path\" [alt]=\"post.title\" *ngIf=\"post.type\">\n        <div class=\"pdescription fstyle\">{{post.hashtag | uppercase}}</div>\n        <div class=\"pdescription fstyle\">{{post.content}}</div>\n    </div>\n    </div>\n  <div class=\"col-md-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/viewprofile/viewprofile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/viewprofile/viewprofile.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileComponent", function() { return ViewprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _Models_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Models/post.model */ "./src/Models/post.model.ts");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Models/user.model */ "./src/Models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewprofileComponent = /** @class */ (function () {
    function ViewprofileComponent(dataservice, postservice) {
        this.dataservice = dataservice;
        this.postservice = postservice;
        this.posts = [];
    }
    ViewprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePreview = null;
        this.dataservice.currentUser.subscribe(function (tuser) {
            _this.user = new _Models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](tuser._id, null, tuser.name, tuser.email, tuser.who);
            _this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'who': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.user.who, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
        });
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'hashtag': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        console.log(this.user);
        return this.postservice.getPosts().subscribe(function (data) {
            console.log(data);
            data.forEach(function (p) {
                if (p.by === _this.user.name) {
                    if (p.type !== null) {
                        _this.posts.push(new _Models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"](null, p.hashtag, p.type, p.content, null, p.title, p.by, p.imagepath));
                    }
                    else {
                        _this.posts.push(new _Models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"](null, p.hashtag, p.type, p.content, null, p.title, p.by, null));
                    }
                }
            });
        });
    };
    ViewprofileComponent.prototype.onImageSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.postForm.patchValue({ 'image': file });
        this.postForm.get('image').updateValueAndValidity();
        console.log(file);
        console.log(this.postForm);
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ViewprofileComponent.prototype.post = function () {
        if (this.imagePreview) {
            this.postImage();
        }
        else {
            this.postText();
        }
    };
    ViewprofileComponent.prototype.postImage = function () {
        var val = this.postForm.value;
        var np = new _Models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"](null, val.hashtag, 'true', val.content, val.image, val.title, this.user.name, null);
        this.postservice.postImage(np).subscribe(function (res) {
            console.log(res);
        });
        this.imagePreview = null;
        this.postForm.reset();
    };
    ViewprofileComponent.prototype.postText = function () {
        var _this = this;
        var val = this.postForm.value;
        var np = new _Models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"](null, val.hashtag, null, val.content, null, val.title, this.user.name, null);
        this.postservice.postText(np).subscribe(function (res) {
            console.log(res);
            _this.postForm.reset();
        });
    };
    ViewprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewprofile',
            template: __webpack_require__(/*! ./viewprofile.component.html */ "./src/app/home/viewprofile/viewprofile.component.html"),
            styles: [__webpack_require__(/*! ./viewprofile.component.css */ "./src/app/home/viewprofile/viewprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
    ], ViewprofileComponent);
    return ViewprofileComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {font-family: cursive;}\r\n* {box-sizing: border-box;}\r\n#user\r\n{\r\n  color: white;\r\n  top: 300px;\r\n  position: absolute;\r\n  left: 30px;\r\n  text-shadow: 0 0 40px #FF0000, 0 0 5px rgba(0, 255, 221, 0.63);\r\n}\r\n#b1 {\r\n\r\n    top: 350px;\r\n    font-size: 1.2em;\r\n    left: 1100px;\r\n    width: 150px;\r\n    height:50px;\r\n    display: block;\r\n    position: absolute;\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n}\r\n#b2 {\r\n\r\n    top: 350px;\r\n    display: block;\r\n    left: 10px;\r\n    width: 150px;\r\n    height:50px;\r\n    position: absolute;\r\n    border-radius: 10px;\r\n    font-size: 1.2em;\r\n    padding: 0px;\r\n}\r\n#r21{\r\ncolor: white;\r\n    top: 325px;\r\n \r\n    left: 1100px;\r\n    width: 150px;\r\n    height:50px;\r\n    position: absolute;\r\n\r\n}\r\n#ii  {\r\n    top: 200px;\r\n color: white;\r\n text-shadow: 0 0 40px #FF0000, 0 0 5px rgb(0, 255, 221);\r\n    left: 1140px;\r\n    width: 200px;\r\n    height:40px;\r\n    position: absolute;\r\n    font-size: 1.5em;\r\n\r\n}\r\n#c1 {\r\n\r\n    top: 310px;\r\n \r\n    left: 1000px;\r\n    width: 150px;\r\n    height:50px;\r\n    position: absolute;\r\n}\r\n#t1  {\r\n    top: 250px;\r\n      display: block;\r\n    left: 1100px;\r\n    width: 190px;\r\n    height:20px;\r\n    position: absolute;\r\n    border-radius: 10px;\r\n}\r\n#t2  {\r\n\r\n  top: 300px;\r\n  display: block;\r\n  left: 1100px;\r\n  width: 190px;\r\n  height:20px;\r\n  position: absolute;\r\n  border-radius: 10px;\r\n}\r\n#i1 \r\n{  top: 250px;\r\n color: white;\r\n    left: 1000px;\r\n    width: 150px;\r\n    height:20px;\r\n    position: absolute; \r\n\r\n}\r\n#i2  {\r\n    top: 300px;\r\n color: white;\r\n    left: 1000px;\r\n    width: 150px;\r\n    height:20px;\r\n    position: absolute;\r\n}\r\n.image{\r\n\r\n    height:50em; background-size:cover; width:auto;\r\n    background-image:url('1.jpg');\r\n    background-position:50% 50%;\r\n\r\n}\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\nbutton:hover {\r\n    opacity: 0.5;\r\n}\r\n* {box-sizing: border-box}\r\n/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n/* Add a background color when the inputs get focus */\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\nbutton:hover {\r\n  opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n  padding: 14px 20px;\r\n  background-color: #f44336;\r\n}\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn, .signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n  padding: 16px;\r\n}\r\n#sp{\r\nsize: 10%;\r\n\r\n}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 40%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: #474e5d;\r\n  padding-top: 50px;\r\n}\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n/* Style the horizontal ruler */\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n/* The Close Button (x) */\r\n.close {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn, .signupbtn {\r\n    width: 100%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\" >\n    <div id=\"log\"    >\n      <h4 id=\"user\" > Don't have an account </h4>  \n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <label id=\"ii\" ><b>LOGIN</b></label>\n           \n          <label id=\"i1\" for=\"uname\"><b>Email</b></label>\n          <input id=\"t1\" type=\"text\" formControlName=\"email\" placeholder=\"Your Username \" name=\"uname\" required>\n          <label id=\"i2\" for=\"psw\"><b>Password</b></label>\n          <input id=\"t2\" type=\"password\" formControlName=\"password\" placeholder=\"Your Password \" name=\"psw\" required>\n              \n          <button id=\"b1\" type=\"submit\">Login</button>   \n          </form>\n     \n<button id=\"b2\" (click)=\"dispSignUp()\">SignUp</button>\n    \n    <div  id=\"id01\" class=\"modal\" [ngStyle]=\"{display: disp ? 'block' : 'none'}\">\n      <span id=\"sp\" class=\"close\" (click)=\"closedispSignUp()\" title=\"Close Modal\">Close</span>\n      <form  class=\"modal-content\"  [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\">\n        <div class=\"container\">\n          <h2>Sign Up To See Photos And Videos From Your Friends </h2>\n                    <hr>\n                      \n                    <label for=\"name\"><b>Name</b></label>\n                    <input formControlName=\"name\" type=\"text\" placeholder=\"Name \" required id=\"name\" class=\"form-control\"  name=\"name\">\n                  \n                    <label for=\"email\"><b>Email</b></label>\n                    <input formControlName=\"email\" type=\"text\" placeholder=\"Email\"  required id=\"email\" class=\"form-control\"  name=\"email\">\n              \n                    <label for=\"roll\"><b>What's Your Job In This College </b></label>\n                    <input formControlName=\"who\" type=\"text\" placeholder=\"Staff / Student \" required id=\"roll\" class=\"form-control\" n name=\"roll\">\n            \n                    <label for=\"psw\"><b>Password</b></label>\n                    <input formControlName=\"password\" type=\"password\" placeholder=\"Password \"  required id=\"password\" class=\"form-control\"  name=\"password\">\n              \n                    <label for=\"psw-repeat\"><b>Repeat Password</b></label>\n                    <input type=\"password\" placeholder=\"Repeat Password \"  required id=\"psw-repeat\" class=\"form-control\"  name=\"psw-repeat\" >\n                    \n                    <p>By creating an account you agree to our <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n              \n                    <div class=\"clearfix\">\n                      <button type=\"button\"  (click)=\"closedispSignUp()\" class=\"cancelbtn\">Cancel</button>\n                      <button type=\"submit\" class=\"signupbtn\">Sign Up</button>\n          </div>\n        </div>\n      </form>\n    </div>        \n          </div>\n    </div>\n    \n    "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Auth.service */ "./src/app/services/Auth.service.ts");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/user.model */ "./src/Models/user.model.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, authservice, dataservice) {
        this.router = router;
        this.route = route;
        this.authservice = authservice;
        this.dataservice = dataservice;
        this.disp = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.disp = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'who': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    LoginComponent.prototype.dispSignUp = function () {
        console.log('disp');
        this.disp = true;
    };
    LoginComponent.prototype.closedispSignUp = function () {
        this.disp = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var val = this.loginForm.value;
        var sUser = new _Models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]('', val.password, '', val.email, '');
        console.log(sUser);
        this.authservice.signIn(sUser).subscribe(function (data) {
            console.log(data);
            var k = data.obj;
            _this.logUser = new _Models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](k._id, k.password, k.name, k.email, k.who);
            _this.dataservice.changeuser(_this.logUser);
            _this.router.navigate(['../home'], { relativeTo: _this.route });
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        // console.log(this.signUpForm.value);
        var val = this.signUpForm.value;
        var newUser = new _Models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]('', val.password, val.name, val.email, val.who);
        console.log(newUser);
        this.authservice.signUp(newUser).subscribe(function (data) {
            console.log(data);
            _this.disp = false;
            // this.router.navigate(['../login'], {relativeTo: this.route});
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        console.log('postfilter');
        return items.filter(function (it) {
            return it.hashtag.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/Auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/Auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    AuthService.prototype.signUp = function (newUser) {
        var body = JSON.stringify(newUser);
        //   const httpheader = new HttpHeaders({'Content-Type': 'application/json'});
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/user/signUp', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.signIn = function (sUser) {
        var body = JSON.stringify(sUser);
        //   const httpheader = new HttpHeaders({'Content-Type': 'application/json'});
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/user/signIn', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ChatService.prototype.loadChatTags = function () {
        return this.http.get('http://localhost:3000/api/chat/getChatTags')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ChatService.prototype.createNewTag = function (room) {
        var body = JSON.stringify(room);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/chat/newRoom', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ChatService.prototype.loadChatRoom = function (tag) {
        return this.http.get('http://localhost:3000/api/chat/getChatRoom/' + tag)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ChatService.prototype.sendMessage = function (msg, id) {
        var body = JSON.stringify(msg);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put('http://localhost:3000/api/chat/sendMessage/' + id, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.cUser = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentUser = this.cUser.asObservable();
    }
    DataService.prototype.changeuser = function (usr) {
        this.cUser.next(usr);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    PostService.prototype.postImage = function (np) {
        var postData = new FormData();
        postData.append('hashtag', np.hashtag);
        postData.append('type', np.type);
        postData.append('content', np.content);
        postData.append('image', np.image, np.title);
        postData.append('title', np.title);
        postData.append('by', np.by);
        return this.http.post('http://localhost:3000/api/post/pimage', postData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PostService.prototype.postText = function (np) {
        console.log(np);
        var body = JSON.stringify(np);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://localhost:3000/api/post/ptext', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PostService.prototype.getPosts = function () {
        return this.http.get('http://localhost:3000/api/post/getAllPosts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



// if (environment.production) {
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_project\Connectify\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map