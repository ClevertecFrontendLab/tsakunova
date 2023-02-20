import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { selectBooksByRating } from './books-with-sort-selector';

const selectSearchString = (state: RootState) => state.utils.searchString;

export const selectBooksWithSearchFilter = createSelector(
  [selectBooksByRating, selectSearchString],
  (books, searchString) => {
    if (!searchString) return books;

    return [...books].filter((book) => book.title.toLocaleLowerCase().includes(searchString));
  }
);
