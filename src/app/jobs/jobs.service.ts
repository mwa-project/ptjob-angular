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
  private _location : Subject<Object>;


  get location(){
    return this._location;
  }

  setLocation(value){
    this._location.next(value);
  }

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
    this._location = new Subject();
  }

  public getJobs() {
    return this.http.get(this.jobsLink);
  }

  public getJobsByText(search) {
    return this.http.get(this.jobsLink + "/" + search);
  }

  public getJobsByDistace(long, lat , dist) {
    let token = this.userService.retrieveToken()
    return this.http.get(this.jobsLink + "/" + long + "/" + lat + "/" + dist );
  }

  public applyJob(data){
    let applyLink  = this.userService.getUrl("/job-posts/" + data._id);
    return this.http.patch(applyLink, data);
  }
}

export interface MapStatus {
      visible:boolean;
}
