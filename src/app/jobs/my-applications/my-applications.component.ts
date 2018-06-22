import { DataSource } from '@angular/cdk/table';
import { store, AddApplicationAction } from './../myApplicationsState';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { JobService } from '../../services/job.service';
import { select } from '@angular-redux/store';
import { ApplicationActionState } from '../myApplicationsState';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css']
})
export class MyApplicationsComponent implements OnInit {
 // @select('data') applications: Observable<ApplicationActionState>
  user: Object;
  apps: Array<Object>;
  myApps
  isAccept = true;
  showAccept = false;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private appliationService: ApplicationService, 
    private jobService: JobService,
    private userService: UserService) {

     
     

      // store.subscribe( () => {
      //   let s = store.
      //  console.log(s)
      // });
      console.log('this.applications');
      // this.applications.subscribe( x => {
      //   console.log(x);
      // })
     }

  ngOnInit() {

    console.log('this.applications');
    this.myApps = store.getState().applicationReducer.data;
    if( !this.showAccept) {
      this.apps = this.myApps
    }

    store.subscribe(()=>{
      console.log('here');
      console.log(store.getState().applicationReducer)
      this.myApps = store.getState().applicationReducer.data;
      if( !this.showAccept) {
        this.apps = this.myApps
      }
    });
    
    this.activatedRoute.params.subscribe(params => {
      let jobId = params['jobId'];
      if (jobId) {
        console.log('get applications by job ID');
        this.appliationService.getApplicationsByJobId(jobId, apps => {
          this.apps = apps;
          console.log(this.apps);
          this.showAccept = true;
        });
      } else {
        console.log('get applications by current user');
        this.appliationService.getMyApplications(apps => {
        //  this.apps = apps;
          console.log(this.apps);
          this.showAccept = false;
        });
      }
    });
    
    // this.user = this.userService.getCurrentUser();
    // this.apps = this.user['job_applications'];
    // this.apps = [{
    //   job_id: '5b27da26eab89f87b1897cc7',
    //   job_name: "Sales Associate job" , 
    //   posted_date: Date.now(), 
    //   applied_date: Date.now(), 
    //   status: "Done", 
    //   start_date: Date.now(), 
    //   end_date: Date.now()
    // },
    // {
    //   job_id: '5b27da26eab89f87b1897cc7',
    //   job_name: "Package Handler " , 
    //   posted_date: Date.now(), 
    //   applied_date: Date.now(), 
    //   status: "Accept", 
    //   start_date: Date.now(), 
    //   end_date: Date.now()
    // },
    // {
    //   job_id: '5b27da26eab89f87b1897cc7',
    //   job_name: "Package Handler " , 
    //   posted_date: Date.now(), 
    //   applied_date: Date.now(), 
    //   status: "Pending", 
    //   start_date: Date.now(), 
    //   end_date: Date.now()
    // }];
    // console.log(this.user);
    // console.log(this.apps);
  }

  accept(jobId: string) {
    this.jobService.accept(jobId, this.userService.getCurrentUser()['_id']).subscribe(res => {
      console.log(res);
    })
    
  }

}
