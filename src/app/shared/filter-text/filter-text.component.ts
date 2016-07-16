import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdInput } from '@angular2-material/input';

@Component({
  selector: 'filter-text',
  templateUrl: 'app/shared/filter-text/filter-text.component.html',
  directives: [MdInput]
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;
  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>(true);
  }

  clear(): void {
    this.filter = '';
  }

  filterChanged(event: any): void {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }
}