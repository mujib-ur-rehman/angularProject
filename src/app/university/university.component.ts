import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Studentslist } from '../studentslist';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  constructor(private router: Router, private studentservice: StudentService) {}

  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  navigationDetails: string[] = ['/dashboard'];
  onclick(): void {
    this.router.navigate(this.navigationDetails);
  }
  data: any;

  createStudent() {
    // this.profileForm.value;
    this.studentservice.createstudents(this.profileForm.value);
  }
  getdata() {
    this.data = this.studentservice.getdata();
  }
  ngOnInit(): void {
    this.getdata();
  }
}
