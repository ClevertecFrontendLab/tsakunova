import { configureStore } from '@reduxjs/toolkit';

import { forgotReducer } from './auth/forgor/forgot-slice';
import { registrationReducer } from './auth/registration/registration-slice';
import { booksReducer } from './books/books-slice';
import { categoriesReducer } from './categories/categories-slice';
import { currentBookReducer } from './current-book/current-book-slice';
import { loginReducer } from './login/login-slice';
import { utilsReducer } from './utils/utils-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    currentBook: currentBookReducer,
    utils: utilsReducer,
    login: loginReducer,
    registration: registrationReducer,
    forgot: forgotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
