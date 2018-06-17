import { MyApplicationsComponent } from './jobs/my-applications/my-applications.component';
import { ReviewApplicationsComponent } from './jobs/review-applications/review-applications.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';
import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewJobComponent } from './jobs/view-job/view-job.component';


const routes: Routes = [
 { path: "", component: HomeComponent},
 { path: "my-applications", component: MyApplicationsComponent},
 { path: "view-job/:id", component: ViewJobComponent, loadChildren: './jobs/jobs.module#JobsModule' },
 { path: "view-jobs", component: ViewJobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
