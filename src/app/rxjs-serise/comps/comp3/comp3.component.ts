import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/app-service/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName: string = "Mohit"

  constructor(private utility: UtilityService) {
    this.utility.userName.subscribe(res => {
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
