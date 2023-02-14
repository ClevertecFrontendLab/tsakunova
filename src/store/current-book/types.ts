import { FullBookDTO } from 'types/types';

export type CurrentBookState = {
  currentBook: FullBookDTO | null;
  isLoading: boolean;
  isError: boolean;
};
