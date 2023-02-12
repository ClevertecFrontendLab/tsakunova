import { createSlice } from '@reduxjs/toolkit';
import { FullBookDTO } from 'types/types';

import { fetchCurrentBook } from './current-book-actions';

type CurrentBookState = {
  currentBook: FullBookDTO;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CurrentBookState = {
  currentBook: {} as FullBookDTO,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    // setBooks: (state, action: PayloadAction<MainBookDTO[]>) => {
    //   state.books = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentBook.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCurrentBook.fulfilled, (state, action) => {
      state.currentBook = action.payload.data;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchCurrentBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = 'currErr';
    });
  },
});

export const currentBookReducer = currentBookSlice.reducer;
