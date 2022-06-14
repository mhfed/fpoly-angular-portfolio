import { NgModule } from '@angular/core';
import { AdminLayoutModule } from './admin/admin-layout.module';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  exports: [AdminLayoutModule, CustomerModule],
})
export class LayoutModule {}
