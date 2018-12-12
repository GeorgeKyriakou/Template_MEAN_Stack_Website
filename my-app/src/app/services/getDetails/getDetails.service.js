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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DetailsService = (function () {
    function DetailsService(http) {
        this.http = http;
    }
    DetailsService.prototype.getByParam = function (param) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('//localhost:4000/activities/getByParam', JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DetailsService.prototype.markFavorite = function (param) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('//localhost:4000/activities/markFav', JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DetailsService.prototype.checkFavorite = function (param) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('//localhost:4000/activities/checkFav', JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return DetailsService;
}());
DetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DetailsService);
exports.DetailsService = DetailsService;
//# sourceMappingURL=getDetails.service.js.map