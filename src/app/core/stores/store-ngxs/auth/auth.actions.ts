import { User } from 'src/app/core/models/authorization.model';

export class Login {
  static readonly type = '[Auth] Login';

  constructor(public user: User) {}
}
