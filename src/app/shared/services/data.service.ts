import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IMilageLog } from '../interfaces';

@Injectable()
export class DataService {
  
    _baseUrl: string = '';
    logs: IMilageLog[];

    constructor(private http: Http) { }
    
    getLogs() : Observable<IMilageLog[]> {
        if (!this.logs) {
            return this.http.get(this._baseUrl + 'miles.json')
                        .map((res: Response) => {
                            this.logs = res.json();
                            return this.logs;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.logs);
        }
    }
    
    getLog(id: number) : Observable<IMilageLog> {
        if (this.logs) {
            //filter using cached data
            return this.findCustomerObservable(id);
        } else {
            //Query the existing customers to find the target customer
            return Observable.create((observer: Observer<IMilageLog>) => {
                    this.getLogs().subscribe((logs: IMilageLog[]) => {
                        this.logs = logs;                
                        const cust = this.filterCustomers(id);
                        observer.next(cust);
                        observer.complete();
                })
            })
            .catch(this.handleError);
        }
    }

    private findCustomerObservable(id: number) : Observable<IMilageLog> {        
        return this.createObservable(this.filterCustomers(id));
    }
    
    private filterCustomers(id: number) : IMilageLog {
        const logs = this.logs.filter((log) => log.id === id);
        return (logs.length) ? logs[0] : null;
    }
    
    private createObservable(data: any) : Observable<any> {
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
