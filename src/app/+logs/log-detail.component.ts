import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute /*, ROUTER_DIRECTIVES*/ } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ModalService } from '../shared/modal/modal.service';
import { ToastService } from '../shared/toast/toast.service';
import { EntityService } from '../shared/entity.service';
import { LogService, ILog, Log } from '../core/logs';
import { VehicleService, IVehicle } from '../core/vehicles';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.css'],
})
export class LogDetailComponent implements OnInit, OnDestroy {

  editableLog: ILog = new Log(0, 0, 0, 0, '', 0, '');
  log: ILog;
  adding: boolean = false;
  vehicles: Observable<IVehicle[]>;
  private sub: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _toastService: ToastService,
    private _modalService: ModalService,
    private _entityService: EntityService,
    private _location: Location,
    private _logService: LogService,
    private _vehicleService: VehicleService) {
      this.adding = false;
    }

  ngOnInit(): void {
    let id: string;
    let isNew: boolean;
    this.vehicles = this._vehicleService.getAll();
    this.sub = this._route
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
    this._getLog(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save(): void {
    try {
      if (this.adding) {
        this._logService.createLog(this.editableLog)
          .then(() => {
            this._toastService.activate(`Successfully added entry`);
            this._gotoLogs();
          },
          (error) => {
            this.handleError(error);
          }
          );
      } else {
        this._logService.updateLog(this.log, {
          costPerGallon: this.editableLog.costPerGallon,
          gallons: this.editableLog.gallons,
          odometer: this.editableLog.odometer,
          totalCost: this.editableLog.totalCost,
          vehicleId: this.editableLog.vehicleId,
          logType: this.editableLog.logType
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

  deleteLog(): void {
    let msg = `Do you want to delete this record?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this._logService.removeLog(this.log)
          .then(() => {
            this._toastService.activate(`Log successully deleted.`, `Service Log`);
            this._gotoLogs();
          },
          (error: any) => {
            this.handleError(error);
          }
          );
      }
    });
  }

  private handleError(error: any): void {
    this._toastService.activate(`${error}`);
  }

  private _gotoLogs(): void {
    this._location.back();
  }

  private _setEditLog(log: ILog): void {
    if (log) {
      this.log = log;
      this.editableLog = new Log(
        log.odometer,
        log.gallons,
        log.costPerGallon,
        log.totalCost,
        log.vehicleId,
        log.logType,
        log.description
      );
    } else {
      this._gotoLogs();
    }
  }

  private _getLog(id: string): any {
    if (id === `new`) {
      this.editableLog = new Log(0, 0, 0, 0, '', 0, '');
      return;
    }
    this._logService.getById(id)
      .subscribe((log: ILog) => this._setEditLog(log),
      (error) => {
        this._toastService.activate(`${error}`);
        return Observable.of();
      });
  }
}
