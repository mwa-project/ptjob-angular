import { Component, OnInit } from '@angular/core';



import { JobService } from '../../services/job.service';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { ApplicationAction, ManagementApplicationActions } from '../../app.actions';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ManageJobComponent } from '../manage-job.component';


@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {


  displayedColumns = ['index','category', 'description', 'start_date', 'end_date', 'view'];
  dataSource ;
  
  // constructor() { }
  // showManagement: boolean = false;
  //jobs: Array<Object>;
  job: any;
  constructor(private jobService: JobService, 
    private ngRedux: NgRedux<IAppState>, 
    private actions: ManagementApplicationActions,  
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {

    this.jobService.getJobs().subscribe(list => {
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
    this.job = job;
    console.log('onManageJobClicked()')
    let dialogRef = this.dialog.open(ManageJobComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      console.log(result);
      let newStatus = 'Pending';
      if (result == 2) {
        newStatus = 'Close';
      } else if (result == 3) {
        newStatus = 'Done';
      }
      this.jobService.updateStatus(this.job['_id'],newStatus).subscribe(result=> {
        console.log(result['data']);
      });
    });
  }
}


// export interface Job {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: Job[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
