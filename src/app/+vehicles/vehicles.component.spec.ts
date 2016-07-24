/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';

describe('Component: Vehicle', () => {
  it('should create an instance', () => {
    let component = new VehicleComponent(null, null, null, null,null);
    expect(component).toBeTruthy();
  });
});
