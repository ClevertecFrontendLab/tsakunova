import { createSlice } from '@reduxjs/toolkit';
import { BookCategory } from 'types/enum';

import { fetchCategories } from './categories-actions';
import { CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: null,
  currentCategory: BookCategory.all,
  isLoading: false,
  isError: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: (state) => {
      state.categories = null;
    },
    hideCategoriesToast: (state) => {
      state.isError = false;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetCategories, hideCategoriesToast, setCurrentCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
