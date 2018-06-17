import { RegistrationComponent } from './users/registration/registration.component';
import { HomeComponent } from './users/home/home.component';
import { JobsModule } from './jobs/jobs.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,  MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatLabel, MatRadioButton, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { UsersModule } from './users/users.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent, HomeComponent, RegistrationComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule, UsersModule, JobsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, MatCardModule, MatFormFieldModule,
     MatOptionModule, MatSelectModule, MatInputModule,
     MatRadioModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
