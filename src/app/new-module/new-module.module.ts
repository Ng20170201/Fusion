import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModuleRoutingModule } from './new-module-routing.module';
import { NewModuleComponent } from './new-module.component';
import { WidgetComponent } from '../widget/widget.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [
    NewModuleComponent,
  ],
  imports: [
    CommonModule,
    NewModuleRoutingModule,
    WidgetModule
  ],
  exports:[]
})
export class NewModuleModule { }
