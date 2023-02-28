import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'components/layout';
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
      {
        path: `/${RouteNames.signOut}`,
        element: <Books />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={routes} />;
