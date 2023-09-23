import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private ps: CourseService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  loginData = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[A-za-z]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });

  signupData = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[A-za-z]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    email: ['', [Validators.required]],
    role: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });

  login() {
    let path = this.loginData.value;
    let username = path.username;
    let password = path.password;
    this.ps.loginApi(username, password).subscribe(
      (data: any) => {
        localStorage.setItem('admin', 'admin');
        alert('login success fully');

        this.route.navigateByUrl('').then(() => {
          window.location.reload();
        });
      },
      (response) => {
        alert(response.error);
      }
    );
  }

  //signup

  signup() {
    console.log(this.signupData.value);
    let path = this.signupData.value;
    //ee variable name namukk eshtamullath kodukkam
    let bodyData = {
      username: path.username,
      email: path.email,
      password: path.password,
      role: path.role,
    };

    if (this.signupData.valid) {
      this.ps.signupApi(bodyData).subscribe(
        (res: any) => {
          console.log(res);
          alert(`${res.username} registered..`);
          this.route.navigateByUrl('');
          this.signupData.reset();
        },
        (res) => {
          alert(`${res.error}`);
        }
      );
    } else {
      // this.acnoMatch = true;
      alert('invalid form');
    }
  }
}
