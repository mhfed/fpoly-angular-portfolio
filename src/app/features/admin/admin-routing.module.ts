import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/layouts/admin/admin-layout/admin-layout.component';
import { BlogAddComponent } from './blogs/blog-add/blog-add.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogUpdateComponent } from './blogs/blog-update/blog-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'projects',
        children: [
          { path: '', component: ProjectListComponent },
          { path: 'add', component: ProjectAddComponent },
          { path: 'edit/:id', component: ProjectUpdateComponent },
        ],
      },
      {
        path: 'blogs',
        children: [
          { path: '', component: BlogListComponent },
          { path: 'add', component: BlogAddComponent },
          { path: 'edit/:id', component: BlogUpdateComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
