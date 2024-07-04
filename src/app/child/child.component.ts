import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UtilityService } from '../app-service/utility.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @Input() data!:string;
  @Output() outData = new EventEmitter<string>();
  ReactiveForm!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ReactiveForm = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(0),
      title: new FormControl(""),
      skills: new FormArray([
        new FormControl('')
      ]),
      users: new FormArray([
        this.fb.group({
          name: [''],
          age: [''],
          dept: ['']
        })
      ])
    })
  }

  onclick(data:string){
    this.outData.emit(data)
  }

  onSubmit(data:{name:string, age:number, title:string}){
    console.log(data);
  }

  getSkillsControls() {
    return (this.ReactiveForm.get('skills') as FormArray).controls;
  }

  getUserControls(){
    return (this.ReactiveForm.get('users') as FormArray).controls;
  }

  onSubmitReactive(){
      console.log(this.ReactiveForm.value);
      
  }

  get users(): FormArray{
    return this.ReactiveForm.get('users') as FormArray;
  }

  addUser(){
    // const userArr = this.ReactiveForm.get('users') as FormArray;
    const user = this.fb.group({
      name: [''],
      age: [''],
      dept: ['']
    })
    this.users.push(user)
  }

  removeUser(id:number){
    // const userArr = this.ReactiveForm.get('users') as FormArray;
    this.users.removeAt(id);
  }

  assignDept(id:number){
    const userArr = this.ReactiveForm.get('users') as FormArray;
    let userValues = userArr.value;
    if(userValues[id].age > 23){
      userArr.value[id].dept = "Eligible";
    }else{
      userArr.value[id].dept = "Not Eligible";
    }
    this.users.setValue(userArr.value)
  }

  addSkills(){
    const skillArr = this.ReactiveForm.get('skills') as FormArray;
    const skill = new FormControl('');
    skillArr.push(skill)
  }

  removeSkill(id:number){
    const skillArr = this.ReactiveForm.get('skills') as FormArray;
    skillArr.removeAt(id)
  }
  resetFrom(){
    this.ReactiveForm.reset();
  }
}
