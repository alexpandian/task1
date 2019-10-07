import { Injectable } from '@angular/core';

@Injectable()
export class JsonFormatService {

  constructor() { }

  dataTypes = {
    number: {
      dataType: 'number',
      name: "number",
      shortDesc: "",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      value: 0,
      iconUrl: 'assets/numbered-list.svg'
    },
    string: {
      dataType: 'string',
      name: "text",
      shortDesc: "",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      value: '',
      iconUrl: 'assets/align-to-left.svg'
    },
    object: {
      dataType: 'object',
      name: "folder",
      shortDesc: "",
      defaultValue: "",
      hide: false,
      helpText: '',
      value: [],
      iconUrl: 'assets/folder.svg'
    },
    array: {
      dataType: 'array',
      name: "list",
      shortDesc: "",
      defaultValue: "",
      hide: false,
      helpText: '',
      value: [],
      iconUrl: 'assets/profiles.svg'
    }
  };

  formObject = [
    {
      dataType: 'number',
      value: 100,
      name: "id",
      shortDesc: "id desc",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/numbered-list.svg'
    },
    {
      dataType: 'object',
      name: "address",
      shortDesc: "address desc jih",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/folder.svg',
      value: [
        {
          dataType: 'string',
          value: 'chennai',
          name: "city",
          shortDesc: "city desc",
          minLength: 0,
          maxLength: 100,
          defaultValue: "",
          hide: false,
          helpText: '',
          iconUrl: 'assets/align-to-left.svg'
        },
        {
          dataType: 'string',
          value: 'gandhi street',
          name: "street",
          shortDesc: "street desc",
          minLength: 0,
          maxLength: 100,
          defaultValue: "",
          hide: false,
          helpText: '',
          iconUrl: 'assets/align-to-left.svg'
        }
      ]
    },
    {
      dataType: 'array',
      name: "testArray",
      shortDesc: "testArray desc",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/profiles.svg',
      value: [
        {
          dataType: 'string',
          value: 'chennai',
          name: "city",
          shortDesc: "city desc",
          minLength: 0,
          maxLength: 100,
          defaultValue: "",
          hide: false,
          helpText: '',
          iconUrl: 'assets/align-to-left.svg'
        },
        {
          dataType: 'string',
          value: 'gandhi street',
          name: "street",
          shortDesc: "street desc",
          minLength: 0,
          maxLength: 100,
          defaultValue: "",
          hide: false,
          helpText: '',
          iconUrl: 'assets/align-to-left.svg'
        }
      ]
    }
  ];

  addItem(parent) {
    let newItem = {
      dataType: 'string',
      value: 'test',
      name: "text",
      shortDesc: "text desc",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
    };
    parent.push(newItem);
    return (parent.length - 1);
  }

  getFinalJson() {
    return this.getJsonFromObject(this.formObject);
  }

  getJsonFromObject(object) {
    let finalObject: any = {};
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        let item = object[prop];
        switch (item.dataType) {
          case 'object':
            finalObject[item.name] = this.getJsonFromObject(item.value);
            break;
          case 'array':
            finalObject[item.name] = this.getJsonFromArray(item.value);
            break;
          default:
            finalObject[item.name] = item.value;
            break;
        }
      }
    }
    return finalObject;
  }

  getJsonFromArray(object) {
    let finalObject: any = [];
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        let item = object[prop];
        switch (item.dataType) {
          case 'object':
            finalObject.push(this.getJsonFromObject(item.value));
            break;
          case 'array':
            finalObject.push(this.getJsonFromArray(item.value));
            break;
          default:
            finalObject.push(item.value);
            break;
        }
      }
    }
    return finalObject;
  }

}
