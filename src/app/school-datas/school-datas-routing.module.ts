import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolDatasComponent } from './school-datas.component';
import { HomeComponent } from './user/home/home.component';
import { CoursesComponent } from './user/courses/courses.component';
import { PlacementComponent } from './user/placement/placement.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { AddCoursesComponent } from './admin/add-courses/add-courses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'course',
    component: CoursesComponent,
  },
  { path: 'achievement', component: PlacementComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'addcourse',
    component: AddCoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolDatasRoutingModule {}
