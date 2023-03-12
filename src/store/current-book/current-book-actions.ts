import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { FullBookDTO } from 'types/types';

export const fetchCurrentBook = createAsyncThunk(
  '/currentBook',
  async (id: string) => (await axiosInstance.get<FullBookDTO>(`${ApiPath.books}/${id}`)).data
);
