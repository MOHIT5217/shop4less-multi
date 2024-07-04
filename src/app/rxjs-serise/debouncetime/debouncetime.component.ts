import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  @ViewChild("searchInput") searchInput!:ElementRef;
  @ViewChild("searchInput1") searchInput1!:ElementRef;
  searchedData:any= null;
  searchedData1:any= null;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      const source = fromEvent<any>(this.searchInput.nativeElement, 'keyup');
      const source1 = fromEvent<any>(this.searchInput1.nativeElement, 'keyup');

      // Ex-debounceTime
      source.pipe(
        map(event=> event.target.value),
        debounceTime(1000)
      ).subscribe(res=>{
        this.searchedData = res;
        setTimeout(() => {
          this.searchedData = null;
        }, 2000);
      });

      // Ex-distinctUntilChanged

      source1.pipe(
        map(event=>event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(res=>{
        console.log(res);
        this.searchedData1 = res;
        setTimeout(() => {
          this.searchedData1=null;
        }, 2000);
      })

  }

}
