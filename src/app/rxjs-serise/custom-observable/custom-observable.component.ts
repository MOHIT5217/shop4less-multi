import { Component, OnDestroy, OnInit } from '@angular/core';
import { noop, Observable, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/app-service/utility.service';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  constructor(private designUtility: DesignUtilityService, private utility:UtilityService) { }
  techStatus:string= '';
  techStatus1:string= '';
  techStatus2:string= '';
  coustObSUb!:Subscription;
  techNAme:string='';
  ngOnInit(): void {

    //EX-1

    const customObs = new Observable<string>(observer=>{
      setTimeout(() => {
        observer.next("Angular")
      }, 1000);
      setTimeout(() => {
        observer.next("Rxjs");
      }, 2000);
      setTimeout(() => {
        observer.next("HTML");
        // observer.error(new Error("Limit Exceed"))
        observer.complete()
      }, 3000);
      setTimeout(() => {
        observer.next("Javascript");
      }, 4000);
    });
    customObs.subscribe(res=>{
      this.designUtility.print(res, "elContainer")
    },
    (err)=>{
      this.techStatus = 'error';
    },
    ()=>{
      this.techStatus = 'complete';
    });

    //Ex-2

    const arr = ["Angular","Css","Javascript","HTML"];

    const customObs1 = new Observable<string>(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(arr[count])
        // if(count >= 1){
        //   observer.complete()
        // }
        if(count >= 2){
          observer.error("error occure")
        }
        count++;
      },1000)
    });
    customObs1.subscribe(res=>{
      this.designUtility.print(res, "elContainer1")
    },
    (err)=>{
      this.techStatus1 = "error";
    },
    ()=>{
      this.techStatus1 = "complete"
    });

    //Ex-3

    const arr1 = ["Angular","Css","Javascript","HTML"];
    const customObs2 = new Observable<string>(observer=>{
      let count = 0;
      setInterval(()=>{
        observer.next(arr1[count])
        // if(count >= 3){
        //   observer.complete();
        // }
        if(count >= 2){
          observer.error();
        }
        count++;
      },1000)
    });
    customObs2.subscribe(res=>{
      this.techNAme = res;
    },
    (err)=>{
      this.techStatus2 = "error";
    },
    ()=>{
      this.techStatus2 = "complete"
    });

    this.utility.admin.next(true);

    const http$ = new Observable(observer=>{
      fetch('https://dummyjson.com/products')
      .then(res=>{
        return res.json();
      }
        )
      .then(body=>{
        observer.next(body);
        observer.complete()
      }).catch(err=>{
        observer.error(err);
      })
    })
    http$.subscribe(
      res=>console.log(res),
      noop,
      ()=>console.log("complete")
      )
  }

  ngOnDestroy(): void {
    this.utility.admin.next(false);
  }

}
