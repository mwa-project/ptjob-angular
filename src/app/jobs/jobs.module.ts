import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ReviewApplicationsComponent } from './review-applications/review-applications.component';
import { JobRatingComponent } from './job-rating/job-rating.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { ViewJobComponent } from './view-job/view-job.component';

import { MatFormFieldModule, MatInputModule,
   MatInput, MatIconModule, MatDatepickerModule, 
   MatSortModule, MatSelectModule, MatTableModule, 
   MatNativeDateModule, MatListModule, MatDialog, MatDialogModule, MatButtonModule,  MatRadioModule } from '@angular/material';
   import {MatStepperModule} from '@angular/material/stepper';

//import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule, MatListModule } from '@angular/material';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ManageJobComponent } from './manage-job.component';
import { ViewCompletedJobsComponent } from './view-completed-jobs/view-completed-jobs.component';
import { MySuccessfulJobappsComponent } from './my-successful-jobapps/my-successful-jobapps.component';
import { RatingDialogComponent } from './rating-dialog/rating-dialog.component';


export const jobRoutes = [
  { path: "rate-job", component: JobRatingComponent },

  { path: "review-applications", component: ReviewApplicationsComponent},
  { path: "view-jobs", component: ViewJobsComponent},

  { path: "review-applications", component: ReviewApplicationsComponent }

]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(jobRoutes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatTableModule, 
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule, 
    MatRadioModule
  ],
  declarations: [
    PostJobsComponent, 
    ReviewApplicationsComponent, 
    JobRatingComponent, 
    MyApplicationsComponent, 
    ViewJobComponent,
    ManageJobComponent,
    ViewCompletedJobsComponent,
    MySuccessfulJobappsComponent,
    RatingDialogComponent
  ],
  exports: [
    // ManageJobComponent
  ],
  entryComponents: [
    ManageJobComponent, RatingDialogComponent
  ]
})
export class JobsModule { }
