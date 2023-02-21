import { createSlice } from '@reduxjs/toolkit';

import { UtilsState } from './types';

const initialState: UtilsState = {
  toast: null,
  isDescendingSort: true,
  searchString: '',
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
    setSortType: (state) => {
      state.isDescendingSort = !state.isDescendingSort;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
});
export const { setToast, hideToast, setSortType, setSearchString } = utilsSlice.actions;
export const utilsReducer = utilsSlice.reducer;
