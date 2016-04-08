import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {Poll} from '../utils/poll';
import {RequestOptions, Headers} from "angular2/http";

@Injectable()
export class VoteService {
    constructor(private _http:Http){}
    baseUrl:string = "http://localhost:8000";

    vote(question_id:Number, choice:Number){
        let url = `${this.baseUrl}/polls/${question_id}/vote/`;
        let body = JSON.stringify({choice})
        let authHeader = new Headers();
        let token = this.getToken();
        console.log("get polls token: ",token);
        authHeader.append('Authorization', 'JWT ' + token);
        return this._http.put(url, body ,{headers:authHeader})
                .map(res => res.json())
                .catch(this.handleError);

    }

    getToken(){
        return localStorage.getItem('id_token');
    }


    private handleError (error) {
        console.error("my error: ",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
