import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';
import {TodoListService} from '../todo-list.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  lists!:any;
  note:string = '';
  itemForedit!:string;
  idForEdit: any;
  isEdit:boolean= false;
  createPlaceholder:string = "Enter to do";
  months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  days = [ 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
  
  constructor(private todoService:TodoListService, private matSnackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((res:Todo)=>{ 
      this.lists = res;
    });
  }
  delete(_id: string){
    this.todoService.deleteTodoList(_id).subscribe(res=>{
    });
    this.matSnackBar.open("Deleted succresfully", undefined, {
      duration: 3000, // Adjust the duration as needed, in milliseconds
      panelClass: ['bg-danger','text-white']
    });
  }

  
  create(_todoForm: NgForm){
    
    const formObj = {
      "notes" : this.note.trim(),
      "time" : this.getCurrentTime()
    }

    if(formObj.notes !== ''){
      this.todoService.createTodoList(formObj).subscribe(res=>{
        this.matSnackBar.open("Created succesfully", undefined, {
          duration: 3000, // Adjust the duration as needed, in milliseconds
          panelClass: ['bg-success','text-white']
        });
      })
    }else{
      this.matSnackBar.open("Enter something", undefined, {
        duration: 3000, // Adjust the duration as needed, in milliseconds
        panelClass: ['bg-warning','text-white']
      });
    }
    this.note = ''; //clear input
  }
  editList(_id: string){
    this.isEdit = true
    this.todoService.getListItem(_id).subscribe(res=>{
      this.itemForedit = res.notes;
      this.idForEdit = res.id
    })
  }
  
  editItemNow(){

    const formData = {
      "notes" : this.itemForedit,
      "id" : this.idForEdit,
      "time" : this.getCurrentTime()
    }
    if(this.itemForedit.trim() !== ''){
      this.todoService.updateTodoList(this.idForEdit,formData).subscribe(res=>{
        this.matSnackBar.open("Saved", undefined, {
          duration: 3000, // Adjust the duration as needed, in milliseconds
          panelClass: ['bg-success','text-white']
        });
      })
    }else{
      this.matSnackBar.open("Enter something", undefined, {
        duration: 3000, // Adjust the duration as needed, in milliseconds
        panelClass: ['bg-warning','text-white']
      });
    }
  }
  cancleEdit(){
    this.isEdit = false
  }
  getCurrentTime(){
    const time = new Date();
    const currentTime = time.getHours() + ":" + time.getMinutes() + " " + (time.getHours() >= 12 ? "PM" : "AM" ) + " " + this.days[time.getDay()]+ " "+ time.getDate() + " "+ this.months[time.getMonth()]+ " " + time.getFullYear();
    return currentTime;
  }
}
