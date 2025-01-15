import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinHeaderComponent } from './pin-header.component';
import { CustomerAddModule } from 'src/app/customers/feature/customer-add/customer-add.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PinHeaderComponent],
  imports: [CommonModule, CustomerAddModule, NgbModalModule],
  exports: [PinHeaderComponent],
})
export class PinHeaderModule {}
