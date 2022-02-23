import { ViewportScroller } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CryptoModel } from 'src/models/cripto.model';

import { CryptoPrice,cryptos } from 'src/models/crypto-price.model';
import { BitServiceService } from '../bit-service.service';
import { CommonComponent } from '../models/common/common.component';


@Component({
  selector: 'app-nikola',
  templateUrl: './nikola.component.html',
  styleUrls: ['./nikola.component.css']
})
export class NikolaComponent extends CommonComponent  implements OnInit, AfterViewInit, AfterContentInit {
  br = this.bitService.brNik;


  data: CryptoPrice[] = [];
  data3:CryptoPrice[]=[];
  data2!: CryptoPrice[];
  constructor(private bitService: BitServiceService) {
    super();
    // bitService.getBitCoinData().subscribe(d => {
    //   let br = 1;
    //   this.data2 = d.coins
    //   for (let j = 0; j < 20; j++) {
    //     for (let i = 0; i < this.data2.length; i++) {
    //       let cp1 = JSON.parse(JSON.stringify(this.data2[i]))
    //       cp1.number = br;
    //       br++;
    //       this.data.push(cp1);
    //     }
    //   }

    //   setTimeout(()=>{
        
    //       this.items.get(78)?.nativeElement.scrollIntoView();
    //   })


    // }
    // );

  }

  @ViewChildren('items') items !: QueryList<ElementRef>;

  ngOnInit(): void {
    this.data3=cryptos;
  }

  ngAfterViewInit(): void {

    this.items.get(25)?.nativeElement.scrollIntoView();

  }
  ngAfterContentInit() {

  }
  scroll(num: number) {



  }
  napisi(text: string | undefined) {
    if (this.bitService.brNik != undefined) {
      this.bitService.brNik++;
      this.br = this.bitService.brNik;
    }
  }
  LoadToRow() {

  }
}
