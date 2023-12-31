import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/school-datas/service/course.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private ps: CourseService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  loginData = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });

  login() {}
}
