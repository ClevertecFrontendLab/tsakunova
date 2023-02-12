import { FC } from 'react';
import { BookRating } from 'components/book-rating';
import { BookSectionTitle, TitleVariant } from 'types/enum';

import { BookSectionLayout } from '../book-section-layout';

import { Container, NotRatingSpan } from './book-rating-section.style';

type BookRatingSectionProps = {
  rating: number;
};

export const BookRatingSection: FC<BookRatingSectionProps> = ({ rating }) => (
  <BookSectionLayout title={BookSectionTitle.rating}>
    <Container>
      <BookRating rating={rating} stylesClass='ratingInFullDescription' withStars={true} />
      <div>{rating || <NotRatingSpan>{TitleVariant.notRating}</NotRatingSpan>}</div>
    </Container>
  </BookSectionLayout>
);
