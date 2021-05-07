import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getData(){
    //return this.http.get('http://awsapi.mahamining.com/mineral-mapping/licensees/GetAllLicensee?LicenseeType=&isCompleted=2&pageno=1&pagesize=10');

     return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
