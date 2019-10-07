import { Component } from '@angular/core';
import { JsonFormatService } from './json-format.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonFormatService]
})
export class AppComponent {
  constructor(public jsonFormatService: JsonFormatService) {

  }

  getFinalJson() {
    return this.jsonFormatService.getFinalJson();
  }

}
