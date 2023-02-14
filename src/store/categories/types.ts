import { CategoriesDTO } from 'types/types';

export type CategoriesState = {
  categories: CategoriesDTO[] | null;
  isLoading: boolean;
  isError: boolean;
};
