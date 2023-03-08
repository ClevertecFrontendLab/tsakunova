import { createSlice } from '@reduxjs/toolkit';

import { loginRequest } from './login-actions';
import { LoginState } from './types';

const getInitialValue = () => {
  const storageUserData = localStorage.getItem('user');

  if (storageUserData !== null) {
    return JSON.parse(storageUserData);
  }

  return null;
};

const initialState: LoginState = {
  user: getInitialValue(),
  isLoading: false,
  isError: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isError = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(loginRequest.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
