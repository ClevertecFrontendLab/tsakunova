import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { UserAPI } from 'types/types';

export const loginRequest = createAsyncThunk(ApiPath.auth, async (user: UserAPI) => {
  const { data } = await axiosInstance.post(ApiPath.auth, { ...user });

  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', data.jwt);

  return data;
});
