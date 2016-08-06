import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup } from '@angular2-material/radio';
import { MdIcon } from '@angular2-material/icon';

import { ModalComponent, SpinnerComponent, ToastComponent } from './shared';
import { AuthService } from './core/auth';
import { APP_PROVIDERS } from './app.providers';

declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES,
    ModalComponent,
    SpinnerComponent,
    ToastComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [APP_PROVIDERS]
})
export class AppComponent {
  title: string = 'Service Tracker';

  views: Object[] = [
    {
      name: 'Home',
      description: 'Home page',
      icon: 'home',
      href: ''
    },
    {
      name: 'Vehicles',
      description: 'Vehicles listing',
      icon: 'directions_car',
      href: 'vehicles'
    },
    {
      name: 'Log',
      description: 'Service log',
      icon: 'history',
      href: 'logs'
    },
    {
      name: 'My Account',
      description: 'Edit my account information',
      icon: 'assignment_ind',
      href: '#'
    }
  ];

  constructor(private auth: AuthService) { }

  isAauthenticated(): boolean {
    return this.auth.authenticated;
  }

  userIamge(): string {
    return this.auth.userImage;
  }
  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
