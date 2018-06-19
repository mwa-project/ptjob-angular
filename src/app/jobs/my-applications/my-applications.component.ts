import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css']
})
export class MyApplicationsComponent implements OnInit {

  user: Object;
  apps: Array<Object>;
  isAccept = true;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private appliationService: ApplicationService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let jobId = params['jobId'];
      if (jobId) {
        console.log('get applications by job ID');
        this.appliationService.getApplicationsByJobId(jobId, apps => {
          this.apps = apps;
          console.log(this.apps);
        });
      } else {
        console.log('get applications by current user');
        this.appliationService.getMyApplications(apps => {
          this.apps = apps;
          console.log(this.apps);
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

}
