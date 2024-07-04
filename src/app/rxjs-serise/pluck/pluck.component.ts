import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  users = [
    {
      id: 1, name: "Mohit",
      job: {
        title: "frontend Developer",
      }
    },
    {
      id: 2, name: "Vijay", job: {
        title: "Backend Developer",
      }
    },
    {
      id: 3, name: "Anup", job: {
        title: "Ui Developer",
      }
    },
    {
      id: 4, name: "Shubham", job: {
        title: "Java Developer",
      }
    },
  ];
  data:string[]=[];
  data1:string[]=[];

  ngOnInit(): void {
    //Ex-1
    from(this.users).pipe(pluck('name'),toArray())
    .subscribe(res=>{
      console.log(res);
      this.data = res;
    })


    //Ex-2
    from(this.users).pipe(pluck('job','title'),toArray())
    .subscribe(res=>{
      console.log(res);
      this.data1 = res;
    })
  }

}
