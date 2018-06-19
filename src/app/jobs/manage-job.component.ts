import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';
import { ManagementApplicationActions } from '../app.actions';

@Component({
  selector: 'app-manage-job',
  template: `
  <h1 mat-dialog-title>Add file</h1>

  <mat-dialog-content>
  <div class="content" [formGroup]="formData">
    <label>If this job already finished, you can mark it done:</label>
    <br />
    <label class="form-radio form-inline">
        <input type="radio" name="gender"  [value]="Gender.FEMALE" [checked]="formData.controls['gender'].value === Gender.FEMALE">
        <i class="form-icon"></i> Mark it Done
    </label>
    <br />
    <br />
    <label>Or maybe if you want to close it:</label>
    <br />
    <label class="form-radio form-inline">
        <input id="gender" type="radio" name="gender"   [value]="Gender.MALE" [checked]="formData.controls['gender'].value === Gender.MALE">
        <i class="form-icon"></i> Close it
    </label>

  </div>
  </mat-dialog-content>
  <mat-dialog-actions>
  <button mat-raised-button [mat-dialog-close]="formData.controls['gender'].value === Gender.MALE">No</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-raised-button [mat-dialog-close]="">Yes</button>
</mat-dialog-actions>
  `,
  styles: []
})
export class ManageJobComponent implements OnInit, OnDestroy {

  public formData: FormGroup;
  public Gender = Gender;
  subscription;
  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private actions: ManagementApplicationActions) {
    // this.processingJob$ = ngRedux.select<{_id: string, title: string}>('processingJob');
    this.subscription = this.ngRedux.select<{ _id: string, title: string }>('processingJob')
      .subscribe(item => {
        console.log('got from redux: ' + item);
        if (this.formData)
          console.log(this.formData.value);        
      });
   }
  

  ngOnInit() {
    this.formData = this.fb.group({
      gender: Gender.MALE
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
   }
}


export enum Gender {
  FEMALE = 1,
  MALE   = 2
}



