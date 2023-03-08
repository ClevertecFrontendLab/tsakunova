import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const selectCategoriesLoading = (state: RootState) => state.categories.isLoading;
const selectBooksLoading = (state: RootState) => state.books.isLoading;
const selectCurrentBookLoading = (state: RootState) => state.currentBook.isLoading;
const selectLoginLoading = (state: RootState) => state.login.isLoading;
const selectRegistrationLoading = (state: RootState) => state.registration.isLoading;

export const selectLoading = createSelector(
  [
    selectCategoriesLoading,
    selectBooksLoading,
    selectCurrentBookLoading,
    selectLoginLoading,
    selectRegistrationLoading,
  ],
  (categories, books, currentBook, login, registration) => categories || books || currentBook || login || registration
);
