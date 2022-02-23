
import { Directive, ElementRef, EventEmitter, Output, } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';


@Directive({
  selector: '[appFilterTabelaList]'
})
export class FilterTabelaListDirective  {
 
  
  @Output() Event2:EventEmitter<string>=new EventEmitter<string>();

 

  constructor(public el:ElementRef ) {
    fromEvent(this.el.nativeElement, 'input')
    .pipe(map((event:any) => event.target.value))
    .pipe(debounceTime(500))
    .pipe(distinctUntilChanged())
    .subscribe(d=>{
        this.Event2.emit(d);
            
    });

   }
   
  
}
