import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username: string;

    constructor(private _http: Http) { 
        this.username ='loic';
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json())
    }

}