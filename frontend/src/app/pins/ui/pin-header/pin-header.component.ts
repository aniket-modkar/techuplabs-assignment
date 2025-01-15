import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAddComponent } from 'src/app/customers/feature/customer-add/customer-add.component';
declare var bootstrap: any;

@Component({
  selector: 'app-pin-header',
  templateUrl: './pin-header.component.html',
  styleUrls: ['./pin-header.component.css'],
})
export class PinHeaderComponent implements AfterViewInit {
  private modalService = inject(NgbModal);
  ngAfterViewInit() {}

  openAddCustomerModal() {
    const modalRef = this.modalService.open(CustomerAddComponent);
    modalRef.result.then(
      (result) => {
        // Handle modal close with result
        console.log('Modal closed with result:', result);
      },
      (reason) => {
        // Handle modal dismiss
        console.log('Modal dismissed');
      }
    );
  }
}
