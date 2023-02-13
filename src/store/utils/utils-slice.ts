import { createSlice } from '@reduxjs/toolkit';

import { UtilsState } from './types';

const initialState: UtilsState = {
  toast: null,
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
  },
});
export const { setToast, hideToast } = utilsSlice.actions;
export const utilsReducer = utilsSlice.reducer;
