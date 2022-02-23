import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Product } from 'src/models/product.model';
import { Shop } from 'src/models/shop.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  shops: Shop[];
  products: Product[];
  shopItem: number;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {


    this.productService.getAllProduct().subscribe(d => {
      this.shops = d;

    })
    this.productService.get2Shops().subscribe(d => {
      console.log(d);
    });

  }
  selectShop($event: any): void {
    this.products = [];
    this.products = this.shops.find(d => d.Id == this.shopItem).products;
  }

 
}
