import { createSlice } from '@reduxjs/toolkit';

import { fetchBooks } from './books-actions';
import { BooksState } from './types';

const initialState: BooksState = {
  books: null,
  isLoading: false,
  isError: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetBooks: (state) => {
      state.books = null;
    },
    hideBooksToast: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const { resetBooks, hideBooksToast } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
