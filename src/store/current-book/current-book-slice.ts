import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrentBook } from './current-book-actions';
import { CurrentBookState } from './types';

const initialState: CurrentBookState = {
  currentBook: null,
  isLoading: false,
  isError: false,
};

export const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    resetBook: (state) => {
      state.currentBook = null;
    },
    hideBookToast: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentBook.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCurrentBook.fulfilled, (state, action) => {
      state.currentBook = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchCurrentBook.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetBook, hideBookToast } = currentBookSlice.actions;
export const currentBookReducer = currentBookSlice.reducer;
