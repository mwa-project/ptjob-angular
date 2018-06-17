import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ReviewApplicationsComponent } from './review-applications/review-applications.component';
import { JobRatingComponent } from './job-rating/job-rating.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { ViewJobComponent } from './view-job/view-job.component';


export const jobRoutes = [
  { path: "rate-job", component: JobRatingComponent },
  { path: "review-applications", component: ReviewApplicationsComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(jobRoutes)
  ],
  declarations: [PostJobsComponent, ViewJobsComponent, ReviewApplicationsComponent, JobRatingComponent, MyApplicationsComponent, ViewJobComponent]
})
export class JobsModule { }
