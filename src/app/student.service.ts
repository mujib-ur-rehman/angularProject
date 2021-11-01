import { Injectable, OnInit } from '@angular/core';
import { Studentslist } from './studentslist';
// import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public students: any[] = [];
  constructor() {}
  createstudents(data: any) {
    this.students.push(data);
    // console.warn(this.students);
    // console.warn(this.getdata());
  }
  getdata() {
    return this.students;
  }
  setdata(data: any[] = []) {
    this.students.concat(data);
    console.warn(this.students);
  }
}
