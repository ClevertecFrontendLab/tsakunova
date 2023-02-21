import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { fetchCurrentBook } from 'store/current-book/current-book-actions';
import { resetBook } from 'store/current-book/current-book-slice';
import { ButtonType, TitleVariant } from 'types/enum';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const { bookId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, isError, currentBook } = useTypedSelector((state) => state.currentBook);

  useToast(ToastType.negative, ToastMessages.mainError, isError);

  useEffect(() => {
    if (bookId) dispatch(fetchCurrentBook(bookId));
  }, [bookId, dispatch]);

  useEffect((): (() => void) => () => dispatch(resetBook()), [dispatch]);

  if (isError || !currentBook) return null;

  return (
    <Wrapper>
      <BookContainer isLoading={isLoading}>
        <BookAbout book={currentBook} onBookedButtonPress={() => {}} />
        <InfoSection>
          <BookRatingSection rating={currentBook.rating} />
          <FullInfoSection book={currentBook} />
          <CommentsSection comments={currentBook.comments} />
        </InfoSection>
        <ButtonContainer>
          <PrimaryButton
            data-test-id='button-rating'
            type={ButtonType.primaryButton}
            title={TitleVariant.addRating}
            stylesClass='buttonOnBookPage'
          />
        </ButtonContainer>
      </BookContainer>
    </Wrapper>
  );
};
