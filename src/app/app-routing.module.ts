import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./core/core-routing-routing.module').then((module) => {
        console.log('dashboard router loaded');
        return module.CoreRoutingRoutingModule;
      }),
    canActivate: [AuthGuard],
    // data: { state: 'dashboard' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((module) => {
        console.log('loaded');
        return module.AuthRoutingModule;
      }),
    // data: { state: 'login' },
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
