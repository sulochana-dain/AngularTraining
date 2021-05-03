import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  id:any;
  result:any;
  constructor(private router:Router, private _activatedRoute:ActivatedRoute, private _commonService:CommonService) {

    const obg = this.router.getCurrentNavigation();
    this.result = obg?.extras.state as {data:any};
   }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;
    //this.getData();
  }
  
  // getData(){
  //   this._commonService.getData().subscribe((res:any)=>{
  //    res.forEach((element:any) => {
  //      if(this.id == element.id){
  //           this.result =element; 
  //      }
  //    });

  //   })
  // }

}
