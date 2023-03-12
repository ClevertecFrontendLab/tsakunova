import { createSlice } from '@reduxjs/toolkit';

import { registrationRequest } from './registration-actions';
import { RegistrationState } from './types';

const initialState: RegistrationState = {
  user: null,
  isLoading: false,
  isError: false,
  is400Status: false,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    resetRegistration: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.is400Status = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.is400Status = false;
    });
    builder.addCase(registrationRequest.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.is400Status = false;
    });
    builder.addCase(registrationRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.is400Status = action.payload === 400;
    });
  },
});

export const { resetRegistration } = registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;
