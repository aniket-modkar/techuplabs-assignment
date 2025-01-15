import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinListRoutingModule } from './pin-list-routing.module';
import { PinListComponent } from './pin-list.component';
import { PinService } from '../../data-access/pin.service';

@NgModule({
  declarations: [PinListComponent],
  imports: [CommonModule, PinListRoutingModule],
  providers: [PinService],
})
export class PinListModule {}
