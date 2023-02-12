import { createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'types/enum';
import { FullBookDTO } from 'types/types';

import { fetchCurrentBook } from './current-book-actions';

type CurrentBookState = {
  currentBook: FullBookDTO | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CurrentBookState = {
  currentBook: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    resetBook: (state) => {
      state.currentBook = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentBook.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCurrentBook.fulfilled, (state, action) => {
      state.currentBook = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchCurrentBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = ErrorMessages.main;
    });
  },
});

export const { resetBook } = currentBookSlice.actions;
export const currentBookReducer = currentBookSlice.reducer;
