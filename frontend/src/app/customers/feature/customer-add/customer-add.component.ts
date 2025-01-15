import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../data-access/customers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  customerForm!: FormGroup;
  submitted = false;
  regions: string[] = [];
  countries: string[] = [];

  private formBuilder = inject(FormBuilder);
  private _service = inject(CustomerService);
  private activeModal = inject(NgbActiveModal);

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      country: ['', Validators.required],
    });

    this.fetchRegions();
  }

  get f() {
    return this.customerForm.controls;
  }

  fetchRegions() {
    this._service.fetchRegions().subscribe({
      next: (regions) => {
        this.regions = regions;
      },
      error: (error) => {
        console.error('Error fetching regions:', error);
      },
    });
  }
  onRegionChange(selectedRegion: string) {
    // Populate countries based on selected region
    this._service.fetchCountryByRegion(selectedRegion).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      },
    });

    // Reset country selection when region changes
    this.customerForm.get('country')!.setValue('');
  }

  onSubmit() {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    this._service.addCustomer(this.customerForm.value).subscribe({
      next: (_) => {
        console.log(_);
        alert('Success');
        this.activeModal.close(true); // Close modal with true on success
      },
      error: (_) => {
        alert('Failed, check console for more');
        console.error(_);
      },
    });
  }
}
