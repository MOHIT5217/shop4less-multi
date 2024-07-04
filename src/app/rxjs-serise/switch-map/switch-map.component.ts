import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, of } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  pluck,
  switchMap,
} from 'rxjs/operators';
import { Search } from 'src/interface/search';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput?: NgForm;
  searchResults: any;
  searchResultsCount: number = 0;

  constructor(private _du: DesignUtilityService) {}

  ngOnInit(): void {
    const source = from(['HTML', 'CSS', 'JavaScript', 'Angular']);

    source.pipe(switchMap((res) => this.getData(res))).subscribe((res) => {
      this._du.print(res, 'elContainer');
    });
  }
  getData(data: string) {
    return of(data + ' ' + 'Expert').pipe(delay(1000));
  }

  ngAfterViewInit(): void {
    const inputValue = this.searchInput?.valueChanges;
    inputValue
      ?.pipe(
        filter(() => this.searchInput?.valid ?? false),
        // map(res=>res.searchInput)
        pluck('searchInput'),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((res) => this._du.getSearchedData(res))
      )
      .subscribe((val) => {
        this.searchResults = val;
        this.searchResultsCount = Object.keys(val).length;
      });
  }
}
