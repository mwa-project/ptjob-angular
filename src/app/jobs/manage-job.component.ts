import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';
import { ManagementApplicationActions } from '../app.actions';

@Component({
  selector: 'app-manage-job',
  template: `
  <h1 mat-dialog-title>Manage Job</h1>

  <mat-dialog-content>
  <!-- <div class="content">
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


  </div> -->

  If this job already finished, you can mark it done, <br />
  Or maybe if you want to close it:
  </mat-dialog-content>

  <mat-dialog-actions>
  <button mat-raised-button [mat-dialog-close]="1">Cancel</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-raised-button [mat-dialog-close]="2">Close it</button>
  <button mat-raised-button [mat-dialog-close]="3">Mark it as Complete</button>
</mat-dialog-actions>

  `,
  styles: []
})
export class ManageJobComponent implements OnInit {

  public formData: FormGroup;
  constructor() {
   }
  

  ngOnInit() {
  }
}


