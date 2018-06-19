import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import {  NgRedux, select } from '@angular-redux/store';
import { IAppState } from './app.store';
import { ManagementApplicationActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  subscription;
  showManagement = false;
  processingJob: {_id: string, title: string};

  constructor(private ngRedux: NgRedux<IAppState>, private actions: ManagementApplicationActions) {
    // this.processingJob$ = ngRedux.select<{_id: string, title: string}>('processingJob');
    this.subscription = ngRedux.select<{ _id: string, title: string }>('processingJob')
      .subscribe(item => {
        console.log('got processing job:');
        console.log(item);
        
        this.processingJob = item;
        this.showManagement = this.processingJob  != null;
      });
   }

   onSubmit() {
    this.ngRedux.dispatch(this.actions.done());
   }
   onClose() {
    this.ngRedux.dispatch(this.actions.done());
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
   }
}
