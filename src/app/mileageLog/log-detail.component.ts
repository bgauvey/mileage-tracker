import { Component, Input, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs/Rx';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

import { IMilageLog } from './mileage-log';
import { MileageLogService } from './mileage-log.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { EntityService, ToastService, ModalService } from '../blocks/blocks';

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'log',
    templateUrl: 'log-detail.component.html',
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdInput, ROUTER_DIRECTIVES],
    pipes: [CapitalizePipe]
})
export class LogDetailComponent implements OnInit, OnDestroy {
    private sub: any;

    @Input() log: IMilageLog;
    editLog: IMilageLog = <IMilageLog>{};

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _service: MileageLogService,
        private _toastService: ToastService,
        private _modalService: ModalService,
        private _entityService: EntityService,
        private _location: Location) { }

    ngAfterViewChecked() {
        componentHandler.upgradeDom();
    }

    ngOnInit() {
        var id: number;
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                if (params['id'] != null) {
                    id = +params['id']; // (+) converts string 'id' to a number
                }
            });
        this._getLog(id);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    isAddMode() {
        return this.editLog.id == null;
    }

    save() {
        let log = this.log = this._entityService.merge(this.log, this.editLog);
        if (log.id == null) {
            this._service.createLog(log)
                .subscribe(l => {
                    this._setEditLog(l);
                    this._toastService.activate(`Successfully added entry`);
                    this._gotoLogs();
                });
            return;
        }
        this._service.updateLog(this.log)
            .subscribe(() => this._toastService.activate(`Successfully saved entry`));
    }

    deleteLog() {
        let msg = `Do you want to delete this record?`;
        this._modalService.activate(msg).then(responseOK => {
            if (responseOK) {
                this.cancel(false);
                this._service.deleteLog(this.editLog.id);
                this._toastService.activate(`Log successully deleted.`, `Mileage Log`);
                this._gotoLogs();
            }
        });
    }

    cancel(showToast = true) {
        this.editLog = this._entityService.clone(this.log);
        if (showToast) {
            this._toastService.activate(`Cancelled changes to entry`);
        }
    }

    private _gotoLogs() {
        this._location.back();
    }

    private _setEditLog(log: IMilageLog) {
        if (log) {
            this.log = log;
            this.editLog = this._entityService.clone(this.log);
        } else {
            this._gotoLogs();
        }
    }


    private _getLog(id: number) {
        if (isNaN(id) || id === 0) {
            this.log = <IMilageLog>{ date: new Date() };
            this.editLog = this._entityService.clone(this.log);
            return;
        }
        this._service.getLog(id)
            .subscribe((log: IMilageLog) => this._setEditLog(log),
            (error) => {
                this._toastService.activate(`${error}`);
                return Observable.of();
            });
    }


}