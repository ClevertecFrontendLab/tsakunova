import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiPath, axiosInstance } from 'api/api';
import { CategoriesDTO } from 'types/types';

export const fetchCategories = createAsyncThunk(
  ApiPath.categories,
  async () => (await axiosInstance.get<CategoriesDTO[]>(ApiPath.categories)).data
);
