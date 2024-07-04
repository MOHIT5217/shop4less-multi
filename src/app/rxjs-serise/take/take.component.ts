import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit, AfterViewInit {

  @ViewChild('stopBtn')  stopBtn!:ElementRef;
  constructor(private designUtility: DesignUtilityService) { }

  arr = ['mohit','maheshwari','frontend','Angular','rxjs']

  ngOnInit(): void {

    //ex-1

    const source = from(this.arr);
    source.pipe(take(3))
    .subscribe(res=>{ 
      this.designUtility.print(res, 'elContainer')
    })

    //Ex-2

    source.pipe(
      takeLast(3)
    )
    .subscribe(res=>{
      this.designUtility.print(res, "elContainer2")
    })

  }
  ngAfterViewInit(): void {
       //Ex-3

    const source3 = interval(1000);
    const condition = fromEvent(this.stopBtn.nativeElement, 'click')

    source3.pipe(
      takeUntil(condition), map(data=> 'videos')
    ).subscribe(res=>{
      this.designUtility.print(res, "elContainer3")
    })
  }
}
