import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { UserAPI } from 'types/types';

export const registrationRequest = createAsyncThunk(ApiPath.registration, async (user: UserAPI, thunkApi) => {
  try {
    const { data } = await axiosInstance.post(ApiPath.registration, { ...user });

    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.jwt);

    return data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});
