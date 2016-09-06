import { VehicleService } from './vehicle.service';

export { VehicleService };
export { IVehicle, Vehicle } from './vehicle';

export const VEHICLE_PROVIDERS: any[] = [
  VehicleService
];
