import { FC, useCallback } from 'react';
import { EmptyStar } from 'assets/icons';
import { theme } from 'style/theme';
import { TitleVariant } from 'types/enum';
import { keyExtractor } from 'utils/key-extractor';

import { Container } from './book-rating.style';

type BookRatingProps = {
  rating?: number;
  stylesClass?: string;
  withStars?: boolean;
};

export const BookRating: FC<BookRatingProps> = ({ rating = 0, stylesClass, withStars = false }) => {
  const renderStars = useCallback(() => {
    if (!rating && !withStars) return <p>{TitleVariant.notRating}</p>;

    return [...Array(5)].map((item, index) =>
      index < Math.floor(rating) ? (
        <EmptyStar fill={theme.color.main.stars} key={keyExtractor(index)} />
      ) : (
        <EmptyStar fill={theme.color.main.white} key={keyExtractor(index)} />
      )
    );
  }, [rating, withStars]);

  return <Container className={stylesClass}>{renderStars()}</Container>;
};
