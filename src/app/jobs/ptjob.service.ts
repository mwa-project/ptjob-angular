import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PtjobService {

  constructor(private http: HttpClient) {    
  }
  getJobPost(id){
    return this.http.get('');
  }
  saveNewJobPost(data){
    console.log('');
    this.http.post('', data)
    .subscribe(res => {console.log(res); }
    , err => {console.log('Error occured'); } );
  }

  updateJobPost(data){
    this.http.put('', data)
    .subscribe(res => {console.log(res); }
    , err => {console.log('Error occured'); } );
  }

}
