import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { IMilageLog } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
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
        private dataService: DataService) { }

    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                console.info(params['id']);
                let id = +params['id']; // (+) converts string 'id' to a number
                this.dataService.getLog(id)
                    .subscribe((log: IMilageLog) => this.log = log);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    deleteLog() {
        this.dataService.deleteLog(this.log.id);
        window.history.back();
    }
}