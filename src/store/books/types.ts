import { MainBookDTO } from 'types/types';

export type BooksState = {
  books: MainBookDTO[] | null;
  isLoading: boolean;
  isError: boolean;
};
