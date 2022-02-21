import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izmena',
  templateUrl: './izmena.component.html',
  styleUrls: ['./izmena.component.css']
})
export class IzmenaComponent implements OnInit {

  brNikola=0;
  brBitCoin=0;

  constructor() { }

  ngOnInit(): void {
  }
 napisi(value:string){
  
      if(value=="nikola"){
        this.brNikola++;
        console.log("nikola");
      }
      if(value=="bitcoin"){
        this.brBitCoin++;
        console.log("bitcoin");
      }
  }
}
