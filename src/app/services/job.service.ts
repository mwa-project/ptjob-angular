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
}
