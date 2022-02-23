import { Component } from '@angular/core';
import { BitServiceService } from './bit-service.service';


import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'projectNikola';
 
  
  constructor(private bitService: BitServiceService,translate: TranslateService) {
    translate.addLangs(['sr', 'klingon']);
    translate.setDefaultLang('sr');
    translate.use('sr');
  }
 
 
  

  
}
