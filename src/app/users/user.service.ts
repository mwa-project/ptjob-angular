import { server } from './../../config';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public signUpLink: string;
  public currentToken: string;

  constructor(public http:HttpClient) { 
    this.signUpLink  = server.host + ":" + server.port + "/users"
    this.currentToken = this.retrieve();
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
        console.log(res);
        if (res.hasOwnProperty('token')) {
          this.store(res['token']);
        }
        if (res.hasOwnProperty('data')){
          console.log('data:');
          console.log(res['data']);
          observer.next(res['data']);
        }
        
      }, err => {
        observer.error(err);
      }, () => {
        observer.complete();
      });
    });
  }

  private tokenKey:string = 'app_token';

  public store(content: string) {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
    console.log('store token: '+ content);
  }

  private retrieve() {
    let storedToken: string = "";
    storedToken = localStorage.getItem(this.tokenKey);
    console.log('got token: ' + storedToken);
    return storedToken;
  }
}
