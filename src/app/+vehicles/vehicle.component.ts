import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Location } from '@angular/common';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

import { ModalService, ToastService } from '../shared';
import { VehicleService, IVehicle, Vehicle } from '../core/vehicles';

@Component({
  moduleId: module.id,
  selector: 'app-vehicle',
  templateUrl: 'vehicle.component.html',
  styleUrls: ['vehicle.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdInput, ROUTER_DIRECTIVES],
})
export class VehicleComponent implements OnInit {
  adding: boolean = false;
  vehicle: IVehicle;
  private _sub: any;

  constructor(private _router: Router,
    private _toastService: ToastService,
    private _modalService: ModalService,
    private _location: Location,
    private _vehicleService: VehicleService) {
    this.adding = false;
  }

  ngOnInit(): void {
    let id: string;
    let isNew: boolean;
    this._sub = this._router
      .routerState
      .queryParams
      .subscribe(params => {
        if (params[`id`] != null) {
          id = params[`id`];
          if (id === `new`) isNew = true;
        }
      });
    this.adding = isNew;
    this._getVehicle(id);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  save(): void {
    try {
      if (this.adding) {
        this._vehicleService.createVehicle(this.vehicle)
          .then(() => {
            this._toastService.activate(`Successfully added entry`);
            this._gotoVehicles();
          },
          (error) => {
            this.handleError(error);
          }
          );
      } else {
        this._vehicleService.updateVehicle(this.vehicle, {
          make: this.vehicle.make,
          model: this.vehicle.model,
          year: this.vehicle.year
        })
          .then(() => {
            this._toastService.activate(`Successfully updated entry`);
          },
          (error) => {
            this.handleError(error);
          }
          );
      }
    }
    catch (error) {
      this.handleError(error);
    }
  }

  delete(): void {
 	  //
  }

  private _getVehicle(id: string): void {
    if (id === `new`) {
      this.vehicle = new Vehicle('', '', '');
      return;
    }
    this._vehicleService.getById(id)
      .subscribe((vehicle: IVehicle) => this._setEditVehicle(vehicle),
      (error) => {
        this._toastService.activate(`${error}`);
        return Observable.of();
      });
  }

  private _setEditVehicle(vehicle: IVehicle): void {
    if (vehicle) {
      this.vehicle = vehicle;
    } else {
      this._gotoVehicles();
    }
  }

  private _gotoVehicles(): void {
    this._location.back();
  }

  private handleError(error: any): void {
    this._toastService.activate(`${error}`);
  }

}
