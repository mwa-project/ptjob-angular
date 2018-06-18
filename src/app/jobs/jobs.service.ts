import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class JobsService {

  public jobsLink: string;
  public currentToken: string;


  constructor(public userService: UserService, public http: HttpClient) {
    this.jobsLink = this.userService.getUrl("/job-posts");
  }

  public getJobs() {
    return this.http.get(this.jobsLink);
  }
}
