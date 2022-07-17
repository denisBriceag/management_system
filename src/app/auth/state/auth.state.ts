import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GoogleAuthProvider } from 'firebase/auth';
import { catchError, tap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Login, LoginWithGoogle } from './auth.actions';

// export interface TokenState {
//   token: string | null;
// }

@State<string | null>({
  name: 'token',
  defaults: null,
})
@Injectable()
export class AuthState {
  constructor(
    private authService: AuthService,
    private angularFireAuthService: AngularFireAuth,
    private router: Router
  ) {}

  @Selector()
  static isAuthenticated(state: string): boolean {
    return !!state;
  }

  @Action(Login)
  login(ctx: StateContext<string | null>, action: Login) {
    return this.authService
      .authenticate({
        email: action.userData.email,
        password: action.userData.password,
        returnSecureToken: action.userData.returnSecureToken,
      })
      .pipe(
        tap((res) => {
          console.log(res.idToken);

          ctx.setState(res.idToken);
          console.log(ctx.getState());
        }),
        catchError((err) => {
          throw new Error(err.error.error.message);
        })
      );
  }

  @Action(LoginWithGoogle)
  async loginWithGoogle(ctx: StateContext<any>) {
    const provider = new GoogleAuthProvider();
    const credentials = await this.angularFireAuthService.signInWithPopup(
      provider
    );
  }
}
