import { FC, useMemo } from 'react';
import { ViewVariant } from 'types/enum';
import { FullBookDTO } from 'types/types';

import { BookCard } from '../book-card';

import { ListView, WindowView } from './books-list.style';

type BooksListProps = {
  books: FullBookDTO[];
  view: ViewVariant;
};

export const BookList: FC<BooksListProps> = ({ books, view }) => {
  const ViewContainer = useMemo(() => (view === ViewVariant.window ? WindowView : ListView), [view]);

  return (
    <ViewContainer className={view}>
      {books.map((book: FullBookDTO) => (
        <BookCard key={book.id} view={view} book={book} />
      ))}
    </ViewContainer>
  );
};
