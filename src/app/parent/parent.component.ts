import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {Mydata} from './mydata';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public Parent_var: string = '---------';
  public get_from_child1 = new Mydata();
  public isChanged: boolean;
  @ViewChild(Child1Component) child1: Child1Component;

  constructor() { }

  ngOnInit() { }

  getNewChild1(newChild1: Mydata) {
    this.get_from_child1 = newChild1;
    this.isChanged = this.child1.isChanged;
  }
}
