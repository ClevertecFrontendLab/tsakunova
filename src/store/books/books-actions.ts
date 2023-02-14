import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from 'store/const';
import { MainBookDTO } from 'types/types';

export const fetchBooks = createAsyncThunk(
  '/books',
  async () => (await axios.get<MainBookDTO[]>(`${BASE_API_URL}books`)).data
);
