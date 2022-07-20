import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
})
export class MaindashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Main Dashboard coponent');
  }
}
