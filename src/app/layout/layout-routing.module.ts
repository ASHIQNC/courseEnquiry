import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

// Create a routes Array
const routes: Routes = [];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
