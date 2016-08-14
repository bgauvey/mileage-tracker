/* tslint:disable:no-unused-variable */

import {
  async, inject
} from '@angular/core/testing';
import { LogService } from './log.service';
import { AngularFire } from 'angularfire2';

describe('Log Service', () => {
  //beforeEachProviders(() => [LogService, AngularFire]);

  it('should ...',
      inject([LogService, AngularFire], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
