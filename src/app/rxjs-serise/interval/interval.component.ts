import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  streamData:string = '';
  videoSubscription!: Subscription;
  constructor(private designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    // let broadCast = interval(1000);
    let broadCast = timer(5000, 1000);
    this.videoSubscription = broadCast.subscribe(res=>{
      this.streamData = 'video'+ ' ' + res;
      this.designUtility.print(this.streamData, "ulContainer")
      this.designUtility.print(this.streamData, "ulContainer1")
      if(res >= 5){
        this.videoSubscription.unsubscribe()
      }
    })
  }

}
