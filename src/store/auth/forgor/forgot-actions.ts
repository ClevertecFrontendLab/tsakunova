import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { ResetPasswordData } from 'types/types';

export const forgotRequest = createAsyncThunk(
  ApiPath.forgotPass,
  async (email: string) => (await axiosInstance.post(ApiPath.forgotPass, email)).data
);

export const addNewPasswordRequest = createAsyncThunk(
  ApiPath.resetPass,
  async (data: ResetPasswordData) => (await axiosInstance.post(ApiPath.resetPass, data)).data
);
