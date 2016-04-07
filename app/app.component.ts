import {Component} from 'angular2/core';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <main></main>
            <login></login>
            <h1>My First Angular 2 App</h1>
        </div>
    `,
    directives: [MainComponent, LoginComponent],
})
export class AppComponent { }