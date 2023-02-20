import { BookCategory } from 'types/enum';
import { CategoriesDTO } from 'types/types';

export type CategoriesState = {
  categories: CategoriesDTO[] | null;
  currentCategory: BookCategory;
  isLoading: boolean;
  isError: boolean;
};
