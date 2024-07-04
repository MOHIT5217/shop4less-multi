import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop4less';
  parentData = "this is parent data";

  chidData(data:string){
    console.log(data);
    
  }
}
