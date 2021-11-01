import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
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
    this.studentservice.createstudents(this.profileForm.value);
    this.getdata();
  }
  getdata() {
    this.data = this.studentservice.getdata();
  }
  ngOnInit(): void {
    this.getdata();
  }
}
