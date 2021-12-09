import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
})
export class PhonePipePipe implements PipeTransform {
  transform(value: unknown, country: string): unknown {
    if (value === '' || country === '') return '';
    let base: string = '';
    switch (country) {
      case 'france':
        base = '+33 ';
        break;
      case 'deutsch':
        base = '+49 ';
        break;
      case 'us':
        base = '+1 ';
        break;
    }
    return base + value;
  }
}
