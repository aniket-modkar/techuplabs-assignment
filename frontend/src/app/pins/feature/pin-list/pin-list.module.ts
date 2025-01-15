import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinListRoutingModule } from './pin-list-routing.module';
import { PinListComponent } from './pin-list.component';
import { PinService } from '../../data-access/pin.service';
import { PinHeaderModule } from '../../ui/pin-header/pin-header.module';
import { PinRowModule } from '../../ui/pin-row/pin-row.module';

@NgModule({
  declarations: [PinListComponent],
  imports: [CommonModule, PinListRoutingModule, PinHeaderModule, PinRowModule],
  providers: [PinService],
})
export class PinListModule {}
