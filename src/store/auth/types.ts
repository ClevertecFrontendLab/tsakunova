import { UserAPI } from 'types/types';

export type RegistrationState = {
  user: UserAPI | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
};
