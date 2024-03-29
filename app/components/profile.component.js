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
var core_1 = require('@angular/core');
var github_service_1 = require('.././services/github.service');
require('rxjs/add/operator/map');
var ProfileComponent = (function () {
    function ProfileComponent(_gitHubService) {
        this._gitHubService = _gitHubService;
        this.user = new Array();
        this.repos = new Array();
        this.user = false;
    }
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        this._gitHubService.updateUser(this.username);
        this._gitHubService.getUser()
            .subscribe(function (user) { _this.user = user; }, function (error) { _this.user = false; });
        this._gitHubService.getRepos()
            .subscribe(function (repos) { _this.repos = repos; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html'
        }), 
        __metadata('design:paramtypes', [github_service_1.GitHubService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map