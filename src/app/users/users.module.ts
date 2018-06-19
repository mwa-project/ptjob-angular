import { JobsModule } from './../jobs/jobs.module';
import { MatTableModule, MatDatepickerModule, MatNativeDateModule, MatCardModule } from '@angular/material';
import { ViewJobsComponent } from './../jobs/view-jobs/view-jobs.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewJobGuard } from '../jobs/view-job.guard';

export const userRoutes = [
  { path: "sign-up", component: RegistrationComponent },
  { path: "login", component: LoginComponent},
  { path: "details", component: UserDetailsComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(userRoutes),MatDatepickerModule, MatNativeDateModule,MatTableModule,MatCardModule, JobsModule
  ],
  declarations: [ UserDetailsComponent, ViewJobsComponent],
  providers: [ViewJobGuard]
})
export class UsersModule { }
