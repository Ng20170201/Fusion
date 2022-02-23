import { NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { NotLogedGuard } from './auth/not-loged.guard';

import { BitCoinComponent } from './bit-coin/bit-coin.component';
import { MenuComponent } from './menu/menu.component';
import { NikolaComponent } from './nikola/nikola.component';
import { ProductsComponent } from './products/products.component';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelaGuard } from './tabela/tabela.guard';

const routes: Routes = [

  {path:'',component:MenuComponent,canActivate:[AuthGuard],
  children:[
    { path: 'bitCoin', component: BitCoinComponent},      
    { path: 'nikola', component: NikolaComponent },
    { path: 'tabela', component: TabelaComponent, canDeactivate:[TabelaGuard]  },
    { path: 'products', component: ProductsComponent  },
    { path: 'newModule', 
    loadChildren: () => import('./new-module/new-module.module').then(m => m.NewModuleModule)}
    
  ]},

   { path: 'auth', component: AuthComponent,canActivate:[NotLogedGuard]},

 
  { path: "**", redirectTo: "bitCoin" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AppRoutingModule { }


