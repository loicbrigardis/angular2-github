import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GitHubService {
    private _username: string;
    private _urlApiGit = "https://api.github.com/users/";

    constructor(private _http: Http) {

    }
    //user info
    getUser() {
        return this._http.get(this._urlApiGit + this. _username)
            .map(res => res.json())
    }

    //user repos
    getRepos() {
        return this._http.get(this._urlApiGit + this._username + '/repos')
            .map(res => res.json())
    }

    updateUser(username: string) {
        this._username = username;
    }

}