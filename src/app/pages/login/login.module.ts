import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, LoginRoutingModule, NgbModule, FormsModule],
})
export class LoginModule {}
