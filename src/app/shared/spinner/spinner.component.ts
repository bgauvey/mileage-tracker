import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MdProgressCircle } from '@angular2-material/progress-circle';

import { ISpinnerState, SpinnerService } from './spinner.service';

declare var componentHandler: any;
const ACTIVE_CLASS = 'is-active';

@Component({
  selector: 'spinner',
  template: `
    <md-spinner
      [class.is-active]="visible"></md-spinner>
  `,
  styles: [`.spinner {position: absolute;left: 46%;top: 12%`],
  directives: [MdProgressCircle]
})

export class SpinnerComponent implements OnDestroy, OnInit {
  visible: boolean = false;

  private _spinnerStateChanged: Subscription;

  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit(): void {
    componentHandler.upgradeDom();
    this._spinnerStateChanged = this._spinnerService.spinnerState
      .subscribe((state: ISpinnerState) => this.visible = state.show);
  }

  ngOnDestroy(): void {
    this._spinnerStateChanged.unsubscribe();
  }
}