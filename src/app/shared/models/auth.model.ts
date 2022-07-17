export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

// export interface ErrorResponse {
//   error: {
//     errors: [
//       {
//         domain: string;
//         reason: string;
//         message: string;
//       }
//     ];
//     code: number;
//     message: string;
//   };
// }

// export type Response<T> = {
//   [P in keyof T extends AuthResponse ? 'succsessData' : 'errorData']: T;
// };

export interface AuthRequest {
  email: string | null | undefined;
  password: string | null | undefined;
  returnSecureToken: boolean;
}

export interface GoogleAuthRequest {
  requestUri: string;
  postBody: string;
  returnSecureToken: boolean;
  returnIdpCredential: boolean;
}
