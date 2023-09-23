import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { LogincomponentComponent } from './logincomponent/logincomponent.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    // LogincomponentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
