import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { FilterService, FilterTextComponent } from '../shared';
import { LogService, ILog } from '../core/logs';

@Component({
  moduleId: module.id,
  selector: 'log-list',
  templateUrl: 'log-list.component.html',
  styleUrls: ['log-list.component.css'],
  directives: [ROUTER_DIRECTIVES, FilterTextComponent, MD_BUTTON_DIRECTIVES]
})
export class LogListComponent implements OnInit {
  logs: Observable<ILog[]>;

  constructor(private router: Router, private _filterService: FilterService, private _logService: LogService) { }

  ngOnInit(): void {
    this.logs = this._logService.getTop4();
  }

  addNew(): void {
    this.router.navigate(['/log'], { queryParams: { id: 'new' } });
  }

  filterChanged(searchText: string): void {
    // 
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/log'], { queryParams: { id: id } });
  }

    getDate(value: number): string {
        return new Date(value).toLocaleDateString(`en-US`);
    }

    getTypeString(value: string): string {
        switch (value.toString()) {
            case '0':
                return 'Fuel Purchase';
            case '1':
                return 'Repair';
            case '2':
                return 'Service';
            default:
                return '';
        }
    }
  }
