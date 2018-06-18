import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  constructor(private jobService: JobService, private activatedRoute: ActivatedRoute) { }
  job: Object;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const jobId = params['id'];
      // const jobId = '5b27da26eab89f87b1897cc7';
      this.job = this.jobService.getJobById(jobId);
    });
  }

}
