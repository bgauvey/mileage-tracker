import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { MileageLogService } from './mileage-log.service';
import { FilterTextComponent } from '../blocks/filter-text/filter-text.component';
import { IMilageLog} from './mileage-log';

@Component({
    moduleId: module.id,
    selector: 'mileage-log',
    templateUrl: 'log-list.component.html',
    styleUrls: ['log-list.component.css'],
    directives: [ROUTER_DIRECTIVES, FilterTextComponent]
})
export class LogListComponent implements OnInit {

    title: string;
    filterText: string;
    logs: IMilageLog[] = [];
    filteredLogs: IMilageLog[] = [];

    constructor(private _service: MileageLogService) { }

    ngOnInit() {
        this.title = 'Mileage Log';
        this.filterText = 'Filter Entries:';

        this._service.getLogs()
            .subscribe((logs: IMilageLog[]) => {
                this.logs = this.filteredLogs = logs;
            });
    }

    filterChanged(data: string) {
        if (data && this.logs) {
            data = data.toUpperCase();
            let props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
            let filtered = this.logs.filter(item => {
                let match = false;
                for (let prop of props) {
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                };
                return match;
            });
            this.filteredLogs = filtered;
        }
        else {
            this.filteredLogs = this.logs;
        }
    }

}