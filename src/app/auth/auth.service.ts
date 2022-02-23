import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ResponseModel } from 'src/models/response.model';
import { User } from 'src/models/user.model';
import { UserData } from 'src/models/UserData';
import { CommonComponent } from '../models/common/common.component';
import { TabelaComponent } from '../tabela/tabela.component';
import { AuthInterceptor } from './auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  username: string;
  clientName: string;
  common: CommonComponent;

  nadjiUserClient(): Observable<User> {

    let url = "https://bcd-api.procampaign.com/auth/UserInfo";

    return this.http.get<User>(url).pipe(
      map(d => {
        this.username = d.Data.UserName;
        this.clientName = d.Data.ClientName;
        return d;
      }
      )
    )
  }
  postToken(username: string | undefined, password: string | undefined): Observable<void> {

    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let requestOptions = { headers: headers };
    let body = `grant_type=password&password=${encodeURIComponent(password!)}&username=${encodeURIComponent(username!)}`
    let url = 'https://bcd-api.procampaign.com/auth/Token';



    return this.http.post<User>(url, body, requestOptions)
      .pipe(
        map(
          data => {

            this.token = data.access_token;
            if (this.token != undefined)
              localStorage.setItem('token', this.token);
            this.router.navigate(['bitCoin']);

          })
      );


  }

  constructor(private http: HttpClient, private router: Router) {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }

  }


  IsLoggedIn(): boolean {

    return this.token != null;

  }
  LogOut(): void {
    this.common.canDeactivatePage().subscribe(d => {
      if (!d) {
        return;
      }
      localStorage.removeItem('token');
      this.token = null;
      this.router.navigate(['auth']);
    })
  }
}




