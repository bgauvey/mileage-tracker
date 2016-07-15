/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LogService } from './log.service';

describe('Log Service', () => {
  beforeEachProviders(() => [LogService]);

  it('should ...',
      inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
