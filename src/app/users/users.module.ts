import { JobsModule } from './../jobs/jobs.module';
import { MatTableModule,
  MatToolbarModule
  , MatButtonModule
  , MatSidenavModule
  , MatIconModule
  , MatListModule
  ,  MatCardModule
  , MatFormFieldModule
  , MatOptionModule
  , MatSelectModule
  , MatInputModule
  , MatLabel
  , MatRadioButton
  , MatRadioModule
  , MatDatepickerModule
  , MatNativeDateModule 
 } from '@angular/material';


import { ViewJobsComponent } from './../jobs/view-jobs/view-jobs.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';

export const userRoutes = [
  { path: "sign-up", component: RegistrationComponent },
  { path: "login", component: LoginComponent},
  { path: "details", component: UserDetailsComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(userRoutes)
    ,MatDatepickerModule
    , MatNativeDateModule
    ,MatTableModule
    , JobsModule
    , ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, MatCardModule, MatFormFieldModule,
     MatOptionModule, MatSelectModule, MatInputModule,
     MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatIconModule
  ],
  declarations: [ UserDetailsComponent, ViewJobsComponent]
})
export class UsersModule { }
