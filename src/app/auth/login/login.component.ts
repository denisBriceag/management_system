import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngxs/store';
import { AUTH_ROUTES } from '../auth.router';
import { AuthRequest, Login, LoginWithGoogle } from '../state/auth.actions';

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
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    console.log(this.userAuthForm.value);
  }

  public logIn() {
    const req: AuthRequest = {
      email: this.userAuthForm.value.email,
      password: this.userAuthForm.value.password,
      returnSecureToken: true,
    };
    this.store.dispatch(new Login(req));
  }

  public authenticateGoogle() {
    this.store.dispatch(new LoginWithGoogle());
  }
}
