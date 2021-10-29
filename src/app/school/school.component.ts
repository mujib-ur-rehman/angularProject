import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
// import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  constructor(private router: Router) {}

  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  navigationDetails: string[] = ['/dashboard'];
  onclick(): void {
    this.router.navigate(this.navigationDetails);
  }

  data: any = [];

  createStudent() {
    this.data = this.profileForm.value;
    AppComponent.studentservice.createstudents(this.data);

    // console.warn(this.data);
  }

  ngOnInit(): void {}
}