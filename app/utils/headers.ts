import {Headers} from "angular2/http";
import {Auth} from "./auth";

export class AppHeaders{
    constructor(private _auth:Auth){}
    getHeaders(){
        var authHeader = new Headers();
        //let token = this._auth.getToken();
        //authHeader.append('Authorization', 'JWT ' + token);

        return authHeader;
    }
}
