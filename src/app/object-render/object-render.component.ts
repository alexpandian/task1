import { Component, OnInit, Input } from '@angular/core';
import { JsonFormatService } from '../json-format.service';

@Component({
  selector: 'app-object-render',
  templateUrl: './object-render.component.html',
  styleUrls: ['./object-render.component.css']
})
export class ObjectRenderComponent implements OnInit {

  @Input() objRef: any;
  currentIndex = null;
  currentItem = null;
  showForm = false;
  constructor(public jsonFormatService: JsonFormatService) { }

  ngOnInit() {
  }

  returnZero() {
    return 0
  }

  toggleRightMenu(item) {
    item.showRightMenu = (item.showRightMenu) ? false : true;
  }

  editItem(item) {
    this.showForm = true;
    this.currentItem = item;
  }

  addItem(parent) {
    let index = this.jsonFormatService.addItem(parent);
    this.currentIndex = index;
    this.currentItem = parent[index];
    this.showForm = true;
  }

  dataTypeChanged() {
    let dataType = this.currentItem.dataType;
    let object = this.jsonFormatService.dataTypes[dataType];
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        this.currentItem[prop] = object[prop];
      }
    }
    //this.currentItem = Object.assign({}, this.jsonFormatService.dataTypes[dataType]);
  }

  close() {
    this.toggleRightMenu(this.objRef);
    this.showForm = false;
  }

  save() {
    this.close();
  }

}
