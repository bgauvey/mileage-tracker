/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  async, inject
} from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('Component: SignIn', () => {
  it('should create an instance', () => {
    let component = new SignInComponent(null, null);
    expect(component).toBeTruthy();
  });
});
