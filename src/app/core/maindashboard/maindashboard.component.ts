import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Login } from 'src/app/auth/state/auth.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
})
export class MaindashboardComponent implements OnInit {
  constructor(private actions: Actions, private router: Router) {}

  ngOnInit(): void {
    this.actions
      .pipe(untilDestroyed(this), ofActionDispatched(Login))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
