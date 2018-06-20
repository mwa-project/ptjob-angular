import { Component, OnInit } from '@angular/core';



import { PtjobService } from '../ptjob.service';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { ApplicationAction, ManagementApplicationActions } from '../../app.actions';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ManageJobComponent } from '../manage-job.component';

@Component({
  selector: 'app-view-completed-jobs',
  templateUrl: './view-completed-jobs.component.html',
  styleUrls: ['./view-completed-jobs.component.css']
})
export class ViewCompletedJobsComponent implements OnInit {

  displayedColumns = ['index','category', 'description', 'start_date', 'end_date', 'view'];
  dataSource ;
  
  // constructor() { }
  // showManagement: boolean = false;
  //jobs: Array<Object>;
  constructor(private jobService: PtjobService, 
    private ngRedux: NgRedux<IAppState>, 
    private actions: ManagementApplicationActions,  
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {

    this.jobService.getCompletedJobs(9).subscribe(list => {
      this.dataSource = list;
    });
   }

   ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
       let userId = params['userId'];
       if (userId) {
        console.log('show job list by user ID: ' + params['userId']);
       } else {
         console.log('show the full job list');
       }
       
     });
    // this.jobService.getJobs().subscribe(list => {
    //   this.jobs = list;
    // });
  }


  onManageJobClicked(job: Object) {
    console.log('onManageJobClicked()')
    let dialogRef = this.dialog.open(ManageJobComponent, {
      // height: '400px',
      // width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      this.ngRedux.dispatch(this.actions.done());
      console.log('dispatch');
    });
  }

}
