import { Component, OnInit } from '@angular/core';
//copast
//import {Component} from '@angular/core';
import {FormControl
  , FormGroupDirective
  , NgForm
  , Validators
  , FormGroup
  , FormBuilder
, FormArray} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
//end copast

// copast
/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
//end copast
@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {
  myForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'category': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'state' : ['', Validators.required],
      'city' : ['', Validators.required],
      'zipcode' : ['', Validators.required],
      'longitude' : ['', Validators.required],
      'latitude' : ['', Validators.required],
     // , 'requirements': ['', [Validators.required]]
      // ,'requirements': formBuilder.array([
      //   ['Req1', Validators.required]
      // ])
      'period_start_date': ['', [Validators.required]],
      'period_end_date': ['', [Validators.required]] ,
      'salary_range_from': ['', [Validators.required]],
      'salary_range_to': ['', [Validators.required]]   
    });

    this.getPosition();

  }
  public getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.myForm.controls["longitude"].setValue(position.coords.longitude);
      this.myForm.controls["latitude"].setValue(position.coords.latitude);
    });
  }

  onAddRequirement() {
    (<FormArray>this.myForm.controls['requirements']).push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  ngOnInit() {
  }

  //copast
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();
  //end copast

}
