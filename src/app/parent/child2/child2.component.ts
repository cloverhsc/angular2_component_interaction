import {Mydata} from '../mydata';
import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, DoCheck, OnChanges {

    @Input() pname: Mydata;
    @Input() locChanged: boolean;
    private oldData = new Mydata();
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(this.pname.firstname);
    }
    ngDoCheck() {
        console.log('--- in do check --');
        /*if ( this.locChanged) {
            console.log(this.pname.lastname);
        }*/
        /*if (this.oldData !== this.pname) {
            for (let index in this.pname ) {
                if (this.pname[index]) {
                    this.oldData[index] = this.pname[index];
                }
            }
        }*/
        console.log(this.pname.lastname);
    }
}
