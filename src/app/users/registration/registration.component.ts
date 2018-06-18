import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signUpForm : FormGroup;
  hide = true;


  public getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.signUpForm.controls["longitude"].setValue(position.coords.longitude);
      this.signUpForm.controls["latitude"].setValue(position.coords.latitude);
    });
  }

  constructor(public fb:FormBuilder, public userService:UserService, public router: Router) {

    this.signUpForm = fb.group({
      'firstName' : ['', Validators.required],
      'lastName' : ['', Validators.required],
      'dateOfBirth' : ['', Validators.required],
      'gender' : ['', Validators.required],
      'email' : ['', Validators.required],
      'state' : ['', Validators.required],
      'city' : ['', Validators.required],
      'zipCode' : ['', Validators.required],
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required],
      'confirmPassword' : ['', Validators.required],
      'longitude' : ['', Validators.required],
      'latitude' : ['', Validators.required],
    });

    // this.signUpForm.statusChanges.subscribe( x => console.log(x));
    //  this.signUpForm.valueChanges.subscribe( x => console.log(x));
     this.getPosition();

   }

   submitUser(){
 

    this.userService.signUp(this.signUpForm.value).subscribe( x => {
      console.log(x);
      this.router.navigate(['login']);
      
    }, err => {
      console.error(err)
    }, () => {
      
    })
        
   }

  ngOnInit() {
  }

}
