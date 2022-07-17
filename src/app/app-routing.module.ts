import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashboardComponent } from './core/maindashboard/maindashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MaindashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.router').then((route) => route.AUTH_ROUTES),
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
