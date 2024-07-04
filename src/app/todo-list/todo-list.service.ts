import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Todo} from './todo'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private httpClient:HttpClient) { }

  getTodoList():Observable<Todo>{
    let url = "http://localhost:3000/todo-list";
    return this.httpClient.get<Todo>(url)
  }
  updateTodoList(todoId:string,todoBody:Object):Observable<Todo>{
    let url = "http://localhost:3000/todo-list/" + todoId;
    return this.httpClient.put<Todo>(url, todoBody)
  }
  deleteTodoList(todoId:string):Observable<Todo>{
    let url = "http://localhost:3000/todo-list/" + todoId;
    return this.httpClient.delete<Todo>(url);
  }
  createTodoList(todoBody:object):Observable<Todo>{
    let url = "http://localhost:3000/todo-list/";
    return this.httpClient.post<Todo>(url, todoBody);

  }
  getListItem(todoId:string):Observable<Todo>{
    let url = "http://localhost:3000/todo-list/" + todoId;
    return this.httpClient.get<Todo>(url);
  }
}
