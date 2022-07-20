import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: MaindashboardComponent,
    data: { state: 'dashboard' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingRoutingModule {}
