import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-render',
  templateUrl: './object-render.component.html',
  styleUrls: ['./object-render.component.css']
})
export class ObjectRenderComponent implements OnInit {

  @Input() objRef: any;
  constructor() { }

  ngOnInit() {
  }

  returnZero() {
    return 0
  }

  test1() {
    this.objRef.id.value = 123;
  }

}
