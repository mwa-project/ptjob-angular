import { JobsService } from './../jobs.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  job;
  selectedJob;
  clicked:boolean
  showMap: boolean;
  constructor(private jobService: JobService, private jobsService: JobsService, private activatedRoute: ActivatedRoute) {
    this.jobsService.currentJob.subscribe(job => {
      this.job = job
      this.clicked = true;
      this.selectedJob =  this.job;
      console.log("this.job");
      console.log(this.job);
    });

    this.jobsService.setMap(true);
    this.showMap = true;

  }

  closeJobWindow(){
    this.clicked = false;
    this.jobsService.setMap(true);
      this.showMap = true;
  }

  toggleMap(){
    if(this.showMap)
    {
      this.jobsService.setMap(false);
      this.showMap = false;
    }
    
    else {
      this.jobsService.setMap(true);
      this.showMap = true;
    }
   
  }
  
  ngOnInit() {
    
    this.jobsService.currentJob.subscribe(job => {
      this.job = job
      this.clicked = true;
      this.selectedJob =  this.job;
      console.log("this.job");
      console.log(this.job);
    });

    this.activatedRoute.params.subscribe(params => {
      const jobId = params['id'];
      if (jobId) {
        this.jobService.getJobById(jobId).subscribe(res => {
          this.job = res['data'];
          this.jobsService.currentJob = this.job;
        });

      }

    });
  }
}
