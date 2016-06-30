import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMilageLog } from '../interfaces';
import { CONFIG } from '../config'

let milesUrl = CONFIG.baseUrls.miles;

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getLogs() {
        return this.http.get(milesUrl)
            .map((res: Response) => <IMilageLog[]>res.json().data)
            .catch(this.handleError);
    }

    getLog(id: number) {
        return this.http.get(`${milesUrl}/${id}`)
            .map((response: Response) => response.json().data)
            .catch(this.handleError);
    }

    deleteLog(id: number) {
        return this.http.delete(`${milesUrl}/${id}`)
            .catch(this.handleError)
    }

    /////////////////////////////////////////////////////////////////////
    // Private members
    /////////////////////////////////////////////////////////////////////
    private findLogObservable(id: number): Observable<IMilageLog> {
        return this.createObservable(this.filterLogs(id));
    }

    private filterLogs(id: number): IMilageLog {
        //     const logs = this.logs.filter((log) => log.id === id);
        //   return (logs.length) ? logs[0] : null;
        return null;
    }

    private createObservable(data: any): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
