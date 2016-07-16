import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { Observable } from 'rxjs/Observable';

import { LogService, ILog } from '../core/logs';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class DashboardComponent implements OnInit {

    logs: Observable<ILog[]>;

    constructor(
        private router: Router,
        private _logService: LogService) {
    }

    ngOnInit(): void {
        this.logs = this._logService.getTop4();
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
