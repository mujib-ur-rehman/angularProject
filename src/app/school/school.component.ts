import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
// import { AppModule } from '../app.module';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  constructor(private router: Router, private studentservice: StudentService) {}

  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  data: any[] = [];
  data2: any[] = [];

  navigationDetails: string[] = ['/dashboard'];
  onclick(): void {
    this.router.navigate(this.navigationDetails);
    this.setdata();
    console.warn(this.data2);
  }

  createStudent() {
    this.studentservice.createstudents(this.profileForm.value);
    this.getdata();
  }

  getdata() {
    this.data = this.studentservice.getdata();
  }
  setdata() {
    this.data2.concat(this.data);
  }
  ngOnInit(): void {}
}
