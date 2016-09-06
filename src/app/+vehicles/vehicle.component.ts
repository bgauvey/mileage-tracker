import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Location } from '@angular/common';

import { ModalService } from '../shared/modal/modal.service';
import { ToastService } from '../shared/toast/toast.service';
import { VehicleService, IVehicle, Vehicle } from '../core/vehicles';

@Component({
  selector: 'app-vehicle',
  templateUrl: 'vehicle.component.html',
  styleUrls: ['vehicle.component.css'],
})
export class VehicleComponent implements OnInit, OnDestroy {
  adding: boolean = false;
  vehicle: IVehicle;
  editableVehicle: IVehicle = new Vehicle('', '', '');

  private _sub: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _toastService: ToastService,
    private _modalService: ModalService,
    private _location: Location,
    private _vehicleService: VehicleService) {
    this.adding = false;
  }

  ngOnInit(): void {
    let id: string;
    let isNew: boolean;
    this._sub = this._route
      .queryParams
      .subscribe(params => {
        if (params[`id`] != null) {
          id = params[`id`];
          if (id === `new`) {
            isNew = true;
          }
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
        this._vehicleService.createVehicle(this.editableVehicle)
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
    } catch (error) {
      this.handleError(error);
    }
  }

  delete(): void {
    let msg = `Do you want to delete this vehicle?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
           this._vehicleService.removeVehicle(this.editableVehicle)
           .then(() => {
            this._toastService.activate(`Vehicle successully deleted.`, `Service Log`);
            this._gotoVehicles();
          },
          (error: any) => {
            this.handleError(error);
          });
      }
    });
  }

  private _getVehicle(id: string): void {
    if (id === `new`) {
      this.editableVehicle = new Vehicle('', '', '');
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
      this.editableVehicle = new Vehicle (
        vehicle.make,
        vehicle.model,
        vehicle.year
      );
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
