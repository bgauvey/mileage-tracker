/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogService } from './log.service';
import { AngularFire } from 'angularfire2';

describe('Log Service', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LogService,
        AngularFire
      ],
    });
  });

  it('should ...',
      inject([LogService, AngularFire], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
