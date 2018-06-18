import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ReviewApplicationsComponent } from './review-applications/review-applications.component';
import { JobRatingComponent } from './job-rating/job-rating.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { ViewJobComponent } from './view-job/view-job.component';

import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule, MatSortModule, MatSelectModule, MatTableModule, MatNativeDateModule, MatListModule } from '@angular/material';

//import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule, MatListModule } from '@angular/material';

import { FormControl, ReactiveFormsModule } from '@angular/forms';


export const jobRoutes = [
  { path: "rate-job", component: JobRatingComponent },

  { path: "review-applications", component: ReviewApplicationsComponent},
  { path: "view-jobs", component: ViewJobsComponent},

  { path: "review-applications", component: ReviewApplicationsComponent }

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(jobRoutes)
    , MatFormFieldModule
    , MatInputModule
    , ReactiveFormsModule

    , MatIconModule,MatDatepickerModule, MatNativeDateModule  , MatTableModule
   

    , MatIconModule
    , MatDatepickerModule,
    MatListModule,

  ],
  declarations: [PostJobsComponent, ReviewApplicationsComponent, JobRatingComponent, MyApplicationsComponent, ViewJobComponent]
})
export class JobsModule { }
