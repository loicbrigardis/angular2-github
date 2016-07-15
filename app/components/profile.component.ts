import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms'
import { GitHubService } from '.././services/github.service';

import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

    user: any = new Array();
    repos: any = new Array();

    username: string;

    constructor(private _gitHubService: GitHubService) {
        this.user = false;
    }

    searchUser() {

        this._gitHubService.updateUser(this.username);

        this._gitHubService.getUser()
            .subscribe(
            user => { this.user = user; },
            error => { this.user = false; }
            )

        this._gitHubService.getRepos()
            .subscribe(
            repos => { this.repos = repos; }
            )
    }

    ngOnInit() {

    }

}