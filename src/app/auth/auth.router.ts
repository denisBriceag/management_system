import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegistrationComponent } from './registration/registration.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];
