import {Component} from 'angular2/core';
import {LoginService} from './login.service';

@Component({
    selector:'login',
    templateUrl: 'app/login/login.component.html',
    providers: [LoginService]
})
export class LoginComponent{
    constructor(private _loginService:LoginService){}
    username:string;
    email:string;
    password:string;

    login(){
        this._loginService.login(this.email, this.username, this.password)
            .subscribe(
                token => {
                    this.storeToken(token.json().token);
                },
                error => {

                }
            )
    }

    storeToken(token:string){
        localStorage.setItem('id_token', token);
    }
}