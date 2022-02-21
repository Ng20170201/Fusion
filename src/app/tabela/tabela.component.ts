import { FactoryTarget, ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CryptoPrice } from 'src/models/crypto-price.model';
import { BitServiceService } from '../bit-service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  data: CryptoPrice[] = [];
  displayedColumns: string[] = ['name', 'price'];
  CPrice!: CryptoPrice;
  name: string | undefined;

  @ViewChild('nikola') table!: MatTable<any>;


  constructor(private bitService: BitServiceService) { }

  ngOnInit(): void {
    this.bitService.getBitCoinData().subscribe(data => {
      this.data = data.coins;
    })
  }
  save() {
    let index = this.data.findIndex(x => x.id == this.CPrice.id);
    this.data[index] = this.CPrice;
    this.CPrice = null as any;
    this.table.renderRows();
  }

  close() {

    this.CPrice = null as any;
  }

  izmeni(selectedRow: CryptoPrice) {
    this.CPrice = this.deepCopy(selectedRow);

    console.log(selectedRow)
  }

  deepCopy(data: CryptoPrice): CryptoPrice {
    return JSON.parse(JSON.stringify(data));
  }
}
