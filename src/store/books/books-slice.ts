import { createSlice } from '@reduxjs/toolkit';
import { MainBookDTO } from 'types/types';

import { fetchBooks } from './books-actions';

type BooksState = {
  books: MainBookDTO[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // setBooks: (state, action: PayloadAction<MainBookDTO[]>) => {
    //   state.books = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.data;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = 'Mess';
    });
  },
});

export const booksReducer = booksSlice.reducer;
