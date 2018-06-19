import { Component, OnInit } from '@angular/core';



import { JobService } from '../../services/job.service';


@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {


  displayedColumns = ['index','category', 'description', 'start_date', 'end_date', 'view'];
  dataSource ;
  
  // constructor() { }
  showManagement: boolean = false;
  //jobs: Array<Object>;
  constructor(private jobService: JobService) {

    this.jobService.getJobs().subscribe(list => {
      this.dataSource = list;
    });
   }


  ngOnInit() {
    // this.jobService.getJobs().subscribe(list => {
    //   this.jobs = list;
    // });
  }


  onManageJobClicked(job: Object) {
    console.log('onManageJobClicked()')
    console.log(job)
    this.showManagement  = !this.showManagement;
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
