import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { IMilageLog } from './mileage-log';
import { MileageLogService } from './mileage-log.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
    moduleId: module.id,
    selector: 'log',
    templateUrl: 'log-detail.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [CapitalizePipe]
})
export class LogDetailComponent implements OnInit, OnDestroy {
    private sub: any;
    log: IMilageLog;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _service: MileageLogService) { }

    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                console.info(params['id']);
                let id = +params['id']; // (+) converts string 'id' to a number
                this._service.getLog(id)
                    .subscribe((log: IMilageLog) => this.log = log);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    deleteLog() {
        this._service.deleteLog(this.log.id);
        window.history.back();
    }
}