import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pins',
    pathMatch: 'full',
  },
  {
    path: 'pins',
    loadChildren: () =>
      import('./pins/feature/pin-shell/pins.module').then((m) => m.PinsModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/feature/customer-shell/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
