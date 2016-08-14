import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    return value
      .toLowerCase()
      .replace(/(?:^|\s)[a-z]/g, function(m: string): string {
        return m.toUpperCase();
      });
  }
}
