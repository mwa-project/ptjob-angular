import { JobsService } from './jobs.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewJobGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.router.navigate(['']);
        return false;
  }

  constructor(private jobsService:JobsService, private router: Router){
     console.log("ssss");
  }
 
}
