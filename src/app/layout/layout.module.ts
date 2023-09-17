import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}