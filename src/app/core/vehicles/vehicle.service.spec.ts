/* tslint:disable:no-unused-variable */

import {
  async, inject
} from '@angular/core/testing';
import { VehicleService } from './vehicle.service';

describe('Vehicle Service', () => {
//  beforeEachProviders(() => [VehicleService]);

  it('should ...',
      inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
