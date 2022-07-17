import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  Actions,
  ofActionCanceled,
  ofActionDispatched,
  ofActionSuccessful,
  Store,
} from '@ngxs/store';
import { AuthRequest, Login, LoginWithGoogle } from '../state/auth.actions';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userAuthForm = this.fb.group({
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9.! #$%&`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$'
        ),
      ],
    ],
    password: [
      null,
      [Validators.required, Validators.minLength(4), Validators.maxLength(30)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    console.log(this.userAuthForm.value);
    this.actions$
      .pipe(untilDestroyed(this), ofActionSuccessful(Login))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  public logIn(): void {
    const req: AuthRequest = {
      email: this.userAuthForm.value.email,
      password: this.userAuthForm.value.password,
      returnSecureToken: true,
    };
    this.store.dispatch(new Login(req));
  }

  public authenticateGoogle(): void {
    this.store.dispatch(new LoginWithGoogle());
  }
}
