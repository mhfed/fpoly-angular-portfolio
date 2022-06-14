import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerFooterComponent } from './customer-footer/customer-footer.component';
import { AntdDesignModule } from 'src/app/antd-design/antd-design.module';

@NgModule({
  declarations: [
    CustomerHeaderComponent,
    CustomerLayoutComponent,
    CustomerFooterComponent
  ],
  imports: [CommonModule, RouterModule, AntdDesignModule],
})
export class CustomerModule {}
