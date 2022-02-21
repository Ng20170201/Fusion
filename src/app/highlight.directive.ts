import { Directive,ElementRef, HostListener,Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  col:string | undefined;
  @Input() appHighlight='';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    
    this.highlight(this.col);
  }
  
  private highlight(color?:string){
    
   
    this.elem.nativeElement.style.color=color;
  }
  constructor(private elem:ElementRef) {  
    
      }

  ngOnInit(): void {
    this.col=this.elem.nativeElement.style.color;
  } 
}
