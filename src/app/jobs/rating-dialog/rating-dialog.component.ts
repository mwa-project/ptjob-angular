import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  // template: `

  // `,
  styleUrls: ['./rating-dialog.component.css']
})
export class RatingDialogComponent implements OnInit {

  // job_id; //: this.dataSource.job_id
  // job_name; //: this.dataSource.job_name
  // rating_type; //: 1 //means from employer to employee
  dataSource;
  form;
  title;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dataSource = data;
      if(data.rating_type == 1) 
       this.title = "Rating from Employer to Employee";
      else
       this.title = "Rating from Employee to Employer";

      console.log(data);
     }

  ngOnInit() {
    this.form = this.fb.group({
      'job_id': this.dataSource.job_id
      , 'job_name': this.dataSource.job_name
      , 'rating_type': this.dataSource.rating_type //means from employer to employee
      ,'rating_value': '', 
      'comment':''
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
