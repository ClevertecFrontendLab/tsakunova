import { FC, useCallback, useEffect, useState } from 'react';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchBooks } from 'store/books/books-actions';
import { resetBooks } from 'store/books/books-slice';
import { selectBooksWithSearchFilter } from 'store/selectors/books-with-search-filter';
import { setSearchString } from 'store/utils/utils-slice';
import { ViewVariant } from 'types/enum';

import { BookList } from './components/books-list';
import { EmptyBlock } from './components/empty-block';
import { FilterList } from './components/filter-list/filter-list';
import { Container, HomeContainer } from './books.style';

export const Books: FC = () => {
  const dispatch = useAppDispatch();
  const booksList = useTypedSelector(selectBooksWithSearchFilter);
  const isError = useTypedSelector(({ books }) => books.isError);
  const searchValue = useTypedSelector(({ utils }) => utils.searchString);

  useToast(ToastType.negative, ToastMessages.mainError, isError);
  const [activeView, setActiveView] = useState<ViewVariant>(ViewVariant.window);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(
    () => () => {
      dispatch(setSearchString(''));
      dispatch(resetBooks());
    },
    [dispatch]
  );

  const activeViewHandler = useCallback((type: ViewVariant) => {
    setActiveView(type);
  }, []);

  return (
    <Container>
      <HomeContainer>
        <FilterList onViewClick={activeViewHandler} typeView={activeView} />
        {booksList.length ? (
          <BookList books={booksList} view={activeView} />
        ) : (
          <EmptyBlock length={searchValue.length} />
        )}
      </HomeContainer>
    </Container>
  );
};
