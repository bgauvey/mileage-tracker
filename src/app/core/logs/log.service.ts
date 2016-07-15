import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../auth';
import { ILog, Log } from './log';

@Injectable()
export class LogService {
  visibleLogs$: Observable<ILog[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredLogs$: FirebaseListObservable<ILog[]>;
  private logs$: FirebaseListObservable<ILog[]>;
  private path: string;

  constructor(private af: AngularFire, auth: AuthService) {
    this.path = `/${auth.id}/logs`;

    this.logs$ = af.database.list(this.path);

    this.filteredLogs$ = af.database.list(this.path, {
      query: {
        orderByChild: 'completed',
        equalTo: this.filter$
      }
    });

    this.visibleLogs$ = Observable.merge(this.filter$)
      .switchMap(filter => filter === null ? this.logs$ : this.filteredLogs$);
  }

  filterLogs(filter: string): void {
    switch (filter) {
      case 'false':
        this.filter$.next(false);
        break;

      case 'true':
        this.filter$.next(true);
        break;

      default:
        this.filter$.next(null);
        break;
    }
  }

  getById(id: string): any {
    let log: FirebaseObjectObservable<ILog>;
    log = this.af.database.object(this.path + `/` + id);
    return Observable.merge(log);
  }

  getTop4() {
    return this.logs$.take(4);
  }

  createLog(log: ILog): firebase.Promise<any> {
    return this.logs$.push(new Log(
      log.odometer,
      log.gallons,
      log.costPerGallon,
      log.totalCost,
      log.vehicleId,
      log.logType,
      log.description
    ));
  }

  removeLog(log: ILog): firebase.Promise<any> {
    return this.logs$.remove(log.$key);
  }

  updateLog(log: ILog, changes: any): firebase.Promise<any> {
    return this.logs$.update(log.$key, changes);
  }
}
