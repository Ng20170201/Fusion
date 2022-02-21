import { Component } from '@angular/core';
import { CryptoModel } from 'src/models/cripto.model';
import { BitServiceService } from './bit-service.service';

import { CryptoPrice } from 'src/models/crypto-price.model';
import { BehaviorSubject, interval, timer } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'projectNikola';

  
  constructor(private bitService: BitServiceService) {
  }
 
 
  

  
}
