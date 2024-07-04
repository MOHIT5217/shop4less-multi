import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit,AfterViewInit {

  @ViewChild('btnCount')
  btnCount!: ElementRef;

  constructor(private utility:DesignUtilityService) { }

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.btnCount.nativeElement,'click').subscribe(res=>{
      let stream = "video" + count++
      this.utility.print(stream,"elContailer");
      this.utility.print(stream,"id2");
    })
  }
  

  ngOnInit(): void {
  }
}
