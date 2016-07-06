import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GitHubService } from './services/github.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ProfileComponent],
    providers: [HTTP_PROVIDERS, GitHubService]
})
export class AppComponent { }
