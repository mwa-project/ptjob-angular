import { Injectable } from '@angular/core';
import { Config } from '../configs/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  config: Config;
  constructor(public http: HttpClient) { 
    this.config = require('../configs/config.json');
    console.log(this.config.urlPath + ":" + this.config.port);
  }

  getUrl(router: string): string {
    return this.config.urlPath + ":" + this.config.port + router;
  }
  login(userName: string, password: string): Observable<{ err: Error, user: Object }> {

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
