import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { mergeMap, Observable, map, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {

  }


  canActivate(): Observable<boolean> {

    if (this.auth.IsLoggedIn()) {
      if (this.auth.username == null) {
        return this.auth.nadjiUserClient().pipe(
          map(d => {
            return true;
          }));
      }
      return of(true);;
    }
    this.router.navigate(['auth']);
    return of(false);
  }


  angularZove() {
    this.canActivate().subscribe(x => {
      if (x) {
        // pusta na rutu
      } else {
        // ne pusta na rutu
      }
    })
  }
}


