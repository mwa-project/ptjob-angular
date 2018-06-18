import { server } from './../../config';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
}
