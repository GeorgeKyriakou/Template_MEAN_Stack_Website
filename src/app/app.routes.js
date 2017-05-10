"use strict";
var router_1 = require("@angular/router");
var pageNotFound_component_1 = require("./components/pageNotFound/pageNotFound.component");
var home_component_1 = require("./components/home/home.component");
var activities_component_1 = require("./components/activities/activities.component");
var details_component_1 = require("./components/details/details.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'activities', children: [
            { path: '', component: activities_component_1.ActivitiesComponent },
            { path: ':details', component: details_component_1.DetailsComponent },
        ] },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent },
];
exports.APP_ROUTES_PROVIDER = [router_1.RouterModule.forRoot(appRoutes)];
//# sourceMappingURL=app.routes.js.map