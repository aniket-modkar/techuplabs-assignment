import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAddRoutingModule } from './customer-add-routing.module';
import { CustomerAddComponent } from './customer-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { CustomerService } from '../../data-access/customers.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerAddRoutingModule,
    ReactiveFormsModule,
    NgxSelectModule,
    NgbModalModule,
  ],
  exports: [CustomerAddComponent],
  providers: [CustomerService],
})
export class CustomerAddModule {}
