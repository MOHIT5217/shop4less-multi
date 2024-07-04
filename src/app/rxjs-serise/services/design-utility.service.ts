import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Search } from 'src/interface/search';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) { }

  videoEmit = new ReplaySubject<string>(3);
  asyncVideoEmit = new AsyncSubject<string>();

  print(stream: string, id:string){
    const li = document.createElement('li') as HTMLLIElement;
    const ul = document.getElementById(id) as HTMLUListElement;
    ul.appendChild(li).innerText = stream;
  }
  
  getSearchedData(search:Search):Observable<Search>{
    const url = "https://jsonplaceholder.typicode.com/photos?q=" + search
    return this.http.get<Search>(url);
  }
}
