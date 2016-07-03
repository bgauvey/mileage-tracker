import { Component, EventEmitter, Input, Output, AfterViewChecked } from '@angular/core';
declare var componentHandler: any;

@Component({
  selector: 'filter-text',
  templateUrl: 'app/blocks/filter-text/filter-text.component.html'
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;
  filter: string;


  constructor() {
    this.changed = new EventEmitter<string>(true);
  }

  ngAfterViewChecked() {
    componentHandler.upgradeDom();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }
}