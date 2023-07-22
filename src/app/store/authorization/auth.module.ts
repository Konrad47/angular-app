import { LoggedUser } from 'src/app/models/authorization';

export interface AuthStateInterface {
  isLoading: boolean;
  loggedUser: LoggedUser;
  error: string | null;
}
