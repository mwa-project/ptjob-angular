import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  myForm : FormGroup;
  userData;
  months;//: //[{monthInt: Number, monthStr: String}];
  years = [];
  constructor(public fb:FormBuilder, public userService:UserService) {
   
    this.userData = this.userService.getCurrentUser();
    this.myForm = fb.group({
      'user_name': this.userData.user_name,
      'experiences': fb.array([this.createItemExperience()])     
      , 'educations': fb.array([this.createItemEducation()])    
    // , skills: [{title: String
    //     , description: String}]
    // , hobbies: [String]
    // , accomplishments: [{title: String
    //     , description: String }]
    });

    console.log(this.userData);
    this.setMonths();
    this.setYears();
  }

  ngOnInit() {
  }
  setMonths(){
    this.months = [{ value: 1, text: 'January'}
    ,{ value: 2, text: 'February'}
    ,{ value: 3, text: 'March'}
    ,{ value: 4, text: 'April'}
    ,{ value: 5, text: 'May'}
    ,{ value: 6, text: 'June'}
    ,{ value: 7, text: 'July'}
    ,{ value: 8, text: 'August'}
    ,{ value: 9, text: 'September'}
    ,{ value: 10, text: 'October'}
    ,{ value: 11, text: 'November'}
    ,{ value: 12, text: 'December'}
    ]
  }
  setYears(){
    let currYear = (new Date()).getFullYear(); 
    for(let i=currYear-50; i< currYear+50; i++){
      this.years.push(i);
    }
  }
  updateProfile(){
    this.userService.updateResume(this.myForm.value)
    .subscribe( x => {
      console.log(x);
    }, err => {
      console.error(err)
    }, () => {
      
    })
  }

  createItemEducation(): FormGroup {
    return this.fb.group({
      school_name: '',
        degree: '',
        field_study: '', 
        start_year: '', 
        end_year: '', 
        description: ''
    });
  }

  onAddEducation(){
    (<FormArray>this.myForm.get('educations')).push(this.createItemEducation());
  }
  onRemoveEducation(index){

  }
  createItemExperience(){
    return this.fb.group({
      company_name: '',
      from_month: '',
      from_year: '', 
      to_month: '', 
      to_year: '', 
      company_address: '',
      description: '', 
    });
    
  }

  onAddExperience(){
    (<FormArray>this.myForm.get('experiences')).push(this.createItemExperience());
  }
  onRemoveExperience(index){

  }

}


      // 'first_name' : ['', Validators.required],
      // 'last_name' : ['', Validators.required],
      // 'email' : ['', Validators.required],
      // 'user_name' : ['', Validators.required],
      // 'date_of_birth' : ['', Validators.required],
      // 'gender' : ['', Validators.required],
      // 'state' : ['', Validators.required],
      // 'city' : ['', Validators.required],
      // 'zipcode' : ['', Validators.required],
      // 'longitude' : ['', Validators.required],
      // 'latitude' : ['', Validators.required]//, 