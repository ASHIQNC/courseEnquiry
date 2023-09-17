import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
    path: 'school',
    loadChildren: () =>
      import('./school-datas/school-datas.module').then(
        (m) => m.SchoolDatasModule
      ),
  },
  // arenkilum empty path request chyunnundenkil "products" enna path lot redirect cheyyanm
  { path: '', redirectTo: 'school', pathMatch: 'full' },
  //{ path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
