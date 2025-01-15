import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/customers/data-access/customers.service';
import { PinService } from '../../data-access/pin.service';
import { Customer } from 'src/app/customers/utils/customer.model';

@Component({
  selector: 'app-pin-add',
  templateUrl: './pin-add.component.html',
  styleUrls: ['./pin-add.component.css'],
})
export class PinAddComponent implements OnInit {
  pinForm!: FormGroup;
  submitted = false;
  imageFile: File | null = null;
  _service = inject(PinService);
  _customerService = inject(CustomerService);

  collaborators: string[] = [];

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.pinForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      image: [null, Validators.required],
      collaboratory: [[]],
      privacy: ['private', Validators.required],
    });
    this.fetchCustomers();
  }

  fetchCustomers() {
    this._customerService.fetchCustomers().subscribe({
      next: (customers) => {
        this.collaborators = customers;
        console.log(customers);
      },
      error: (error) => {
        console.error('Error fetching customers:', error);
      },
    });
  }

  get f() {
    return this.pinForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      if (!file.type.includes('image/')) {
        this.f['image'].setErrors({ invalidType: true });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        this.f['image'].setErrors({ invalidSize: true });
        return;
      }

      this.imageFile = file;
      this.pinForm.patchValue({
        image: file,
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.pinForm.invalid) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', this.f['title'].value.trim());

      if (this.imageFile) {
        formData.append('image', this.imageFile);
      }

      const collaborators = this.f['collaboratory'].value;
      if (collaborators?.length) {
        collaborators.forEach((id: number) => {
          formData.append('collaboratory[]', id.toString());
        });
      }

      formData.append('privacy', this.f['privacy'].value);

      this._service.addPin(formData).subscribe({
        next: (_) => {
          this.activeModal.close(true);
        },
        error: (_) => {
          alert('Failed, check console for more');
          console.error(_);
        },
      });

      this.activeModal.close(formData);
    } catch (error) {
      console.error('Error creating form data:', error);
    }
  }
}
