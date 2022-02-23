
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { CryptoPrice } from 'src/models/crypto-price.model';
import { BitServiceService } from '../bit-service.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CommonComponent } from '../models/common/common.component';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent extends CommonComponent implements OnInit, AfterViewInit {
  data: CryptoPrice[] = [];
  data2: CryptoPrice[] = [];
  displayedColumns: string[] = ['name', 'price'];
  CPrice!: CryptoPrice;
  name: string | undefined;
  searchValue: string;

  @ViewChild('nikola') table!: MatTable<any>;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private bitService: BitServiceService, private dialog: MatDialog) {
    super()
  }

  pretrazi(searchValue: string): Observable<CryptoPrice[]> {

    return this.bitService.getBitCoinData().pipe(map(d => {

      return d.coins.filter(item => item.name.includes(searchValue));
    }))
  }
  OpenDialog(): Observable<boolean> {

    const dialogRef = this.dialog.open(PopUpComponent, {
      height: '150px',
      width: '150px',
    });
    return dialogRef.afterClosed();

  }
  search(event:string):void{

    this.data=this.data2.filter(s=>s.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()))
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.bitService.getBitCoinData().subscribe(data => {
      this.data = data.coins;
      this.data2 =data.coins;
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


  }

  canDeactivatePage(): Observable<boolean> {
    if (this.CPrice == null) {
      return of(true);
    }
    let cp2 = this.data.find(x => x.id == this.CPrice.id);
    if (JSON.stringify(this.CPrice) != JSON.stringify(cp2)) {
      return this.OpenDialog();

    }
    return of(true);
  }


  deepCopy(data: CryptoPrice): CryptoPrice {
    return JSON.parse(JSON.stringify(data));
  }

}
