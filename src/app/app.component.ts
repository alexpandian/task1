import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testObject = {
    name: 'alex',
    age: 25,
    text: [
      'sadsad', 'sadasd'
    ],
    test: { nsfdsfd: 'fdadsfasd' }
  };

  formObject = {
    id: {
      dataType: 'number',
      value: 10,
      name: "id",
      shortDesc: "id desc",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/numbered-list.svg'
    },
    address: {
      dataType: 'object',
      name: "address",
      shortDesc: "address desc",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/folder.svg',
      value: {
        city: {
          dataType: 'string',
          value: 'chennai',
          iconUrl: 'assets/align-to-left.svg'
        },
        street: {
          dataType: 'string',
          value: 'gandhi street',
          iconUrl: 'assets/align-to-left.svg'
        }
      }
    },
    testArray: {
      dataType: 'array',
      name: "testArray",
      shortDesc: "testArray desc",
      minLength: 0,
      maxLength: 100,
      defaultValue: "",
      hide: false,
      helpText: '',
      iconUrl: 'assets/profiles.svg',
      value: {
        city: {
          dataType: 'string',
          value: 'chennai',
          iconUrl: 'assets/align-to-left.svg'
        },
        street: {
          dataType: 'string',
          value: 'gandhi street',
          iconUrl: 'assets/align-to-left.svg'
        }
      }
    }
  };

  testCheck() {
    this.formObject.id.value = 1000;
  }

  getJsonFromObject(object) {
    let finalObject: any = {};
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        let item = object[prop];
        switch (item.dataType) {
          case 'object':
            finalObject[prop] = this.getJsonFromObject(item.value);
            break;
          case 'array':
            finalObject[prop] = this.getJsonFromArray(item.value);
            break;
          default:
            finalObject[prop] = item.value;
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
}
