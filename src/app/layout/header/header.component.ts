import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  adminlogin: boolean = false;
  logout: boolean = false;
  imgeoff: boolean = true;
  constructor(private route: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('admin')) {
      this.adminlogin = !this.adminlogin;
      this.logout = !this.logout;
      this.imgeoff = !this.imgeoff;
      console.log(this.adminlogin);
    }
  }

  logoutData() {
    localStorage.removeItem('admin');
    alert('logout successfully');
    this.adminlogin = true;
    this.route.navigateByUrl('').then(() => {
      window.location.reload();
    });
    //  window.location.reload();
  }
}
