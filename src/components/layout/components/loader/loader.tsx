import { FC, useEffect, useMemo } from 'react';
import { LoaderSVG } from 'assets/icons';
import { useTypedSelector } from 'hooks/use-typed-selector';

import { Container } from './loader.style';

export const Loader: FC = () => {
  const isLoadingCategories = useTypedSelector((state) => state.categories.isLoading);
  const isLoadingBooks = useTypedSelector((state) => state.books.isLoading);
  const isLoadingBook = useTypedSelector((state) => state.currentBook.isLoading);
  const isLoading = useMemo(
    () => isLoadingBook || isLoadingBooks || isLoadingCategories,
    [isLoadingBook, isLoadingBooks, isLoadingCategories]
  );

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <Container isLoading={isLoading} data-test-id='loader'>
      <div>
        <LoaderSVG />
      </div>
    </Container>
  );
};
