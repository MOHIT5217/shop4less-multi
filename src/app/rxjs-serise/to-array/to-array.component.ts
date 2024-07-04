import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  users = [
    {
      name: "Mohit",
      age: 25
    },
    {
      name: "Shubham",
      age: 30
    },
    {
      name: "Ganesh",
      age: 27
    }
  ]

  ngOnInit(): void {

    //Ex-1
    let stream = interval(1000);
    stream.pipe(take(5), toArray())
      .subscribe(res => {
        console.log(res);
      });

    //Ex-2
    let stream1 = from(this.users)
    stream1.pipe(toArray()).subscribe(res=>{
      console.log(res);
    })

    //Ex-3
    let stream2 = of('Mohit', 'Maheshwari', 'Rxjs')
    stream2.pipe(toArray()).subscribe(res=>{
      console.log(res);
    })

  }

}
