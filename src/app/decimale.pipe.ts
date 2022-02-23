import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimale'
})
export class DecimalePipe implements PipeTransform {

  transform(value: number, decimale=2): number {
    return Math.round(value*Math.pow(10,decimale))/Math.pow(10,decimale);
  }

}
