import { LoggedUser } from 'src/app/core/models/authorization.model';

export interface AuthStateInterface {
  isLoading: boolean;
  loggedUser: LoggedUser;
  error: string | null;
}
