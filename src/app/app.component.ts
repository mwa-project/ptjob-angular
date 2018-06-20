
import { Component, OnDestroy , ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs';
import {  NgRedux, select } from '@angular-redux/store';
import { IAppState } from './app.store';
import { ManagementApplicationActions } from './app.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  constructor() {}

   
}
