import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../models/common/common.component';

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.css']
})
export class NewModuleComponent extends CommonComponent implements OnInit {
  broj=1;
  constructor() {
    super();
   }

  ngOnInit(): void {
  }
  povecaj(){
    this.broj++;
  }
}
