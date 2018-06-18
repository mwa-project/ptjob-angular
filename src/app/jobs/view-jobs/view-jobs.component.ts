import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  jobs: Array<Object>;
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(list => {
      this.jobs = list;
    });
  }

}
