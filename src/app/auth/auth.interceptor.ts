import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        
    let headers: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer "+this.auth.token,
      "Accept-Language": "en-US",

      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0"
    });
    const modifyReq=request.clone({
      headers:headers
    })
  
    return next.handle(modifyReq);
  }
}
