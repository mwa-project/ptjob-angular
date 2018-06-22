import { JobsService } from './../jobs.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { UserService } from '../../users/user.service';
import { store, AddApplicationAction } from '../myApplicationsState';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  job;
  selectedJob;
  clicked: boolean
  showMap: boolean;
  status;
  canApply: boolean;
  jobs = [];

  constructor(private jobService: JobService, private jobsService: JobsService,
    private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {

      console.log('here_my_state');
      
     
    this.jobsService.setMap(true);
    this.showMap = true;

  }

  closeJobWindow() {
    this.clicked = false;
    this.jobsService.setMap(true);
    this.showMap = true;
    this.router.navigate(["view-jobs"])
  }

  toggleMap() {
    if (this.showMap) {
      this.jobsService.setMap(false);
      this.showMap = false;
    }

    else {
      this.jobsService.setMap(true);
      this.showMap = true;
    }

  }

  applyForAjob(job) {

    let user = this.userService.getCurrentUser();
    console.log(user);

    let full_name = user.first_name + " " + user.last_name;
    let user_id = user._id;

    let job_id = job._id;
    let job_name = job.category;
    let posted_date = job.created_at;
    let start_date = job.period.start_date;
    let end_date = job.period.end_date;

    let data = {
      _id: job_id, job_name: job_name,
      posted_date: posted_date,
      start_date: start_date,
      end_date: end_date,
      user_id: user_id,
      full_name: full_name
    }

    this.jobsService.applyJob(data).subscribe(x => {
      console.log("myjobhere")
      console.log(x);
      store.dispatch(AddApplicationAction(
        {
          _id: user_id,
          job_id: job_id,
          job_name: job_name,
          posted_date: posted_date,
          applied_date: new Date(),
          status: "submitted",
          start_date: start_date,
          end_date: end_date
        }
      ))

    })

    this.router.navigate(["my-applications"])
  }

  ngOnInit() {
   

    store.subscribe(() => {
      this.jobs = store.getState().applicationReducer.data;
      console.log('here_subscribe');
      console.log(store.getState().applicationReducer.data)


    });


    // this.clicked = true;
      this.jobsService.currentJob.subscribe(job => {
        console.log("myjobhere")
        console.log(job);
      this.job = job
      this.clicked = true;
      this.selectedJob = this.job;
      this.jobs = store.getState().applicationReducer.data;
      console.log(this.jobs)
      // console.log(this.jobs)
      // let myApplications = this.userService.getCurrentUser().job_applications;
      let thiJob = this.jobs.filter(job => { 
        console.log(job)
        console.log(this.selectedJob._id)
        return job.job_id == this.selectedJob._id
      });
      this.status = this.selectedJob.status;
      console.log(thiJob)
      if (thiJob.length > 0) {
        this.status = thiJob[0].status;
        console.log("status" + this.status)
      }

      if (this.status == "open")
        this.canApply = true;
      if(this.selectedJob.created_by) {
      if (this.selectedJob.created_by.user_id == this.userService.getCurrentUser()._id)
        this.canApply = false;
      }

      console.log("assd");

    });


    // this.jobsService.currentJob.subscribe(job => {
    //   this.job = job
    //   this.clicked = true;
    //   this.selectedJob = this.job;
    //   console.log("this.job");
    //   console.log(this.job);
    // });

    this.activatedRoute.params.subscribe(params => {
      const jobId = params['id'];
      if (jobId) {
        this.jobService.getJobById(jobId).subscribe(res => {
          this.job = res['data'];
          this.jobsService.currentJob = this.job;

          console.log(res);
        });

      }

    });
  }
}
