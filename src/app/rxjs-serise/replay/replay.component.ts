import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {

  isSubcribeuser3: boolean = false;
  isSubcribeuser2: boolean = false;
  user2Sub!:Subscription;
  user3Sub!:Subscription;

  constructor(private designUtility: DesignUtilityService) { }

  user1Arr = ['angular 1', 'angular 2', 'angular 3'];
  user2Arr:string[] = [];
  user3Arr:string[] = [];

  ngOnInit(): void {
  }

  addVideo(val: HTMLInputElement) {
    this.designUtility.videoEmit.next(val.value);
    this.user1Arr.push(val.value);
  }

  subscribe2() {
    if(this.isSubcribeuser2){
      this.user2Sub.unsubscribe();
    }else{
      
      this.user2Sub = this.designUtility.videoEmit.subscribe(res=>{
        this.user2Arr.push(res);
      });
    }
    this.isSubcribeuser2 = !this.isSubcribeuser2;
  }
  subscribe3() {
    if(this.isSubcribeuser3){
      this.user3Sub.unsubscribe();
    }else{
      this.user3Sub = this.designUtility.videoEmit.subscribe(res=>{
        this.user3Arr.push(res);
      });
    }
    this.isSubcribeuser3 = !this.isSubcribeuser3;
  }

}
