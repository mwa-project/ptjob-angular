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

// import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule,
//    MatSortModule, MatSelectModule, MatTableModule, MatNativeDateModule, MatListModule, MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule,
   MatInput, MatIconModule, MatDatepickerModule, 
   MatSortModule, MatSelectModule, MatTableModule, 

   MatNativeDateModule, MatListModule, MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';

  //  MatNativeDateModule, MatListModule, MatDialog, MatDialogModule, MatButtonModule } from '@angular/material';

   import {MatStepperModule} from '@angular/material/stepper';


//import { MatFormFieldModule, MatInputModule, MatInput, MatIconModule, MatDatepickerModule, MatListModule, MatButtonModule, MatCardModule } from '@angular/material';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { ViewJobGuard } from './view-job.guard';
import { BrowserModule } from '@angular/platform-browser';

import { ManageJobComponent } from './manage-job.component';
import { ViewCompletedJobsComponent } from './view-completed-jobs/view-completed-jobs.component';
import { MySuccessfulJobappsComponent } from './my-successful-jobapps/my-successful-jobapps.component';
import { NgRedux } from '@angular-redux/store';
import { ApplicationActionState } from './myApplicationsState';
import { store } from './myApplicationsState';



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
, MatButtonModule
    , MatIconModule
    , MatDatepickerModule, MatFormFieldModule,

    CommonModule, 
    RouterModule.forChild(jobRoutes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatTableModule, 
    MatStepperModule,
    MatDatepickerModule, MatButtonModule, MatCardModule,
   MatIconModule,MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    PostJobsComponent, 
    ReviewApplicationsComponent, 
    JobRatingComponent, 
    MyApplicationsComponent, 
    ViewJobComponent,
    ViewJobComponent,
    ManageJobComponent,
    ViewCompletedJobsComponent,
    MySuccessfulJobappsComponent
  ],
  providers: [ViewJobGuard]
,
    
  exports: [
    // ManageJobComponent
  ],
  entryComponents: [
    ManageJobComponent
  ]
})
export class JobsModule { 

  constructor( private nrRedux: NgRedux<ApplicationActionState>){
      //   nrRedux.provideStore(store);
  }
}
