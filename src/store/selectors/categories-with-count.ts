import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { CategoriesDTO, MainBookDTO } from 'types/types';

const selectBooks = (state: RootState) => state.books.books;

const selectCategories = (state: RootState) => state.categories.categories;

const getFiltredBooks = (books: MainBookDTO[], category: CategoriesDTO) =>
  books.filter((book) => book.categories?.includes(category.name)).length;

export const selectBooksInCategoryWithCount = createSelector([selectCategories, selectBooks], (categories, books) => {
  if (!categories || !books) return null;

  const categoryWithCount = categories.map((category) => ({
    ...category,
    count: getFiltredBooks(books, category),
  }));

  return categoryWithCount;
});
