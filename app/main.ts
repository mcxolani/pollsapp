import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {Http, HTTP_PROVIDERS}    from 'angular2/http';
import 'rxjs/Rx';
import {AuthHttp, AuthConfig} from "angular2-jwt/angular2-jwt";
import {bind, provide} from "angular2/core";

bootstrap(AppComponent, [
  HTTP_PROVIDERS
  //provide(AuthHttp, {
  //  useFactory: (http) => {
  //    return new AuthHttp(new AuthConfig(), http);
  //  },
  //  deps: [Http]
  //})
])
