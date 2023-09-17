import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolDatasRoutingModule } from './school-datas-routing.module';
import { SchoolDatasComponent } from './school-datas.component';
import { HomeComponent } from './user/home/home.component';
import { PlacementComponent } from './user/placement/placement.component';
import { PlacementsComponent } from './user/placements/placements.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { CoursesComponent } from './user/courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AddCoursesComponent } from './admin/add-courses/add-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursepipePipe } from './coursePipe/coursepipe.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SchoolDatasComponent,
    HomeComponent,
    PlacementComponent,
    PlacementsComponent,
    AboutUsComponent,
    ContactUsComponent,
    CoursesComponent,
    AddCoursesComponent,
    CoursepipePipe,
  ],
  imports: [
    CommonModule,
    SchoolDatasRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class SchoolDatasModule {}
