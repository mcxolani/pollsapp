import {Component} from 'angular2/core';
import {MainComponent} from './main/main.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <main></main>
            <h1>My First Angular 2 App</h1>
        </div>
    `,
    directives:[MainComponent]
})
export class AppComponent { }