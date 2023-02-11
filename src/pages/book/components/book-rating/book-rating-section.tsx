import { FC } from 'react';
import { BookRating } from 'components/book-rating';
import { BookSectionTitle } from 'types/enum';

import { BookSectionLayout } from '../book-section-layout';

import { Container } from './book-rating-section.style';

type BookRatingSectionProps = {
  rating: number;
};

export const BookRatingSection: FC<BookRatingSectionProps> = ({ rating }) => (
  <BookSectionLayout title={BookSectionTitle.rating}>
    <Container>
      <BookRating rating={rating} stylesClass='ratingInFullDescription' />
      <div>{rating}</div>
    </Container>
  </BookSectionLayout>
);
