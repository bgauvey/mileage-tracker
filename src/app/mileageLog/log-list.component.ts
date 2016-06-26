import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { IMilageLog} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'mileage-log',
    templateUrl: 'log-list.component.html',
    directives: [ROUTER_DIRECTIVES, FilterTextboxComponent]
})
export class LogListComponent implements OnInit {

    title: string;
    filterText: string;
    logs: IMilageLog[] = [];
    filteredLogs: IMilageLog[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.title = 'Mileage Log';
        this.filterText = 'Filter Entries:';

        this.dataService.getLogs()
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