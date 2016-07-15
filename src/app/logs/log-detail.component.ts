import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdRadioButton, MdRadioGroup } from '@angular2-material/radio';

import { ModalService } from '../shared';
import { ToastService } from '../shared/toast/toast.service';
import { EntityService } from '../shared/entity.service';
import { InitCapsPipe } from '../shared/init-caps.pipe';

import { LogService, ILog, Log } from '../core/logs';

declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'log-detail',
  templateUrl: 'log-detail.component.html',
  styleUrls: ['log-detail.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdInput, MdRadioButton, MdRadioGroup, ROUTER_DIRECTIVES],
  pipes: [InitCapsPipe]
})
export class LogDetailComponent implements OnInit, OnDestroy, AfterViewChecked {

  editableLog: ILog = new Log(0, 0, 0, 0, 0, 0, '');
  log: ILog;
  adding: boolean = false;
  private sub: any;

  constructor(private _router: Router,
    private _toastService: ToastService,
    private _modalService: ModalService,
    private _entityService: EntityService,
    private _location: Location,
    private _logService: LogService) { }

  ngAfterViewChecked(): void {
    componentHandler.upgradeDom();
  }

  ngOnInit(): void {
    let id: string;
    this.sub = this._router
      .routerState
      .queryParams
      .subscribe(params => {
        if (params[`id`] != null) {
          id = params[`id`];
          if (id === `new`) this.adding = true;
        }
      });
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
    }
    catch (error) {
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
          (error) => {
            this.handleError(error);
          }
          );
      }
    });
  }

  private handleError(error): void {
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
      this.editableLog = new Log(0, 0, 0, 0, 0, 0, ''); // this._entityService.clone(this.log);
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
