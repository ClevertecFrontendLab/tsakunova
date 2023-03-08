import { createSlice } from '@reduxjs/toolkit';

import { registrationRequest } from './registration-actions';
import { RegistrationState } from './types';

const initialState: RegistrationState = {
  user: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(registrationRequest.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(registrationRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message || '';
    });
  },
});

export const { reset } = registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;
