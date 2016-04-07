import {Component, OnInit} from 'angular2/core';
import {MainService} from './main.service';
import {Poll} from './poll';

@Component({
    selector:"main",
    templateUrl:"app/main/main.component.html",
    providers:[MainService]
})

export class MainComponent implements OnInit{
    constructor(private _mainService:MainService){}
    polls:Poll[];
    ngOnInit():any {
        let token = localStorage.getItem('id_token');
        console.log("mytoken is",token);
        this._mainService.getPolls().subscribe(
            data => {console.log("my data is",data);
                    this.polls = data;
            },
            err => console.log(err)
        );

        //this._mainService.getPoll(2).subscribe(
        //    poll=>{
        //        console.log(poll)
        //    },
        //    err => {
        //        console.log(err)
        //    }
        //);
    }

}