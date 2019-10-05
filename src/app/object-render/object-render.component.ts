import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-render',
  templateUrl: './object-render.component.html',
  styleUrls: ['./object-render.component.css']
})
export class ObjectRenderComponent implements OnInit {

  @Input() objRef: any;
  currentFormModel = {
    dataType: '',
    name: "",
    shortDesc: "",
    minLength: 0,
    maxLength: 100,
    defaultValue: "",
    helpText: '',
  };
  showForm = false;
  constructor() { }

  ngOnInit() {
  }

  returnZero() {
    return 0
  }

  toggleRightMenu(item){
    item.showRightMenu = (item.showRightMenu) ? false : true;
  }

  editItem(key){
    this.showForm = true;
    this.currentFormModel = this.objRef[key];
  }

  addItem(item){

  }

  save(){
    console.log(this.currentFormModel);
    console.log(this.objRef);
  }

  dataTypes = {
    number: {
      dataType: 'number',
      name: "",
      shortDesc: "",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/numbered-list.svg'
    },
    string: {
      dataType: 'string',
      name: "",
      shortDesc: "",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/align-to-left.svg'
    },
    object: {
      dataType: 'object',
      name: "",
      shortDesc: "",
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/folder.svg'
    },
    array: {
      dataType: 'array',
      name: "",
      shortDesc: "",
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/profiles.svg'
    }
  };

  test1() {
    this.objRef.id.value = 123;
  }

}
