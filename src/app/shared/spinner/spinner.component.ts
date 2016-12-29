import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ISpinnerState, SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<md-spinner [class.is-active]="visible"></md-spinner>`,
  styles: [`.spinner {position: absolute;left: 46%;top: 12%`],
})

export class SpinnerComponent implements OnDestroy, OnInit {
  visible: boolean = false;

  private _spinnerStateChanged: Subscription;

  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this._spinnerStateChanged = this._spinnerService.spinnerState
      .subscribe((state: ISpinnerState) => this.visible = state.show);
  }

  ngOnDestroy(): void {
    this._spinnerStateChanged.unsubscribe();
  }
}
