import { createSlice } from '@reduxjs/toolkit';

import { addNewPasswordRequest, forgotRequest } from './forgot-actions';
import { ForgotState } from './types';

const initialState: ForgotState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const forgotSlice = createSlice({
  name: 'forgot',
  initialState,
  reducers: {
    resetPassword: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(forgotRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(forgotRequest.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(forgotRequest.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(addNewPasswordRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(addNewPasswordRequest.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(addNewPasswordRequest.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
  },
});

export const { resetPassword } = forgotSlice.actions;

export const forgotReducer = forgotSlice.reducer;
