import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { server } from '../../config';
import { JobService } from './job.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private userService: UserService, private jobService: JobService) { }


  private getUrl(params?: string): string {
    let url = server.host + ":" + server.port + '/applications';
    if (params) {
      url += ('/' + params);
    }
    return url;
  }
  
  public getMyApplications(callback) {
    callback(this.userService.getCurrentUser()['job_applications']);
  }

  public getApplicationsByJobId(jobId: string, callback) {
    this.jobService.getJobById(jobId).subscribe(res => {
      console.log(res)
      callback(res['data']['applicants']);
    });
  }

  public accept(applicationId: string) {
    console.log(applicationId);
    // TODO:
    // console.log('TODO: goto server');
    
  }
}
