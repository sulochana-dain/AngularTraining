import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getData(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
