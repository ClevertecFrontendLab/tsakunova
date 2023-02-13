import { FC, useCallback, useEffect, useState } from 'react';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useOnMount } from 'hooks/use-on-mount';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchBooks } from 'store/books/books-actions';
import { resetBooks } from 'store/books/books-slice';
import { ViewVariant } from 'types/enum';

import { BookList } from './components/books-list';
import { FilterList } from './components/filter-list/filter-list';
import { Container, HomeContainer } from './books.style';

export const Books: FC = () => {
  const dispatch = useAppDispatch();
  const booksList = useTypedSelector((state) => state.books.books || []);
  const isError = useTypedSelector((state) => state.books.isError);

  useToast(ToastType.negative, ToastMessages.mainError, isError);
  const [activeView, setActiveView] = useState<ViewVariant>(ViewVariant.window);

  useOnMount(async () => {
    dispatch(fetchBooks());
  });

  useEffect((): (() => void) => () => dispatch(resetBooks()), [dispatch]);

  const activeViewHandler = useCallback((type: ViewVariant) => {
    setActiveView(type);
  }, []);

  return (
    <Container>
      <HomeContainer>
        <FilterList onViewClick={activeViewHandler} typeView={activeView} />
        <BookList books={booksList} view={activeView} />
      </HomeContainer>
    </Container>
  );
};
