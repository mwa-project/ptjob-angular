import { server } from '../../config';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { store, SetApplicationActions } from '../jobs/myApplicationsState';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public signUpLink: string;
  public currentToken: string;


  constructor(public http:HttpClient) { 

    this.signUpLink  = this.getUrl("/users");
    this.currentToken = this.retrieveToken();

  }

  public signUp(user){
    return this.http.post(this.signUpLink, user);
  }
  public updateResume(data){
    // console.log('HELLO');
    // console.log(data);
    let updateResumeLink = this.getUrl("/users"); //server.host + ":" + server.port + "/users";
    return  this.http.patch(updateResumeLink, data);
    //console.log('FINISH PUT');
  }

  getUrl(router: string): string {
    return server.host + ":" + server.port + router;
  }
  
  public login(userName: string, password: string): Observable<{ err: Error, user: Object }> {
    console.log('userName: ' + userName);
    console.log('password: ' + password);
    console.log(this.getUrl('/sessions'))
    return new Observable(observer => {
      const req = this.http.post(this.getUrl('/sessions'), {
        userName: userName,
        password: password
      }).subscribe(res => {
        console.log('res:')
        console.log(res);
        if (res.hasOwnProperty('token')) {
          this.storeToken(res['token']);
        }
        if (res.hasOwnProperty('data')){
          // console.log('data:');
          this.storeUser(res['data']);
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
  private userKey: string = 'user';

  private storeToken(content: string) {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
    // console.log('store token: '+ content);
  }

  public retrieveToken() {
    let storedToken: string = "";
    storedToken = localStorage.getItem(this.tokenKey);
    return storedToken;
  }

  private storeUser(user: Object) {
  localStorage.setItem(this.userKey, JSON.stringify(user));
  localStorage.removeItem('job_applications');
  store.dispatch(SetApplicationActions(user['job_applications']));
  }
  public getCurrentUser() {
    let user = JSON.parse(localStorage.getItem(this.userKey));
    // console.log('got user: ' + user);
    return user;
  }

  public signOut(): void {
    localStorage.clear();
  }
}
