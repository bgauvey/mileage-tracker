import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { IMilageLog} from '../shared/interfaces';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    logs: IMilageLog[] = [];

    constructor(
        private router: Router,
        private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getLogs()
            .subscribe((logs: IMilageLog[]) => {
                this.logs = logs.slice(1, 5);
            });
    }

    gotoDetail(log: IMilageLog) {
        let logId = log ? log.id : null;
        this.router.navigate(['/mileageLog'], { queryParams: { id: logId } });
    }
}
