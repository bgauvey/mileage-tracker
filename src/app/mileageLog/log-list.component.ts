import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { MileageLogService } from './mileage-log.service';
import { FilterTextComponent, FilterService } from '../blocks/filter-text/filter-text';
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
    logs: IMilageLog[] = [];
    filteredLogs: IMilageLog[] = [];
    @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

    constructor(private _filterService: FilterService,
                private _service: MileageLogService) { }

    ngOnInit() {
        this.title = 'Mileage Log';

        this.getVehicles();
    }

  getVehicles() {
    this.logs = [];
    this._service.getLogs()
      .subscribe(logs => {
        this.logs = this.filteredLogs = logs;
        this.filterComponent.clear();
      });
  }

    filterChanged(searchText: string) {
      this.filteredLogs = this._filterService.filter(searchText, ['id', 'date', 'odometer'], this.logs);
    }

}