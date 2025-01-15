import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinHeaderComponent } from './pin-header.component';
import { CustomerAddModule } from 'src/app/customers/feature/customer-add/customer-add.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PinAddModule } from '../../feature/pin-add/pin-add.module';

@NgModule({
  declarations: [PinHeaderComponent],
  imports: [CommonModule, CustomerAddModule, PinAddModule, NgbModalModule],
  exports: [PinHeaderComponent],
})
export class PinHeaderModule {}
