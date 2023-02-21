import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCategoriesLoading = (state: RootState) => state.categories.isLoading;
const selectBooksLoading = (state: RootState) => state.books.isLoading;
const selectCurrentBookLoading = (state: RootState) => state.currentBook.isLoading;

export const selectLoading = createSelector(
  [selectCategoriesLoading, selectBooksLoading, selectCurrentBookLoading],
  (categories, books, currentBook) => categories || books || currentBook
);
