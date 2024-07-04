import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }
  objMes:any;
  ngOnInit(): void {
    let ofOprater =  of('Mohit','Maheshwari','Ji');
    ofOprater.subscribe(res=>{
      this.designUtility.print(res, "elContainer");
    })
    let ofOprater1 =  of({a:'Mohit',b:'Maheshwari',c:'Ji'});
    ofOprater1.subscribe(res=>{
      this.objMes = res
      // this.designUtility.print(res, "elContainer");
    })

    let fromOprater = from(['Alex','Web','Dev']);
    fromOprater.subscribe(res=>{
      this.designUtility.print(res, "elContainer2")
    });

    let promise =  new Promise<string>(resolve=>{
      setTimeout(()=>{
        resolve("Promise resolved");
      }, 3000)
    })
    let fromOprater1 = from(promise);
    fromOprater1.subscribe(res=>{
      this.designUtility.print(res, "elContainer1")
    })
    let fromOprater4 = from("Mohit Maheshwari test");
    fromOprater4.subscribe(res=>{
      if(res===" "){  
        this.designUtility.print("space", "elContainer4");
      }else{
        this.designUtility.print(res, "elContainer4");
      }
      
    })
  }

}
