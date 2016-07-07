import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MileageLogService } from '../mileageLog/mileage-log.service';
import { IMilageLog} from '../mileageLog/mileage-log';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    logs: IMilageLog[] = [];

    constructor(
        private router: Router,
        private _service: MileageLogService) {
    }

    ngOnInit() {
        this._service.getLogs()
            .subscribe((logs: IMilageLog[]) => {
                this.logs = logs;
            });
    }

    gotoDetail(log: IMilageLog) {
        let logId = log ? log.id : null;
        this.router.navigate(['/mileageLog'], { queryParams: { id: logId } });
    }
}
