import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CommonComponent } from '../models/common/common.component';
import { TabelaComponent } from './tabela.component';



@Injectable({
  providedIn: 'root'
})
export class TabelaGuard implements CanDeactivate<CommonComponent> {
  constructor() {

  }
  canDeactivate(component: CommonComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> {
    return component.canDeactivatePage();
  }

}
