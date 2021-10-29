import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Studentslist } from '../studentslist';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
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
    this.data.push(this.profileForm.value);
    console.warn(this.data);
  }

  ngOnInit(): void {}
}
