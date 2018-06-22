
import { Component, OnDestroy, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  NgRedux, select } from '@angular-redux/store';
import { IAppState } from './app.store';
import { ManagementApplicationActions } from './app.actions';
import { store } from 'src/app/jobs/myApplicationsState';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    store.subscribe(() => {
         localStorage.removeItem('job_applications');
         console.log("before")
         localStorage.setItem('job_applications', JSON.stringify(store.getState().applicationReducer.data))
         console.log("ndio hapa")
         console.log(JSON.parse(localStorage.getItem('job_applications')))
    });
  }
  title = 'app';
  constructor() {}



   
}
