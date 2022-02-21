import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BitCoinComponent } from './bit-coin/bit-coin.component';
import { NikolaComponent } from './nikola/nikola.component';
import { WidgetComponent } from './widget/widget.component';
import { TabelaComponent } from './tabela/tabela.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IzmenaComponent } from './izmena/izmena.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BitServiceService } from './bit-service.service';
import { ProductsComponent } from './products/products.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    BitCoinComponent,
    NikolaComponent,
    WidgetComponent,
    TabelaComponent,
    IzmenaComponent,
    HighlightDirective,
    AuthComponent,
    MenuComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
 
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    AuthService,
    BitServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
