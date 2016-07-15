import 'rxjs/add/observable/merge';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth';
import { IVehicle, Vehicle } from './vehicle';

@Injectable()
export class VehicleService {

  private vehicles$: FirebaseListObservable<IVehicle[]>;
  private path: string;

  constructor(private af: AngularFire, auth: AuthService) {
    this.path = `/${auth.id}/vehicles`;

    this.vehicles$ = af.database.list(this.path);
  }

  getAll(): any {
     return Observable.merge(this.vehicles$);
  }

  getById(id: string): any {
    let vehicle: FirebaseObjectObservable<IVehicle>;
    vehicle = this.af.database.object(this.path + `/` + id);
    return Observable.merge(vehicle);
  }

  createVehicle(vehicle: IVehicle): firebase.Promise<any> {
    return this.vehicles$.push(new Vehicle(
      vehicle.make,
      vehicle.model,
      vehicle.year
    ));
  }

  removeVehicle(vehicle: IVehicle): firebase.Promise<any> {
    return this.vehicles$.remove(vehicle.$key);
  }

  updateVehicle(vehicle: IVehicle, changes: any): firebase.Promise<any> {
    return this.vehicles$.update(vehicle.$key, changes);
  }
}
