import { createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'types/enum';
import { CategoriesDTO } from 'types/types';

import { fetchCategories } from './categories-actions';

type CategoriesState = {
  categories: CategoriesDTO[] | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CategoriesState = {
  categories: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: (state) => {
      state.categories = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
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

export const { resetCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
