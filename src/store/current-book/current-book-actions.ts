import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import axios from 'axios';
import { BASE_API_URL } from 'store/const';
import { FullBookDTO } from 'types/types';

export const fetchCurrentBook = createAsyncThunk(
  '/currentBook',
  async (id: string) => (await axiosInstance.get<FullBookDTO>(`${ApiPath.books}/${id}`)).data
);
