import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMilageLog } from './mileage-log';
import { CONFIG } from '../shared/config'

let milesUrl = CONFIG.baseUrls.miles;

@Injectable()
export class MileageLogService {

    constructor(private http: Http) { }

    createLog(log: IMilageLog) {
        let body = JSON.stringify(log);
        return this.http
            .post(`${milesUrl}`, body)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

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

    updateLog(log: IMilageLog) {
        let body = JSON.stringify(log);
        return this.http
            .put(`${milesUrl}/${log.id}`, body)
            .map(res => res.json())
            .catch(this.handleError)
    }

    deleteLog(id: number) {
        return this.http.delete(`${milesUrl}/${id}`)
            .catch(this.handleError)
    }

    /////////////////////////////////////////////////////////////////////
    // Private members
    /////////////////////////////////////////////////////////////////////

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
