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
var router_1 = require("@angular/router");
var getComments_service_1 = require("../../services/getComments/getComments.service");
var CommentListComponent = (function () {
    function CommentListComponent(route, cService) {
        var _this = this;
        this.route = route;
        this.cService = cService;
        this.activity = route.snapshot.params['details'];
        this.getComments(this.activity)
            .then(function (response) {
            _this.comments = response;
            console.log(_this.comments);
        });
    }
    CommentListComponent.prototype.getComments = function (param) {
        var _this = this;
        return new Promise(function (resolve) {
            var send = { identifier: param };
            _this.cService.getCommentforActivity(send).subscribe(function (res) {
                resolve(res);
            });
        });
    };
    return CommentListComponent;
}());
CommentListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'comment',
        templateUrl: 'addComment.component.html',
        styleUrls: ['addComment.component.css'],
        providers: [getComments_service_1.CommentsService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, getComments_service_1.CommentsService])
], CommentListComponent);
exports.CommentListComponent = CommentListComponent;
//# sourceMappingURL=addComment.component.js.map