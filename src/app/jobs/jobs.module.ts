import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ReviewApplicationsComponent } from './review-applications/review-applications.component';
import { JobRatingComponent } from './job-rating/job-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostJobsComponent, ViewJobsComponent, ReviewApplicationsComponent, JobRatingComponent]
})
export class JobsModule { }
