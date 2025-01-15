import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinAddRoutingModule } from './pin-add-routing.module';
import { PinAddComponent } from './pin-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';
import { PinService } from '../../data-access/pin.service';
import { CustomerService } from 'src/app/customers/data-access/customers.service';

@NgModule({
  declarations: [PinAddComponent],
  imports: [
    CommonModule,
    PinAddRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgxSelectModule,
  ],
  exports: [PinAddComponent],
  providers: [PinService, CustomerService],
})
export class PinAddModule {}
