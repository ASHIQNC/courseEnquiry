import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  //addcourse

  addCourse(body: any) {
    return this.http.post('http://localhost:3000/courseadmin/addcourse', body);
  }

  //get course

  getCourse() {
    return this.http.get('http://localhost:3000/courseadmin/getcourse');
  }
}
