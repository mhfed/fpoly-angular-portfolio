import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from 'src/app/layouts/customer/customer-layout/customer-layout.component';
import { BlogPagesDetailComponent } from './blog-pages-detail/blog-pages-detail.component';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';
import { HomePagesComponent } from './home-pages/home-pages.component';
import { WorkPagesDetailComponent } from './work-pages-detail/work-pages-detail.component';
import { WorkPagesComponent } from './work-pages/work-pages.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      { path: '', component: HomePagesComponent },
      { path: 'work', component: WorkPagesComponent },
      { path: 'work/:id', component: WorkPagesDetailComponent },
      { path: 'blog', component: BlogPagesComponent },
      { path: 'blog/:id', component: BlogPagesDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
