import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() ochild1 = new EventEmitter();
  public child1: string = 'child1 var';

  constructor() {
  }

  ngOnInit() {
  }

  child1Show(name: string) {
    console.log(`----- ${name}-------`);
  }

  changeChildVar() {
    this.child1 = 'new child 1 vvaarr....';
    console.log(` >>> ${this.child1} <<< `);
    // 在 click 之後去觸發 child1 的 output event
    this.ochild1.emit(this.child1);
  }

}
