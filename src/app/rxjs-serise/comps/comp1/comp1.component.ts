import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/app-service/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  userName:string = "Mohit";

  constructor(private utility: UtilityService) {
    this.utility.userName.subscribe(res=>{
      this.userName = res;
    });
    }

  ngOnInit(): void {
  }

  onChange(data:HTMLInputElement){
    if(data.value.trim()!==''){
      this.utility.userName.next(data.value);
    }
    data.value= '';
  }
}
