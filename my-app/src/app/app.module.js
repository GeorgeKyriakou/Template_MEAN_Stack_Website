"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var pageNotFound_component_1 = require("./components/pageNotFound/pageNotFound.component");
var home_component_1 = require("./components/home/home.component");
var activities_component_1 = require("./components/activities/activities.component");
var details_component_1 = require("./components/details/details.component");
var addComment_component_1 = require("./components/commentlist/addComment.component");
var bookNow_component_1 = require("./components/bookNow/bookNow.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'activities', children: [
            { path: '', component: activities_component_1.ActivitiesComponent },
            { path: ':details', component: details_component_1.DetailsComponent },
            { path: ':details/bookNow', component: bookNow_component_1.BookComponent },
        ] },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes),],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent,
            activities_component_1.ActivitiesComponent, pageNotFound_component_1.PageNotFoundComponent,
            details_component_1.DetailsComponent, addComment_component_1.CommentListComponent, bookNow_component_1.BookComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map