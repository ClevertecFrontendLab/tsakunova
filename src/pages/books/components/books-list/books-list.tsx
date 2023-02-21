import { FC } from 'react';
import { ViewVariant } from 'types/enum';
import { MainBookDTO } from 'types/types';

import { BookCard } from '../book-card';

import { ListView, WindowView } from './books-list.style';

type BooksListProps = {
  books: MainBookDTO[];
  view: ViewVariant;
};

export const BookList: FC<BooksListProps> = ({ books, view }) => {
  const ViewContainer = view === ViewVariant.window ? WindowView : ListView;

  return (
    <ViewContainer className={view}>
      {books.map((book: MainBookDTO) => (
        <BookCard key={book.id} view={view} book={book} />
      ))}
    </ViewContainer>
  );
};
