import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {Poll} from './poll';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";

@Injectable()
export class MainService {
    constructor(private _http:Http){}
    baseUrl:string = "http://localhost:8000";

    getPolls(){
        let url = `${this.baseUrl}/polls/`;
        let authHeader = new Headers();
        let token = this.getToken();
        console.log("get polls token: ",token);
        authHeader.append('Authorization', 'JWT ' + token);
        return this._http.get(url, {headers:authHeader})
                .map(res => res.json())
                .catch(this.handleError);

    }

    getToken(){
        return localStorage.getItem('id_token');
    }

    getPoll(id:Number){
        let url = `${this.baseUrl}/polls/${id}`
        return this._http.get(url)
                .map(res => res.json())
                .catch(this.handleError);
    }

    private handleError (error) {
        console.error("my error: ",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
