import { Component, OnInit } from '@angular/core';
import { GitHubService } from '.././services/github.service';
import 'rxjs/add/operator/map';


@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

    user = new Array();
 

    constructor(private _gitHubService: GitHubService) { 
        this._gitHubService.getUser()
            .subscribe(user => {
                console.log(user);
                this.user = user;
                })
    }

    ngOnInit() { 
        
    }

}