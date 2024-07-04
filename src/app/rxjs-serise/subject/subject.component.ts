import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/app-service/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  userName:string = "Mohit"

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
