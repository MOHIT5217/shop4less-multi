import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  constructor(private httpclient:HttpClient) { }

  getData(){
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return this.httpclient.get(url)
  }
}
