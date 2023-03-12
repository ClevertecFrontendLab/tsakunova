import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { MainBookDTO } from 'types/types';

export const fetchBooks = createAsyncThunk(
  ApiPath.books,
  async () => (await axiosInstance.get<MainBookDTO[]>(ApiPath.books)).data
);
