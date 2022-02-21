import { HttpClient } from '@angular/common/http';
import { Injectable, IterableDiffers } from '@angular/core';
import { forkJoin, merge, observable, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { dataSP } from 'src/models/dataSP';

import { Product } from 'src/models/product.model';
import { Shop } from 'src/models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  shops: Shop[];
  products: Product[];
  allProducts: Product[] = [];





  get2Shops(): Observable<Product[]> {
    return this.http.get<dataSP<Shop>>("https://bcd-api.procampaign.com/eCommerce/Shops").pipe(
      mergeMap(d => {
        this.shops = d.Data;
        
        if(this.shops[0].Id%2==0){
          return this.getProducts(this.shops[0].Id).pipe(
            map(dt=>{
              return dt;
            }
            
            ));
         
        }
        else{
          return of(null);
        }
        
      })

    );
  }


  getAllProduct(): Observable<Shop[]> {
    return this.http.get<dataSP<Shop>>("https://bcd-api.procampaign.com/eCommerce/Shops").pipe(
      mergeMap((d) => {
        let observableBatch = new Array<Observable<void>>();
        this.shops = d.Data;

        this.shops.forEach(shop => {
          let observable = this.getProducts(shop.Id).pipe(map(d => {
            shop.products = d;
          }

          ))
          observableBatch.push(observable);
        });
        return forkJoin(observableBatch).pipe(map(d => {
          return this.shops;
        }

        ))
      }
      )
    );
  }

  getShops(): Observable<Shop[]> {

    return this.http.get<dataSP<Shop>>("https://bcd-api.procampaign.com/eCommerce/Shops").pipe(
      map(d => {
        return d.Data;
      })
    );

  }
  getProducts(id: number): Observable<Product[]> {

    return this.http.get<dataSP<Product>>(`https://bcd-api.procampaign.com/eCommerce/Shops/${id}/Products`).pipe(
      map(d => {
        return d.Data;
      })

    );
  }
  constructor(private http: HttpClient) { }
}
