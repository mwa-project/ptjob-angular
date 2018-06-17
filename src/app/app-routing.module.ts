import { RegistrationComponent } from './users/registration/registration.component';
import { HomeComponent } from './users/home/home.component';
import { LoginComponent } from './users/login/login.component';
// import { HomeComponent } from './users/home.component';
import { PostJobsComponent } from './jobs/post-jobs/post-jobs.component';
import { MyApplicationsComponent } from './jobs/my-applications/my-applications.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewJobComponent } from './jobs/view-job/view-job.component';


const routes: Routes = [
//  { path: "", component: HomeComponent,  loadChildren: './users/users.module#UsersModule' },
{ path: "", component: HomeComponent },
 { path: "my-applications", component: MyApplicationsComponent},
 { path: "view-job/:id", component: ViewJobComponent, loadChildren: './jobs/jobs.module#JobsModule' },
 { path: "view-jobs", component: ViewJobsComponent},
 { path: "post-job", component: PostJobsComponent},
 { path: "sign-up", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
