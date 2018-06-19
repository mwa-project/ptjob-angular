import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ReviewApplicationsComponent } from './review-applications/review-applications.component';
import { JobRatingComponent } from './job-rating/job-rating.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { ViewJobComponent } from './view-job/view-job.component';

import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule,
   MatSortModule, MatSelectModule, MatTableModule, MatNativeDateModule, MatListModule, MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';

//import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule, MatListModule } from '@angular/material';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ViewJobGuard } from './view-job.guard';
import { BrowserModule } from '@angular/platform-browser';


export const jobRoutes = [
  { path: "rate-job", component: JobRatingComponent },

  { path: "review-applications", component: ReviewApplicationsComponent},
  { path: "view-jobs", component: ViewJobsComponent},

  { path: "review-applications", component: ReviewApplicationsComponent },
  { path: "view-job", component: ViewJobComponent }

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(jobRoutes)
    , MatFormFieldModule
    , MatInputModule
    , ReactiveFormsModule

    , MatIconModule,MatDatepickerModule, MatNativeDateModule  , MatTableModule, BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
,  MatCardModule 

    , MatIconModule
    , MatDatepickerModule,
    MatListModule,

  ],
  declarations: [
    PostJobsComponent, 
    ReviewApplicationsComponent, 
    JobRatingComponent, 
    MyApplicationsComponent, 
    ViewJobComponent
  ],
  providers: [ViewJobGuard]
})
export class JobsModule { }
