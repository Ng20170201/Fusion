import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
import { CommonComponent } from '../models/common/common.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public auth:AuthService,private translate: TranslateService) { }

  ngOnInit(): void {
  }

  childActivated(component:CommonComponent){
    this.auth.common=component;
  }
  sr() : void{
    this.translate.use("sr");
  }
  en() : void {
    this.translate.use("en");
  }
}
