/* tslint:disable:no-unused-variable */

import {
  async, inject
} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuthService } from './core/auth';

//beforeEachProviders(() => [AppComponent, AuthService]);

describe('App: ServiceTracker', () => {
  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'Service Tracker\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Service Tracker');
    }));
});
