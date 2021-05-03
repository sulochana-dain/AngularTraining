import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  result:any;
  constructor(private route:Router, private _commonService:CommonService) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this._commonService.getData().subscribe((res:any)=>{
      this.result = res;
    });
  }
  
  redirect(id:any){
   this.route.navigate(['component2', id]);
  }

  redirectWithObj(obj:any){
     this.route.navigate(['component2'], {state:obj});
  }
}
