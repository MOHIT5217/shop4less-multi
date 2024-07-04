import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!:Subscription;

  ngOnInit(): void {
    const source = interval(1000);
    this.sub = source.pipe(tap(data=>{
      if(data >= 5){
        this.sub.unsubscribe();
      }
    }
    ),map(data=>'video ' +  data))
    .subscribe(res=>{
      console.log(res);

    });
    // setTimeout(()=>{
    //   this.sub.unsubscribe()
    // },10000)
  }
  ngOnDestroy(): void {
      // this.sub.unsubscribe()
  }

}
