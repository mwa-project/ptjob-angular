import { server } from './../../config';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public signUpLink:string;

  constructor(public http:HttpClient) { 
   this.signUpLink  = server.host + ":" + server.port + "/users"

  }

  public signUp(user){
    return this.http.post(this.signUpLink, user);
  }

  getUrl(router: string): string {
    return server.host + ":" + server.port + router;
  }
  
  public login(userName: string, password: string): Observable<{ err: Error, user: Object }> {

    return new Observable(observer => {
      const req = this.http.post(this.getUrl('/sessions'), {
        user_name: userName,
        password: password
      }).subscribe(res => {

      }, err => {

      });
    });
  }
}
