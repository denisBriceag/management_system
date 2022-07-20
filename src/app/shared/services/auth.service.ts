import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { AuthRequest, AuthResponse } from '../models/auth.model';
import { Observable } from 'rxjs';

export enum Api {
  EMAIL_PASSWORD = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0GI9StpCTwZIqZKXFm_w9ogA1QMB4pG8',
  GOOGLE = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyC0GI9StpCTwZIqZKXFm_w9ogA1QMB4pG8',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public authenticate(userData: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(Api.EMAIL_PASSWORD, userData);
  }

  // public authenticateWithGoogle() {
  //   return this.angularFireAuthService.signInWithPopup(provider);
  // }

  // async googleSignin() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   const credential = await this.afAuth.signInWithPopup(provider);
  //   return this.updateUserData(credential.user);
  // }

  public register() {}
}
