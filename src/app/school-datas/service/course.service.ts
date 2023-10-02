import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  //addcourse

  addCourse(body: any) {
    return this.http.post(
      'https://courseserver-rk6z.onrender.com/courseadmin/addcourse',
      body
    );
  }

  //get course

  getCourse() {
    return this.http.get(
      'https://courseserver-rk6z.onrender.com/courseadmin/getcourse'
    );
  }

  //post enquiry details
  postEnquiry(body: any) {
    return this.http.post(
      'https://courseserver-rk6z.onrender.com/courseadmin/postenquiry',
      body
    );
  }

  loginApi(username: any, password: any) {
    const bodyData = {
      username,
      password,
    };
    return this.http.post(
      'https://courseserver-rk6z.onrender.com/courseadmin/login',
      bodyData
    );
  }

  //get enquirydata
  getEnquiry() {
    return this.http.get(
      'https://courseserver-rk6z.onrender.com/courseadmin/getenquiry'
    );
  }

  //register
  // method for sign up
  signupApi(body: any) {
    //namukk nammale body create cheyyanm enth data ano BE send aakunnath enn
    // const bodyData = {
    //   //enthano nammal BE koduthe same variable thanne use aakanam
    //   //evide nammale key(BE variable) and value(FE variable) same name koduthath kond direct aayit thazhe kodutha pole kodukka

    //   username,
    //   password,
    //   role,
    //   email,
    // };
    //nammkk ee data  vere function akath use cheyyandath kond return keyword use aakanam
    return this.http.post(
      'https://courseserver-rk6z.onrender.com/courseadmin/register',
      body
    );
  }

  //for authguardfirst we need to understand we logged in or not for that we are
  //creaating a method here
}
