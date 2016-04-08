import {Component, OnInit} from 'angular2/core';
import {VoteService} from './vote.service';

@Component({
    selector:"vote",
    templateUrl:"app/vote/vote.component.html",
    providers:[VoteService]
})

export class VoteComponent {
    constructor(private _voteService:VoteService){}

    vote(){
        this._voteService.vote().subscribe(
            data => {console.log("my data is",data);
                    this.polls = data;
            },
            err => console.log(err)
        );
    }

}