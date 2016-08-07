import { Component, OnInit } from '@angular/core';

import { ToastService } from './toast.service';

@Component({
  selector: 'toast',
  templateUrl: 'app/shared/toast/toast.component.html',
  styleUrls: ['app/shared/toast/toast.component.css']
})
export class ToastComponent implements OnInit {
  title: string;
  message: string;

  private _defaults: any = {
    title: '',
    message: ''
  };

  private _toastElement: any;

  constructor(toastService: ToastService) {
    toastService.activate = this.activate.bind(this);
  }

  activate(message: string = this._defaults.message, title: string = this._defaults.title): void {
    this.title = title;
    this.message = message;
    this._show();
  }

  ngOnInit(): void {
    this._toastElement = document.getElementById('toast');
  }

  private _show(): void {
    console.log(this.message);
    this._toastElement.style.opacity = 1;
    this._toastElement.style.zIndex = 9999;

    window.setTimeout(() => this._hide(), 2500);
  }

  private _hide(): void {
    this._toastElement.style.opacity = 0;
    window.setTimeout(() => this._toastElement.style.zIndex = 0, 400);
  }
}
