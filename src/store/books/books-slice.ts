import { createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'types/enum';
import { MainBookDTO } from 'types/types';

import { fetchBooks } from './books-actions';

type BooksState = {
  books: MainBookDTO[] | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
};

const initialState: BooksState = {
  books: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetBooks: (state) => {
      state.books = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = ErrorMessages.main;
    });
  },
});
export const { resetBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
