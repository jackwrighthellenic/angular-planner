import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: Date): string {
    return format(value, 'do LLLL yyyy');
  }
}
