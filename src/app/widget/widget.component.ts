
import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {  BitCoinComponent} from '../bit-coin/bit-coin.component';
import {  NikolaComponent} from '../nikola/nikola.component';
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
 
  @Input() valuePage:string | undefined;
  @Output() Event1=new EventEmitter<string>();

    
  constructor() { }
  napisi(value:string){
    
    this.Event1.emit(value);

   
  }

 
  ngOnInit(): void {
  }

}
