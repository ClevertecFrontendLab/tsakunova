import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from 'store/const';
import { FullBookDTO } from 'types/types';

export const fetchCurrentBook = createAsyncThunk(
  '/currentBook',
  async (id: string) => (await axios.get<FullBookDTO>(`${BASE_API_URL}books/${id}`)).data
);
