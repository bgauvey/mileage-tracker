/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { VehicleService } from './vehicle.service';

describe('Vehicle Service', () => {
  beforeEachProviders(() => [VehicleService]);

  it('should ...',
      inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
