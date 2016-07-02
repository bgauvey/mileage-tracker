import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: 'app/blocks/filter-text/filter-text.component.html'
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;
  filter: string;
  
  componentHandler: any;
  constructor() {
    this.changed = new EventEmitter<string>(true);

    this.componentHandler.upgradeDom();
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