import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss'],
})
export class AddCoursesComponent implements OnInit {
  //we are creating model for adding form
  //nammal group vechittan model create cheyyandth
  addFormData = this.formbuilder.group({
    image: ['', [Validators.required]],
    coursename: ['', [Validators.required]],
    discription: [''],
    nextbatch: [''],
    duration: [''],
    coursefeesonline: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    coursefeesoffline: [
      '',
      [Validators.required, Validators.pattern('[0-9]+')],
    ],
  });
  constructor(
    private formbuilder: FormBuilder,
    private ps: CourseService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  addCourse() {
    let path = this.addFormData.value;
    //ee variable name namukk eshtamullath kodukkam
    let courseData = {
      image: path.image,
      coursename: path.coursename,
      discription: path.discription,
      nextbatch: path.nextbatch,
      duration: path.duration,
      coursefeesonline: path.coursefeesonline,
      coursefeesoffline: path.coursefeesoffline,
    };
    console.log(courseData);

    this.ps.addCourse(courseData).subscribe((data: any) => {
      console.log('data', data);
      alert('new course added');
      this.addFormData.reset();
      this.route.navigateByUrl('school/course');
    });
  }
}
