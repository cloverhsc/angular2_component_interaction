import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {

  private Parent_var: string = 'clover';
  private get_from_child1: string;

  // 從 child1 拿method或是property
  @ViewChild(Child1Component) chil1: Child1Component;
  constructor() { }

  ngOnInit() {
    this.get_from_child1 = this.chil1.child1;
    this.chil1.child1Show(this.get_from_child1);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.get_from_child1 = this.chil1.child1;
    this.chil1.child1Show(this.get_from_child1);
  }
}
