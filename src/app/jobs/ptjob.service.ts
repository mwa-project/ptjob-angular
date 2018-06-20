import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server } from './../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PtjobService {
  public jobPostLink: string;

  constructor(private http: HttpClient) { 
    this.jobPostLink  = server.host + ":" + server.port + "/job-posts" 
  }
  private getUrl(params?: string): string {
    let url = server.host + ":" + server.port + '/job-posts';
    if (params) {
      url += ('/' + params);
    }
    return url;
  }

  getJobPost(id){
    return this.http.get('');
  }
  getCompletedJobs(employer_id){
    //return this.http.get(this.jobPostLink, employer_id);
    return this.http.get(this.getUrl(employer_id));
  }
  saveNewJobPost(data){
    console.log(data);
    return this.http.post(this.jobPostLink, data);
  }

  updateJobPost(data){
    this.http.put('', data)
    .subscribe(res => {console.log(res); }
    , err => {console.log('Error occured'); } );
  }

}
