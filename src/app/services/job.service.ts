import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public http: HttpClient) { }

  private getUrl(router: string): string {
    return server.host + ":" + server.port + router;
  }


  public getJobs(): Observable<Array<Object>> {
    return new Observable(observer => {
      this.http.get(this.getUrl('/job-posts')).subscribe(result => {
        observer.next(result['data']);
      }, err => {
        observer.error(err);
      }, () => {
        observer.complete();
      });
    });
  }

  public getJobById(jobId: string): Observable<Object> {
    return new Observable(observer => {
      this.http.get(this.getUrl('/job_posts/' + jobId)).subscribe(result => {
        observer.next(result['data']);
      }, err => {
        observer.error(err);
      }, () => {
        observer.complete();
      });
    });
  }
}
