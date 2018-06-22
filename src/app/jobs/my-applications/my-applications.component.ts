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


     }

  ngOnInit() {

   //Rex data comes here
    this.myApps = store.getState().applicationReducer.data;
    if( !this.showAccept) {
      this.apps = this.myApps
    }

    //subscribe for updated state from store data comes here
    store.subscribe(()=>{
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
        //replaced by redux
          console.log(this.apps);
          this.showAccept = false;
        });
      }
    });
    

  }

  accept(jobId: string) {
    this.jobService.accept(jobId, this.userService.getCurrentUser()['_id']).subscribe(res => {
      console.log(res);
    })
    
  }

}
