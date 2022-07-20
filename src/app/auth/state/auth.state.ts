import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GoogleAuthProvider } from 'firebase/auth';
import { catchError, Observable, tap } from 'rxjs';
import { AuthResponse } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Login, LoginWithGoogle } from './auth.actions';

@State<string | null>({
  name: 'token',
  defaults: null,
})
@Injectable()
export class AuthState {
  constructor(
    private authService: AuthService,
    private angularFireAuthService: AngularFireAuth
  ) {}

  @Selector()
  public static isAuthenticated(state: string): boolean {
    return !!state;
  }

  @Action(Login)
  public login(
    ctx: StateContext<string | null>,
    action: Login
  ): Observable<AuthResponse> {
    return this.authService
      .authenticate({
        email: action.userData.email,
        password: action.userData.password,
        returnSecureToken: action.userData.returnSecureToken,
      })
      .pipe(
        tap((res) => {
          ctx.setState(res.idToken);
        }),
        catchError((err) => {
          throw new Error(err.error.error.message);
        })
      );
  }

  @Action(LoginWithGoogle)
  public async loginWithGoogle(ctx: StateContext<any>) {
    const provider = new GoogleAuthProvider();
    const credentials = await this.angularFireAuthService.signInWithPopup(
      provider
    );
  }
}
