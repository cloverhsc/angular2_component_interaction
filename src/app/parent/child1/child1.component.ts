import {Mydata} from '../mydata';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() ochild1 = new EventEmitter();
  public child1 = new Mydata();
  public isChanged: boolean = false;
  private count: number = 1;

  constructor() {
      this.child1.firstname = 'clover';
      this.child1.lastname = 'Hsc';
  }

  ngOnInit() {
  }

  child1Show(name: string) {
    console.log(`----- ${name}-------`);
  }

  changeChildVar() {
    if (this.count === 1) {
        this.child1.lastname = 'Kyo';
        this.count = 0;
    } else if (this.count === 0) {
        this.child1.lastname = 'Hsc';
        this.count = 1 ;
    }
    // this.isChanged = true;
    // 在 click 之後去觸發 child1 的 output event
    this.ochild1.emit(this.child1);
  }

}
