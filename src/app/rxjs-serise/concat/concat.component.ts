import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UtilityService } from 'src/app/app-service/utility.service';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    const streamComedy = interval(1000).pipe(map(res=>"Comedy"+ " " + (res+1)),take(5));
    const streamNews = interval(1000).pipe(map(res=>"News"+ " " + (res+1)),take(3));
    const streamMovies = interval(1000).pipe(map(res=>"Movies"+ " " + (res+1)),take(2));

    const allStream = concat(streamComedy, streamNews, streamMovies )
    allStream.subscribe(res=>{
      this._du.print(res, "elContainer")
    })
  }

}
