import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { BookCategory } from 'types/enum';

const selectCurrentCategory = (state: RootState) => state.categories.currentCategory;
const selectBooks = (state: RootState) => state.books.books;

const selectBooksInCategory = createSelector([selectCurrentCategory, selectBooks], (currentCategory, books) => {
  if (books) {
    return currentCategory === BookCategory.all
      ? books
      : books?.filter((book) => book.categories?.includes(currentCategory));
  }

  return [];
});

const selectSortType = (state: RootState) => state.utils.isDescendingSort;

const comparator = (a = 0, b = 0, isDescending: boolean) => (isDescending ? b - a : a - b);

export const selectBooksByRating = createSelector([selectBooksInCategory, selectSortType], (books, isDescending) => {
  if (!books) return [];

  return [...books].sort((a, b) => comparator(a.rating, b.rating, isDescending));
});
