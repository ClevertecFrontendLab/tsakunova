import { FC, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useOnMount } from 'hooks/use-on-mount';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { fetchCurrentBook } from 'store/current-book/current-book-actions';
import { ButtonType, TitleVariant } from 'types/enum';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const { bookId } = useParams();
  const dispatch = useAppDispatch();
  const { currentBook, isLoading, isError } = useTypedSelector((state) => state.currentBook);

  useEffect(() => {
    dispatch(fetchCurrentBook(Number(bookId)));
  }, [bookId, dispatch]);
  const pressBookingButton = useCallback(() => console.log(currentBook!.id), [currentBook]);

  if (isError) return null;

  return (
    <Wrapper>
      <BookContainer isLoading={isLoading}>
        <BookAbout book={currentBook} onBookedButtonPress={pressBookingButton} />
        <InfoSection>
          <BookRatingSection rating={currentBook!.rating} />
          <FullInfoSection book={currentBook!} />
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
