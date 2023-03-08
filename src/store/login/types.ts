import { UserAPI } from 'types/types';

export type LoginState = {
  user: UserAPI | null;
  isLoading: boolean;
  isError: boolean;
};
