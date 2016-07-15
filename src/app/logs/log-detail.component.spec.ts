/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LogDetailComponent } from './log-detail.component';

describe('Component: LogDetail', () => {
  it('should create an instance', () => {
    let component = new LogDetailComponent(null, null, null, null,null, null)
    expect(component).toBeTruthy();
  });
});
