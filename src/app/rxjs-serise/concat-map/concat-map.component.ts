import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concatMap, delay, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = from(['HTML', 'CSS', 'Angular'])
      .pipe(concatMap((res) => this.getData(res)))
      .subscribe((res) => {
        this.print(res, 'elContainer');
      });
  }

  print(data: string, id: string) {
    const div = document.createElement('div') as HTMLDivElement;
    div.innerHTML = data;
    const contianer = document.getElementById(id) as HTMLDivElement;
    contianer.prepend(div);
  }

  getData(data: string) {
    return of(`<div class="item">
    <div class="item-header">${data} Expert</div>
    <div class="item-body">
        Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Possimus maxime dolorum minus, 
        corporis adipisci nihil ipsa vel? Neque consequuntur 
        nam officia obcaecati quae nostrum soluta impedit 
        corrupti itaque, quidem veniam.
    </div>
    </div>`).pipe(delay(1000));
  }
}
