import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {RequestOptions} from "angular2/http";
import {Headers} from "angular2/http";
import {Poll} from "../main/poll";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService{
    constructor(private _http:Http){}
    baseUrl:string = "http://localhost:8000";

    login(email:string, username:string, password:string){
        let url = `${this.baseUrl}/api-token-auth/`;
        email = "masuku@masuku.com";
        username = "masuku";
        password = "xolani.m89";
        let body = JSON.stringify({ email, username, password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(url, body, options)
            .catch(this.handleError);

    }

    private handleError (error: Response) {
        console.error('xolani err', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}