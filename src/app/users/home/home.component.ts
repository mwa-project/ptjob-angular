import { JobsService } from './../../jobs/jobs.service';

import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  public latitude;
  public longitude;
  public clickedLatitude;
  public clickedLongitude;
  public clicked:boolean;
  public jobs;


  constructor(public jobsService: JobsService){
    this.getPosition();
    jobsService.getJobs().subscribe( x => {
      this.jobs = x;
    })
    }

  public getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
     this.latitude = position.coords.latitude;
     this.longitude = position.coords.longitude;
    });
  }

  public onChooseLocation(event){
     this.clickedLatitude = event.coords.lat;
     this.clickedLongitude = event.coords.lng;
     this.clicked = true;
  }

  openWindow(data){
    this.clicked = true;
    this.clickedLatitude = data.latitude;
    this.clickedLongitude = data.longitude;

  }

}
