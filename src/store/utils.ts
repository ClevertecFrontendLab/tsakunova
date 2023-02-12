import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCategoriesError = (state: RootState) => state.categories.isError;
const selectBooksError = (state: RootState) => state.books.isError;
const selectCurrentBookError = (state: RootState) => state.currentBook.isError;

export const selectErrors = createSelector(
  [selectCategoriesError, selectBooksError, selectCurrentBookError],
  (categories, books, currentBook) => categories || books || currentBook
);

const selectCategoriesLoading = (state: RootState) => state.categories.isLoading;
const selectBooksLoading = (state: RootState) => state.books.isLoading;
const selectCurrentBookLoading = (state: RootState) => state.currentBook.isLoading;

export const selectLoading = createSelector(
  [selectCategoriesLoading, selectBooksLoading, selectCurrentBookLoading],
  (categories, books, currentBook) => categories || books || currentBook
);
