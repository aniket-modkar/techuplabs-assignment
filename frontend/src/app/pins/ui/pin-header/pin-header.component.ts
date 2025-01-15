import {
  AfterViewInit,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAddComponent } from 'src/app/customers/feature/customer-add/customer-add.component';
import { PinAddComponent } from '../../feature/pin-add/pin-add.component';
declare var bootstrap: any;

@Component({
  selector: 'app-pin-header',
  templateUrl: './pin-header.component.html',
  styleUrls: ['./pin-header.component.css'],
})
export class PinHeaderComponent implements AfterViewInit {
  private modalService = inject(NgbModal);
  @Output() pinChanges$: EventEmitter<boolean> = new EventEmitter(); // Emit when pin is added
  ngAfterViewInit() {}

  openAddCustomerModal() {
    const modalRef = this.modalService.open(CustomerAddComponent);
    modalRef.result.then(
      (result) => {
        console.log('Modal closed with result:', result);
      },
      (reason) => {
        console.log('Modal dismissed');
      }
    );
  }

  openAddPinModal() {
    const modalRef = this.modalService.open(PinAddComponent);
    modalRef.result.then(
      (result) => {
        console.log('Modal closed with result:', result);
        if (result) this.pinChanges$.emit(true);
      },
      (reason) => {
        console.log('Modal dismissed');
      }
    );
  }
}
