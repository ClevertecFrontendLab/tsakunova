import { configureStore } from '@reduxjs/toolkit';

import { booksReducer } from './books/books-slice';
import { categoriesReducer } from './categories/categories-slice';
import { currentBookReducer } from './current-book/current-book-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    currentBook: currentBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
