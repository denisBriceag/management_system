import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';

@NgModule({
  declarations: [MaindashboardComponent],
  imports: [CommonModule],
  exports: [MaindashboardComponent],
})
export class CoreModule {}
