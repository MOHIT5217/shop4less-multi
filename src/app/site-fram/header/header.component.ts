import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/app-service/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAdmin:boolean = false;

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
    this.utility.admin.subscribe(res=>{
      console.log(res,"test");
      this.isAdmin = res
    })
  }

}
