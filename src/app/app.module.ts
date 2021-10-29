import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolComponent } from './school/school.component';
import { UniversityComponent } from './university/university.component';
import { CollegeComponent } from './college/college.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { StudentService } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SchoolComponent,
    UniversityComponent,
    CollegeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // static studentservice = new StudentService();
}
