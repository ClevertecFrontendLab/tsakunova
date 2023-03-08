import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'components/layout';
import { Auth } from 'pages/auth';
import { Authorization } from 'pages/auth/components/authorization';
import { ForgotPassword } from 'pages/auth/components/forgot-password';
import { Registration } from 'pages/auth/components/registration';
import { BookPage } from 'pages/book';
import { Books } from 'pages/books';
import { Profile } from 'pages/profile';
import { ContractList } from 'pages/terms-and-contract/contract-list/contract-list';
import { TermsList } from 'pages/terms-and-contract/terms-list/terms-list';
import { RouteNames } from 'types/enum';

const routes = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Books />,
      },
      {
        path: `/${RouteNames.books}`,
        element: <Books />,
      },
      {
        path: `/${RouteNames.books}/all`,
        element: <Books />,
      },
      {
        path: `/${RouteNames.books}/:category`,
        element: <Books />,
      },
      {
        path: `/${RouteNames.books}/:category/:bookId`,
        element: <BookPage />,
      },
      {
        path: `/${RouteNames.terms}`,
        element: <TermsList />,
      },
      {
        path: `/${RouteNames.contract}`,
        element: <ContractList />,
      },
      {
        path: `/${RouteNames.profile}`,
        element: <Profile />,
      },
    ],
  },
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: `/${RouteNames.registration}`,
        element: <Registration />,
      },
      {
        path: `/${RouteNames.auth}`,
        element: <Authorization />,
      },
      {
        path: `/${RouteNames.forgotPass}`,
        element: <ForgotPassword />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={routes} />;
