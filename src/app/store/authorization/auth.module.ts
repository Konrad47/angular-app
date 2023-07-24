import { LoggedUser } from 'src/app/core/login/shared/authorization.model';

export interface AuthStateInterface {
  isLoading: boolean;
  loggedUser: LoggedUser;
  error: string | null;
}
