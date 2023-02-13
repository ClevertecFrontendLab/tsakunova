import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from 'store/const';
import { CategoriesDTO } from 'types/types';

export const fetchCategories = createAsyncThunk(
  '/categories',
  async () => (await axios.get<CategoriesDTO[]>(`${BASE_API_URL}categories`)).data
);
