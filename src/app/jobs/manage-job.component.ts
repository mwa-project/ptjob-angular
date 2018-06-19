import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-job',
  template: `
  <h1 mat-dialog-title>Add file</h1>

  <mat-dialog-content>
  <div class="content">
    <label>If this job already finished, you can mark it done:</label>
    <br />
    <label class="form-radio form-inline">
        <input type="radio" name="gender" checked="">
        <i class="form-icon"></i> Mark it Done
    </label>
    <br />
    <br />
    <label>Or maybe if you want to close it:</label>
    <br />
    <label class="form-radio form-inline">
        <input type="radio" name="gender">
        <i class="form-icon"></i> Close it
    </label>

  </div>
  </mat-dialog-content>
  <mat-dialog-actions>
  <button mat-raised-button mat-dialog-close>No</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-raised-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>
  `,
  styles: []
})
export class ManageJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
