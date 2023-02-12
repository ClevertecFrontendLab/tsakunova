import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from 'store/const';
import { FullBookDTO } from 'types/types';

export const fetchCurrentBook = createAsyncThunk('/currentBook', async (id: number) =>
  axios.get<FullBookDTO>(`${baseURL}books/${id}`)
);
