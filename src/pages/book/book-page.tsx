import { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useOnMount } from 'hooks/use-on-mount';
import { Wrapper } from 'index.style';
import { MOCK_COMMENTS } from 'mocks/book.mock';
import { mockBooks } from 'mocks/books.mock';
import { ButtonType, TitleVariant } from 'types/enum';
import { CommentDTO } from 'types/types';

import { BookAbout } from './components/book-about';
import { BookRatingSection } from './components/book-rating';
import { CommentsSection } from './components/comments';
import { FullInfoSection } from './components/full-info';
import { BookContainer, ButtonContainer, InfoSection } from './book-page.style';

export const BookPage: FC = () => {
  const { bookId } = useParams();
  const [comments, setComments] = useState<CommentDTO[]>([]);

  const currentBook = mockBooks.find((book) => book.id === Number(bookId));

  useOnMount(() => {
    setComments(MOCK_COMMENTS);
  });

  const pressBookingButton = useCallback(() => console.log(currentBook!.id), [currentBook]);

  return (
    <Wrapper>
      <BookContainer>
        <BookAbout book={currentBook!} onBookedButtonPress={pressBookingButton} />
        <InfoSection>
          <BookRatingSection rating={currentBook!.rating} />
          <FullInfoSection book={currentBook!} />
          <CommentsSection comments={comments} />
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
