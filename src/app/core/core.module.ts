import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingRoutingModule } from './core-routing-routing.module';

@NgModule({
  declarations: [MaindashboardComponent],
  imports: [CommonModule, RouterModule, CoreRoutingRoutingModule],
  exports: [MaindashboardComponent],
})
export class CoreModule {}
