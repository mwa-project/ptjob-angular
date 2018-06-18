import { ViewJobsComponent } from './../../jobs/view-jobs/view-jobs.component';
import { JobsService } from './../../jobs/jobs.service';

import { Component } from '@angular/core';


import { DataSource } from '@angular/cdk/table'
import { Router } from '@angular/router';

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
  public selectedJob;
  public showMap:boolean;


  constructor(public jobsService: JobsService, public router: Router){
    this.showMap = true;
    this.getPosition();
    jobsService.getJobs().subscribe( x => {
      this.jobs = x["data"];
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
     this.router.navigate(['view-jobs']);
  }

  openWindow(data){
    this.selectedJob  = data;
    this.clicked = true;
  // this.showMap = false;
  }

  closeJobWindow(){
    this.clicked = false;
    this.showMap = true;
  }

  toggleMap(){
    if(this.showMap)
    this.showMap = false;
    else
    this.showMap = true;
  }

}
