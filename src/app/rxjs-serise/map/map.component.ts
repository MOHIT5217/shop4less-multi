import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1!:Subscription;
  sub2!:Subscription;
  message!:string;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex-1
    const stream = interval(1000);

    this.sub1 = stream.pipe(
      map(data=> 'video ' + data*3)
      )
    .subscribe(res=>{
      this.message = res;
      this.designUtility.print(res, "elContainer")
    })
    setTimeout(()=>{
      this.sub1.unsubscribe()
    },10000);


    //Ex-2

    const users = [
      {id : 1, name : "Mohit"},
      {id : 2, name : "Vijay"},
      {id : 3, name : "Anup"},
      {id : 4, name : "Shubham"},
    ];

    const stream1 = from(users);

    this.sub2 = stream1.pipe(map(data=> data.name))
    .subscribe(res=>{
      this.designUtility.print(res, "elContainer1")
    })
    
    setTimeout(()=>{
      this.sub2.unsubscribe()
    }, 10000)
    
  }

}
