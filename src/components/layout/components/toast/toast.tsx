import { FC, useEffect, useMemo } from 'react';
import { CloseSVG, LoaderSVG, ToastNegativeSVG } from 'assets/icons';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';

import { Container, ToastInfo, WrapperToast } from './toast.style';

export const Toast: FC = () => {
  const isErrorCategories = useTypedSelector((state) => state.categories.isError);
  const isErrorBooks = useTypedSelector((state) => state.books.isError);
  const isErrorBook = useTypedSelector((state) => state.currentBook.isError);

  const isError = useMemo(
    () => isErrorBook || isErrorBooks || isErrorCategories,
    [isErrorBook, isErrorBooks, isErrorCategories]
  );

  return (
    <Container isError={isError}>
      <WrapperToast data-test-id='error'>
        <ToastInfo>
          <ToastNegativeSVG />
          <p>Что-то пошло не так. Обновите страницу через некоторое время.</p>
        </ToastInfo>

        <CloseSVG />
      </WrapperToast>
    </Container>
  );
};
