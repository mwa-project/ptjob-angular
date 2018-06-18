import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  hide = true;
  constructor(private router: Router, public fb: FormBuilder, private userService: UserService) {

    this.loginForm = fb.group({
      'userName' : ['carl1376420801', Validators.required],
      'password' : ['123456', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(x => console.log(x));
   }

  ngOnInit() {
  }
  onSignIn(): void {
    console.log('clicked');
    this.userService.login(
      this.loginForm.controls['userName'].value, 
      this.loginForm.controls['password'].value).subscribe(res => {
        console.log(res);
        if (res) {
          console.log('login success');
          this.router.navigate(['/']);

        } 
    }, err => {
      console.log('login faild!');
    });
  }
}