
export enum AuthStatus {
  LOGGED_OUT,
  LOGGED_IN_USER,
  LOGGED_IN_VISITOR,
}

export interface User {
  username: string;
  institution: string;
}
