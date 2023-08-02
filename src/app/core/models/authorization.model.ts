export interface User {
  username: string;
  password: string;
  expiresInMins: number;
}

export interface LoggedUser {
  id?: number;
  username?: string;
  email?: string;
  firstName: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token: string;
}
