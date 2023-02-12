import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from 'store/const';
import { MainBookDTO } from 'types/types';

export const fetchBooks = createAsyncThunk('/books', async () => axios.get<MainBookDTO[]>(`${baseURL}books`));
