import { FC, useCallback, useEffect, useState } from 'react';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useOnMount } from 'hooks/use-on-mount';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchBooks } from 'store/books/books-actions';
import { resetBooks } from 'store/books/books-slice';
import { selectBooksWithSearchFilter } from 'store/selectors/books-with-search-filter';
import { setSearchString } from 'store/utils/utils-slice';
import { TitleVariant, ViewVariant } from 'types/enum';

import { BookList } from './components/books-list';
import { FilterList } from './components/filter-list/filter-list';
import { Container, EmptyResult, HomeContainer } from './books.style';

export const Books: FC = () => {
  const dispatch = useAppDispatch();
  const booksList = useTypedSelector(selectBooksWithSearchFilter);
  const searchValue = useTypedSelector((state) => state.utils.searchString);
  const isError = useTypedSelector((state) => state.books.isError);

  useToast(ToastType.negative, ToastMessages.mainError, isError);
  const [activeView, setActiveView] = useState<ViewVariant>(ViewVariant.window);

  useOnMount(async () => {
    dispatch(fetchBooks());
  });

  useEffect(
    (): (() => void) => () => {
      dispatch(setSearchString(''));
      dispatch(resetBooks());
    },
    [dispatch]
  );

  const activeViewHandler = useCallback((type: ViewVariant) => {
    setActiveView(type);
  }, []);

  const emptyRes = useCallback(
    () =>
      searchValue.length ? (
        <EmptyResult data-test-id='search-result-not-found'>{TitleVariant.emptySearch}</EmptyResult>
      ) : (
        <EmptyResult data-test-id='empty-category'>{TitleVariant.emptyCategory}</EmptyResult>
      ),
    [searchValue]
  );

  return (
    <Container>
      <HomeContainer>
        <FilterList onViewClick={activeViewHandler} typeView={activeView} />
        {booksList.length ? <BookList books={booksList} view={activeView} /> : emptyRes()}
      </HomeContainer>
    </Container>
  );
};
