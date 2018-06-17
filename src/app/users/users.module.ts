import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const jobRoutes = [
  { path: "sign-up", component: RegistrationComponent },
  { path: "login", component: LoginComponent},
  { path: "details", component: UserDetailsComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegistrationComponent, UserDetailsComponent]
})
export class UsersModule { }
