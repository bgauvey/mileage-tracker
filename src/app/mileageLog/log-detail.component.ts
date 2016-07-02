import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { IMilageLog } from './mileage-log';
import { MileageLogService } from './mileage-log.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { EntityService, ToastService, ModalService } from '../blocks/blocks';

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'log',
    templateUrl: 'log-detail.component.html',
    directives: [ROUTER_DIRECTIVES],
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
        private _entityService: EntityService) { }

    ngOnInit() {
        componentHandler.upgradeDom();
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                console.info(params['id']);
                let id = +params['id']; // (+) converts string 'id' to a number
                this._service.getLog(id)
                    .subscribe((log: IMilageLog) => this.log = log,
                    (error) => {
                        this._toastService.activate(`${error}`);
                        return Observable.of();
                    });
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    deleteLog() {
        let msg = `Do you want to delete this record?`;
        this._modalService.activate(msg).then(responseOK => {
            if (responseOK) {
                this.cancel(false);
                this._service.deleteLog(this.log.id);
                this._toastService.activate('Log successully deleted.', 'Mileage Log');
                window.history.back();
            }
        });
    }

    cancel(showToast = true) {
        this.editLog = this._entityService.clone(this.log);
        if (showToast) {
            this._toastService.activate(`Cancelled changes to entry`);
        }
    }
}