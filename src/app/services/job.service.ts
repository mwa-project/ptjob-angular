import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public http: HttpClient) { }

  private getUrl(params?: string): string {
    let url = server.host + ":" + server.port + '/job-posts';
    if (params) {
      url += ('/' + params);
    }
    return url;
  }


  public getJobs(): Observable<Array<Object>> {
    return new Observable(observer => {
      this.http.get(this.getUrl()).subscribe(result => {
        observer.next(result['data']);
      }, err => {
        observer.error(err);
      }, () => {
        observer.complete();
      });
    });
  }

  public getJobById(jobId: string): Observable<Object> {
    return this.http.get(this.getUrl(jobId));
  }

  public getJobsByUserId(userId: string) {
    return this.http.get(this.getUrl("user/" + userId));
  }
  // public updateStatus(jobId: string, status: string): Observable<Object> {
  //   console.log('updateStatus: ' + jobId + ', ' + status);
  //   let url = this.getUrl(jobId + '/status/' + status);
  //   console.log(url)
  //   return this.http.patch(url, {});
  // }

  public competed(jobId: string) {
    let url = this.getUrl(jobId + '/competed');
    console.log(url)
    return this.http.patch(url, {});

  }
  public close(jobId: string) {
    let url = this.getUrl(jobId + '/close');
    console.log(url)
    return this.http.patch(url, {});
  }

  public accept(jobId: string, userId: string) {
    let url = this.getUrl(jobId + '/accept/' + userId);
    console.log(url)
    return this.http.patch(url, {});
  }

}
