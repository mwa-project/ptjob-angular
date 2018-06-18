import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(public fb: FormBuilder) {

    this.loginForm = fb.group({
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(x => console.log(x));
   }

  ngOnInit() {
  }

}
