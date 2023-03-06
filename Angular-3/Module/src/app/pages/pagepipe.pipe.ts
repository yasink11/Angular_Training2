import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagepipe'
})
export class PagepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var text = value as string;

    return text.toUpperCase();
  }

}
