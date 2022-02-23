import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'decimales'})
export class TwoDecimalsPype implements PipeTransform {
    transform(value:number,decimales:2) {
        Math.round(decimales);
    }

}