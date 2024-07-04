import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements OnInit, AfterViewInit {

  @ViewChild("btn") btn!:ElementRef;
  num:number = 0;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, "click").pipe(
      exhaustMap(()=> this.postData(this.num++))
    ).subscribe(res=>{
      console.log(res);
      
      this.getData()
    });

  }

  postData(changes:number){
    return this.httpClient.post("http://localhost:3000/exhaustmap",{data : changes})
  }
  getData(){
    this.httpClient.get("http://localhost:3000/exhaustmap").subscribe(res=>{
      console.log(res);
      
    })
  }
}
