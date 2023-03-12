import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { RegistrationUserData } from 'types/types';

export const registrationRequest = createAsyncThunk(
  ApiPath.registration,
  async (user: RegistrationUserData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(ApiPath.registration, { ...user });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.jwt);

      return data;
    } catch (err) {
      const {
        response: { data, status },
      } = err as unknown as {
        response: { data: string; status: number };
      };

      return rejectWithValue(status);
    }
  }
);
