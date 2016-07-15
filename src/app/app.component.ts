import { Component, OnInit } from '@angular/core';
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

import {FirebaseAuth } from 'angularfire2';

import { ModalComponent, SpinnerComponent, ToastComponent } from './shared';
import { AuthService } from './core/auth';
import { APP_PROVIDERS } from './app.providers';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [MD_SIDENAV_DIRECTIVES,
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
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private firebaseAuth: FirebaseAuth) { }

  title: string = 'Service Tracker';
  userImage: string = '';

  isAauthenticated(): boolean {
    return this.auth.authenticated;
  }

  ngOnInit(): void {
    this.firebaseAuth.subscribe((data) => {
      if (data) {
        this.userImage = data.auth.photoURL;
      }
    });
  }

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
