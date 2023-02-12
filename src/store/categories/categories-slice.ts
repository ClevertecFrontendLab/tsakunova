import { createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'types/enum';
import { CategoriesDTO } from 'types/types';

import { fetchCategories } from './categories-actions';

type CategoriesState = {
  categories: CategoriesDTO[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // setBooks: (state, action: PayloadAction<MainBookDTO[]>) => {
    //   state.books = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload.data;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = ErrorMessages.main;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
