import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegistrationComponent, RecoveryComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
  ],
  exports: [LoginComponent, RegistrationComponent, RecoveryComponent],
})
export class AuthModule {}
