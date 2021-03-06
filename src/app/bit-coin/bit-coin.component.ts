import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import { CryptoPrice } from 'src/models/crypto-price.model';
import { BitServiceService } from '../bit-service.service';

import { AuthService } from '../auth/auth.service';
import { CommonComponent } from '../models/common/common.component';

@Component({
  selector: 'app-bit-coin',
  templateUrl: './bit-coin.component.html',
  styleUrls: ['./bit-coin.component.css']
})
export class BitCoinComponent extends CommonComponent implements OnInit {
  press1 = false;
  press2 = true;

  cryptoPrices!: CryptoPrice[] | undefined;

  br = this.bitService.brBit;
  constructor(private bitService: BitServiceService, public auth: AuthService) {
    super()
  }

  ngOnInit(): void {

  }
  napisi(text: string | undefined) {

    if (this.bitService.brBit != undefined) {
      this.bitService.brBit++;
      this.br = this.bitService.brBit;
    }

  }
  getBitCoinData() {
    return this.bitService.getBitCoinData();
  }
  public getData(): void {
    this.ngUnsubscribe = new Subject<void>();
    this.press1 = true;
    this.press2 = false;
    timer(0, 2000).pipe(takeUntil(this.ngUnsubscribe)).subscribe((d) => this.bitService.getBitCoinData().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      this.cryptoPrices = data.coins;
    }));
  }
  public stopReload(): void {
    this.press1 = false;
    this.press2 = true;
    this.cryptoPrices = [];
    this.unsubscribeFromCall();

  }


  unsubscribeFromCall(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  nadjiUserClient(): void {
    this.auth.nadjiUserClient().subscribe();

  }
}
