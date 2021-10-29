import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollegeComponent } from './college/college.component';
import { SchoolComponent } from './school/school.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'university',
    component: UniversityComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
