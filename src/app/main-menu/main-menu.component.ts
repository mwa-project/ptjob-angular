
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../users/user.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {

  user: Object;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) {
    // this.user = this.userService.getCurrentUser();
  }

  ngAfterContentChecked() {
    this.user = this.userService.getCurrentUser();
    // console.table(this.user);
  }

  onSignOut() {
    console.log('onSignOut() clicked!');
  }
  
}
