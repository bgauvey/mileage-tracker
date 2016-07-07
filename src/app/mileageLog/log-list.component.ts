import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { MileageLogService } from './mileage-log.service';
import { FilterTextComponent, FilterService } from '../blocks/filter-text/filter-text';
import { IMilageLog} from './mileage-log';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

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

  constructor(private router: Router,
    private _filterService: FilterService,
    private angularFire: AngularFire) { }

  ngOnInit() {
    this.title = 'Mileage Log';
    this.angularFire.database.list('/miles')
      .subscribe(logs => {
        this.logs = logs;
      });
  }

  addNew() {
    this.router.navigate(['/mileageLog'], { queryParams: { id: 'new' } });
  }

  filterChanged(searchText: string) {
    this.filteredLogs = this._filterService.filter(searchText, ['id', 'date', 'odometer'], this.logs);
  }
}