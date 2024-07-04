import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { User } from 'src/app/rxjs-serise/user'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }



  users = [
    {
      id: 1, 
      name: "Mohit",
      job: {
        title: "frontend Developer",
      },
      gender: "Male"
    },
    {
      id: 2, 
      name: "Vijay", 
      job: {
        title: "Backend Developer",
      },
      gender: "Male"
    },
    {
      id: 3, 
      name: "Sanjana", 
      job: {
        title: "Ui Developer",
      },
      gender: "Female"
    },
    {
      id: 4, 
      name: "Shubham", 
      job: {
        title: "Java Developer",
      },
      gender: "Male"
    },
    {
      id: 5, 
      name: "arya", 
      job: {
        title: "Javascript Developer",
      },
      gender: "Female"
    },
  ];

  data!: User[];
  data1!: User[];
  data2!: User[];

  ngOnInit(): void {

    const source = from(this.users);


    source.pipe(filter(data => data.name.length === 5), toArray())
      .subscribe(res => {
        console.log(res);
        this.data = res
      })

    //Ex-2

    source.pipe(filter(data => data.id <= 3), toArray())
      .subscribe(res => {
        console.log(res);
        this.data1 = res
      })

    //Ex-2

    source.pipe(filter(data => data.gender === "Male"), toArray())
      .subscribe(res => {
        console.log(res);
        this.data2 = res
      })
  }

}
