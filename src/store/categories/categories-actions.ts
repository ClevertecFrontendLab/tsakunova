import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from 'store/const';
import { CategoriesDTO } from 'types/types';

export const fetchCategories = createAsyncThunk(
  '/categories',
  async () => (await axios.get<CategoriesDTO[]>(`${baseURL}categories`)).data
);
