import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinListRoutingModule } from './pin-list-routing.module';
import { PinListComponent } from './pin-list.component';


@NgModule({
  declarations: [
    PinListComponent
  ],
  imports: [
    CommonModule,
    PinListRoutingModule
  ]
})
export class PinListModule { }
