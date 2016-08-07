import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

export interface ISpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private _spinnerSubject: any = new Subject<any>();

  spinnerState: any = this._spinnerSubject as Observable<ISpinnerState>;

  show(): void {
    this._spinnerSubject.next({ show: true } as ISpinnerState);
  }

  hide(): void {
    this._spinnerSubject.next({ show: false } as ISpinnerState);
  }
}
