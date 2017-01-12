import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public child1: string = 'child1 var';

  constructor() { }

  ngOnInit() {
    this.child1 = 'new child1 name: clover';
  }

  child1Show(name: string) {
    console.log(`----- ${name}-------`);
  }

}
