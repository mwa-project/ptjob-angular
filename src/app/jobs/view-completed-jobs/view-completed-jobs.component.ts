import { Component, OnInit } from '@angular/core';



import { JobService } from '../../services/job.service';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { ApplicationAction, ManagementApplicationActions } from '../../app.actions';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ManageJobComponent } from '../manage-job.component';
import { UserService } from '../../users/user.service';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';
import { PtjobService } from '../ptjob.service';


@Component({
  selector: 'app-view-completed-jobs',
  templateUrl: './view-completed-jobs.component.html',
  styleUrls: ['./view-completed-jobs.component.css']
})
export class ViewCompletedJobsComponent implements OnInit {
  displayedColumns = ['index','job_name', 'posted_date', 'status', 'start_date', 'end_date', 'view'];
  dataSource ;
  userData;
  
  // constructor() { }
  // showManagement: boolean = false;
  //jobs: Array<Object>;
  constructor(private userService:UserService ,  private jobService: JobService, // PtjobService, 
    // private ngRedux: NgRedux<IAppState>, 
    // private actions: ManagementApplicationActions,  
    // private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {
      console.log('constructor')
    // this.jobService.getJobs().subscribe(list => {
    //   this.dataSource = list;
    // });
    this.userData = userService.getCurrentUser();
    this.dataSource = this.userData.job_posts;
    //this.dataSource.userFullName = this.userData.first_name+" "+ this.userData.last_name;
    console.log(this.userData); 
    console.log(this.dataSource); 
   }

   ngOnInit() {
    //  this.activatedRoute.params.subscribe(params => {
    //    let userId = params['userId'];
    //    if (userId) {
    //     console.log('show job list by user ID: ' + params['userId']);
    //    } else {
    //      console.log('show the full job list');
    //    }
       
    //  });
    // this.jobService.getJobs().subscribe(list => {
    //   this.jobs = list;
    // });
  }


  onGiveRating(job) {
    console.log('onGiveRating()')
    console.log(job);
    let dialogRef = this.dialog.open(RatingDialogComponent, {
      // height: '400px',
      width: '600px',
      data: {
        job_id: job.job_id
        , job_name: job.job_name
        , rating_type: 1 //means from employer to employee
        , employer: this.userData.first_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result); 
      this.jobService.updateRating(result).subscribe(res => {
        console.log('update success!')
      });
      //this.ngRedux.dispatch(this.actions.done());
      //console.log('dispatch');

    });
  }


  

}
