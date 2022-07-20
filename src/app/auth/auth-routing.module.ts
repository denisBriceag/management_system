import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: { state: 'redirectToDashBoard' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login' },
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
    data: { state: 'recovery' },
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { state: 'registration' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
