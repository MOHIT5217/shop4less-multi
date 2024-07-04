import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User2 } from '../user2';
import { delay, filter, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  data: any;
  fatching: string = '';
  isStatus:boolean = false;
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }

  fatchData() {
    this.fatching = "Data fatching..."
    this.isStatus = true;
    this.httpclient.get('https://jsonplaceholder.typicode.com/todos?userId=1').pipe(
      retryWhen(err => err.pipe(delay(3000), scan((retryCount) => {
        if (retryCount >= 3) {
          throw err;
        } else {
          retryCount = retryCount + 1;
          this.fatching = "retring" + '('+retryCount+')'+"...";
          return retryCount;
        }
      }, 0)))
    ).subscribe(res => {
      console.log(res);
      
      this.data = res;
      this.fatching = "Data fatched"
      this.isStatus = false;
    }, (err) => {
      this.fatching = "Data fatched error"
      this.isStatus = false;
    })
  }
}
