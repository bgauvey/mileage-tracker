import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';

@Component({
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [APP_PROVIDERS]
})
export class AppComponent {
  constructor() { }
}