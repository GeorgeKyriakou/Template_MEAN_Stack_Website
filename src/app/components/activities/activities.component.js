"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var activities_service_1 = require("../../services/activities/activities.service");
var ActivitiesComponent = (function () {
    function ActivitiesComponent(activityService) {
        var _this = this;
        this.activityService = activityService;
        this.attrs = ["--"];
        this.filters = ['Location', 'Category', 'Provider'];
        this.unique = function (a) {
            var seen = {};
            return a.filter(function (n) { return seen.hasOwnProperty(n) ? false : seen[n] = true; });
        };
        this.getAlltActs()
            .then(function (response) {
            _this.activities = response;
            _this.temp = _this.activities;
            console.log(_this.activities);
        });
    }
    ActivitiesComponent.prototype.getAlltActs = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.activityService.getAll().subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ActivitiesComponent.prototype.filterBox = function (value) {
        this.filterBy = value;
        switch (value) {
            case 'Filter by...': {
                this.attrs = ['--'];
                this.filterActsBy('--');
                break;
            }
            case 'Location': {
                this.attrs = this.activities.map(function (a) { return a.location; });
                this.attrs = this.unique(this.attrs);
                break;
            }
            case 'Category': {
                this.attrs = this.activities.map(function (a) { return a.category; });
                this.attrs = this.unique(this.attrs);
                break;
            }
            case 'Provider': {
                this.attrs = this.activities.map(function (a) { return a.provname; });
                this.attrs = this.unique(this.attrs);
                break;
            }
        }
    };
    ActivitiesComponent.prototype.filterActsBy = function (value) {
        this.temp = this.activities;
        switch (this.filterBy) {
            case 'Location': {
                this.temp = this.temp.filter(function (b) { return b.location === value; });
                break;
            }
            case 'Category': {
                this.temp = this.temp.filter(function (b) { return b.category === value; });
                break;
            }
            case 'Provider': {
                this.temp = this.temp.filter(function (b) { return b.provname === value; });
                break;
            }
            default: {
                break;
            }
        }
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'activities',
        templateUrl: 'activities.component.html',
        styleUrls: ['activities.component.css'],
        providers: [activities_service_1.ActivityService]
    }),
    __metadata("design:paramtypes", [activities_service_1.ActivityService])
], ActivitiesComponent);
exports.ActivitiesComponent = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map