
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../users/user.service';
import { store } from 'src/app/jobs/myApplicationsState';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {

  user: Object;
  hideMenu = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) {
    // this.user = this.userService.getCurrentUser();
    store.subscribe(()=>{})
  }

  ngAfterContentChecked() {
    this.user = this.userService.getCurrentUser();
    if (this.user) {
      this.hideMenu = false;
    }
    // console.log(this.user);
  }

  onLogin() {
    console.log('onLogin!')
    this.hideMenu = true;
  }
  onSignOut() {
    console.log('onSignOut() clicked!');
    this.userService.signOut();
  }
  
}
