import { Component, OnInit } from '@angular/core';
import { interval, concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-marge',
  templateUrl: './marge.component.html',
  styleUrls: ['./marge.component.scss']
})
export class MargeComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    const streamComedy = interval(2000).pipe(map(res=>"Comedy"+ " " + (res+1)),take(5));
    const streamNews = interval(4000).pipe(map(res=>"News"+ " " + (res+1)),take(3));
    const streamMovies = interval(1000).pipe(map(res=>"Movies"+ " " + (res+1)),take(2));

    const allStream = merge(streamComedy, streamNews, streamMovies )
    allStream.subscribe(res=>{
      this._du.print(res, "elContainer")
    })
  }

}
