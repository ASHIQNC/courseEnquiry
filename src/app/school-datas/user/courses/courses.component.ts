import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  allCourse: any = [];
  payButtonOff: boolean = true;
  //nammal type chyunna data ee variable aanu store aaakuka
  searchTerm: any = '';

  constructor(private ps: CourseService) {}
  ngOnInit(): void {
    this.ps.getCourse().subscribe((data) => {
      // console.log('data', data);
      this.allCourse = data;
      console.log(this.allCourse);
    });
    if (localStorage.getItem('admin')) {
      this.payButtonOff = !this.payButtonOff;
    }
  }
}
