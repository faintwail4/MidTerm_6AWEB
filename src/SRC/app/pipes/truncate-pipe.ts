import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 90): string {
    if (!value) return '';
    const text = String(value);
    return text.length > limit ? text.slice(0, limit).trim() + '...' : text;
  }
}
