import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinAddRoutingModule } from './pin-add-routing.module';
import { PinAddComponent } from './pin-add.component';


@NgModule({
  declarations: [
    PinAddComponent
  ],
  imports: [
    CommonModule,
    PinAddRoutingModule
  ]
})
export class PinAddModule { }
