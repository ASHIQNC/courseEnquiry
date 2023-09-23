import { CanActivateFn, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let loggedIn = localStorage.getItem('admin');
  let router = inject(Router);
  if (loggedIn !== 'admin') {
    alert('not autheticated user !! please login');
    router.navigateByUrl('school/login');
    return false;
  }
  return true;
};
