import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css']
})
export class MyApplicationsComponent implements OnInit {

  user: Object;
  apps: Array<Object>;
  isAccept = true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.apps = this.user['job_applications'];
    this.apps = [{
      job_id: '5b27da26eab89f87b1897cc7',
      job_name: "Sales Associate job" , 
      posted_date: Date.now(), 
      applied_date: Date.now(), 
      status: "Done", 
      start_date: Date.now(), 
      end_date: Date.now()
    },
    {
      job_id: '5b27da26eab89f87b1897cc7',
      job_name: "Package Handler " , 
      posted_date: Date.now(), 
      applied_date: Date.now(), 
      status: "Accept", 
      start_date: Date.now(), 
      end_date: Date.now()
    },
    {
      job_id: '5b27da26eab89f87b1897cc7',
      job_name: "Package Handler " , 
      posted_date: Date.now(), 
      applied_date: Date.now(), 
      status: "Pending", 
      start_date: Date.now(), 
      end_date: Date.now()
    }];
    console.log(this.user);
    console.log(this.apps);
  }

}
