import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }
  asyncVideoEmit!:string;
  ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe(res=>{
      this.asyncVideoEmit = res;
    })
  }

  onSubmit(data:HTMLInputElement){
    console.log(data.value);
    this._du.asyncVideoEmit.next(data.value);
  }

  onComplete(){
    this._du.asyncVideoEmit.complete();
  }
}
