import { FC, useCallback } from 'react';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { ButtonType, TitleVariant } from 'types/enum';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const currentBook = useTypedSelector((state) => state.currentBook.currentBook);

  const pressBookingButton = useCallback(() => console.log(currentBook!.id), [currentBook]);

  return (
    <Wrapper>
      <BookContainer>
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
