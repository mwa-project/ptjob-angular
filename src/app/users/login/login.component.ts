import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { BusyDialogComponent } from '../../busy-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  hide = true;
  dialogRef;

  openDialog(): void {
    this.dialogRef = this.dialog.open(BusyDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  constructor(private router: Router, public fb: FormBuilder, private userService: UserService, public dialog: MatDialog) {
    console.log('constructor')
    this.loginForm = fb.group({
      'userName' : ['tfarida', Validators.required],
      'password' : ['tfarida', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(x => console.log(x));
   }

   
  ngOnInit() {
    console.log('init')
    if (!this.userService.getCurrentUser()) {
      // hide left main menu
    }
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  onSignIn(): void {
    this.openDialog();
    console.log('clicked');
    this.sleep(500).then(() => {
      // Do something after the sleep!
      this.userService.login(
        this.loginForm.controls['userName'].value, 
        this.loginForm.controls['password'].value).subscribe(res => {
          console.log(res);
          if (res) {
            console.log('login success');
            this.dialogRef.close();
            this.router.navigate(['/']);
            
          }
      }, err => {
        console.log('login faild!');
        console.log(err);
      });
      
   });

    
  }
}