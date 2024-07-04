import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/app-service/utility.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  promiseVal: any;
  dellAvail() {
    return true;
  }
  HpAvail() {
    return false;
  }
  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
    const available = new Promise((resolve, rejects) => {
      if (this.dellAvail() === true) {
        setTimeout(() => {
          resolve('Dell is purchased')
        }, 3000);
      } else if (this.HpAvail() === true) {
        setTimeout(() => {
          resolve("HP is purchased")
        }, 3000)
      } else {
        setTimeout(() => {
          rejects("Not purchased")
        }, 3000);
      }
    })

    available.then(res => {
      this.promiseVal = res
      console.log(res);
    }).catch(res => {
      this.promiseVal = res
      console.log(res);

    });

    this.utility.admin.next(true);
  }

  ngOnDestroy(): void {
    this.utility.admin.next(false);
  }
}
