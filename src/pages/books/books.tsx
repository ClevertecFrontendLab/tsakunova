import { FC, useCallback, useState } from 'react';
import { useOnMount } from 'hooks/use-on-mount';
import { ViewVariant } from 'types/enum';
import { FullBookDTO } from 'types/types';

import { BookList } from './components/books-list';
import { FilterList } from './components/filter-list/filter-list';
import { Container, HomeContainer } from './books.style';
import { getBooksList } from './utils';

export const Books: FC = () => {
  const [booksList, setBooksList] = useState<FullBookDTO[] | undefined>([]);
  const [activeView, setActiveView] = useState<ViewVariant>(ViewVariant.window);

  useOnMount(async () => {
    const books = await getBooksList();

    setBooksList(books);
  });

  const activeViewHandler = useCallback((type: ViewVariant) => {
    setActiveView(type);
  }, []);

  return (
    <Container>
      <HomeContainer>
        <FilterList onViewClick={activeViewHandler} typeView={activeView} />
        <BookList books={booksList!} view={activeView} />
      </HomeContainer>
    </Container>
  );
};
