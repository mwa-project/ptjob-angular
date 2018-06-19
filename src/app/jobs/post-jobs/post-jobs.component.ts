import { Component, OnInit } from '@angular/core';
import {FormControl
  , FormGroupDirective
  , NgForm
  , Validators
  , FormGroup
  , FormBuilder
, FormArray} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PtjobService } from '../ptjob.service';
import { Router } from '@angular/router';
import { UserService } from '../../users/user.service';


@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {
  myForm: FormGroup
  userData;
  constructor(private formBuilder: FormBuilder, public userService:UserService, private ptJobService: PtjobService, private router: Router) {
    this.userData = this.userService.getCurrentUser();
    this.myForm = formBuilder.group({
      'created_by_user_id': this.userData._id,
      'created_by_full_name': this.userData.first_name+" "+this.userData.last_name,
      'status': 'open',
      'category': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'state' : ['', Validators.required],
      'city' : ['', Validators.required],
      'zipcode' : ['', Validators.required],
      'longitude' : ['', Validators.required],
      'latitude' : ['', Validators.required],
      'requirements': formBuilder.array([
        ['', Validators.required]
      ]),
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
    console.log('click add req');
    (<FormArray>this.myForm.get('requirements')).push(new FormControl('', Validators.required));
  } 

  onRemoveRequirement(index){
    console.log('index: '+index);
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.ptJobService.saveNewJobPost(this.myForm.value)
    .subscribe(res => {
      console.log(res); 
      this.router.navigate(['/', 'view-jobs']);
    }
    , err => {console.log(err); } );
  }

  ngOnInit() {
  }

}
