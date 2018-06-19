import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class JobsService {

  public jobsLink: string;
  public currentToken: string;
  private _currentJob :Subject<Object>;
  private _map :Subject<boolean>


  get currentJob(){

    return this._currentJob;
  }

 

  set currentJob(value){
    this._currentJob.next(value);
  }


  setMap(value){

    this._map.next( value );
  }

  get map(){

    return this._map;
  }
  


  constructor(public userService: UserService, public http: HttpClient) {
    this.jobsLink = this.userService.getUrl("/job-posts");
    this._currentJob = new Subject();
    this._map = new Subject();
  }

  public getJobs() {
    return this.http.get(this.jobsLink);
  }
}

export interface MapStatus {
      visible:boolean;
}
