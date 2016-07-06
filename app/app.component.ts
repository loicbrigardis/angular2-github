import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ProfileComponent]
})
export class AppComponent { }
