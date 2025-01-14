import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form.component';

@NgModule({
  declarations: [CustomerFormComponent],
  exports: [CustomerFormComponent],
  imports: [CommonModule],
})
export class CustomerFormModule {}
