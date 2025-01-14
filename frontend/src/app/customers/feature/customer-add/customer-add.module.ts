import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAddRoutingModule } from './customer-add-routing.module';
import { CustomerAddComponent } from './customer-add.component';


@NgModule({
  declarations: [
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    CustomerAddRoutingModule
  ]
})
export class CustomerAddModule { }
