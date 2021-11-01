import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private studentservice: StudentService) {}
  students: any[] = [];
  getstudents() {
    this.students = this.studentservice.getdata();
  }
  ngOnInit(): void {
    this.getstudents();
    console.warn(this.students);
  }
}
