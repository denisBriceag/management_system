export interface AuthRequest {
  email: string | null | undefined;
  password: string | null | undefined;
  returnSecureToken: true;
}

export class Login {
  static readonly type = '[Auth] login into system';
  constructor(public userData: AuthRequest) {}
}

export class LoginWithGoogle {
  static readonly type = '[Auth] login into system WITH GOOGLE';
}
