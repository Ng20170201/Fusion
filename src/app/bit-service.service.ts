import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoModel } from 'src/models/cripto.model';

@Injectable({
  providedIn: 'root'
})
export class BitServiceService {
  brBit=0;
  brNik=0;
  constructor(private http: HttpClient) {


  }
  getBitCoinData(): Observable<CryptoModel> {
    let url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';
    return this.http.get<CryptoModel>(url);
  }
  getData(){
    
  }
}

