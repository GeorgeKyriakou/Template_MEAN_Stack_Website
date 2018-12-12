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
var getDetails_service_1 = require("../../services/getDetails/getDetails.service");
var getComments_service_1 = require("../../services/getComments/getComments.service");
var router_1 = require("@angular/router");
var DetailsComponent = (function () {
    function DetailsComponent(route, dService, cService) {
        var _this = this;
        this.route = route;
        this.dService = dService;
        this.cService = cService;
        this.addC = false;
        this.activity = route.snapshot.params['details'];
        this.isChecked = false;
        this.favButton = "Add to favorites";
        this.getDetails(this.activity)
            .then(function (result) {
            _this.actDetails = result;
            _this.hasData = true;
        });
        this.checkFav()
            .then(function (result2) {
            _this.isChecked = result2;
            var favBtn = document.getElementById('fav');
            if (_this.isChecked) {
                favBtn.className = "btn btn-success";
                _this.favButton = "Remove from favorites";
            }
            else {
                favBtn.className = "btn btn-default";
            }
        });
    }
    DetailsComponent.prototype.getDetails = function (identifier) {
        var _this = this;
        return new Promise(function (resolve) {
            var param = { param: identifier };
            _this.dService.getByParam(param).subscribe(function (res) {
                resolve(res[0]);
            });
        });
    };
    DetailsComponent.prototype.request = function () {
        alert('You have booked this activity!');
    };
    DetailsComponent.prototype.checkFav = function () {
        var _this = this;
        var param = { identifier: this.activity };
        var favBtn = document.getElementById('fav');
        return new Promise(function (resolve2) {
            _this.dService.checkFavorite(param).subscribe(function (res) {
                resolve2(res);
            });
        });
    };
    DetailsComponent.prototype.favorite = function () {
        var _this = this;
        var param = { identifier: this.activity };
        var favBtn = document.getElementById('fav');
        this.dService.markFavorite(param).subscribe(function (res) {
            if (res) {
                favBtn.className = "btn btn-success";
                _this.favButton = "Remove from favorites";
            }
            else {
                favBtn.className = "btn btn-default";
                _this.favButton = "Add to favorites";
            }
        });
    };
    DetailsComponent.prototype.toggleComm = function () {
        this.addC = !this.addC;
    };
    DetailsComponent.prototype.submitCommen = function (name, mail, comment) {
        var param = {
            'username': name,
            'useremail': mail,
            'comment': comment,
            'identifier': this.activity
        };
        this.cService.addCommentforActivity(param).subscribe(function (res) {
            alert(res.msg);
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        templateUrl: 'details.component.html',
        styleUrls: ['details.component.css'],
        providers: [getDetails_service_1.DetailsService, getComments_service_1.CommentsService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, getDetails_service_1.DetailsService, getComments_service_1.CommentsService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map