import { Component, OnInit } from '@angular/core';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Login } from 'src/app/auth/state/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
})
export class MaindashboardComponent implements OnInit {
  constructor(private actions: Actions, private router: Router) {}

  ngOnInit(): void {
    this.actions.pipe(ofActionDispatched(Login)).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
