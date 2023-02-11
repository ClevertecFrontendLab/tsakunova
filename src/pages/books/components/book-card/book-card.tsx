import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CoverCat } from 'assets/icons';
import { BookRating } from 'components/book-rating';
import { PrimaryButton } from 'components/buttons/primary-button';
import { RouteNames, ViewVariant } from 'types/enum';
import { FullBookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';

import { getStyledComponentForBookCard } from './book-card.utils';
import { ListAbout, ListButtonContainer, ListOther } from './book-card-list.style';
import { WindowAbout, WindowButtonContainer, WindowOther } from './book-card-window.style';

type BookProps = {
  book: FullBookDTO;
  view: ViewVariant;
};

export const BookCard: FC<BookProps> = ({
  book: { imageLink, category, id, rating, title, author, isBooked, bookedTill },
  view,
}) => {
  const { buttonType, buttonTitle } = getButtonStyles(isBooked, bookedTill!);
  const { card: Card, content: Content, image: Image } = getStyledComponentForBookCard(view);

  return (
    <Card data-test-id='card'>
      <Content>
        <NavLink to={`/${RouteNames.books}/${category}/${id}`}>
          <Image>{imageLink?.length ? <img alt={title} src={imageLink[0]} /> : <CoverCat />}</Image>
          {view === ViewVariant.window ? (
            <WindowOther>
              <BookRating rating={rating} stylesClass='ratingInCard' />
              <WindowAbout>
                <h5>{title}</h5>
                <p>{author}</p>
              </WindowAbout>
              <WindowButtonContainer>
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={isBooked && !!bookedTill} />
              </WindowButtonContainer>
            </WindowOther>
          ) : (
            <ListOther>
              <ListAbout>
                <h5>{title}</h5>
                <p>{author}</p>
              </ListAbout>
              <ListButtonContainer>
                <BookRating rating={rating} stylesClass='ratingInHome' />
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={isBooked && !!bookedTill} />
              </ListButtonContainer>
            </ListOther>
          )}
        </NavLink>
      </Content>
    </Card>
  );
};
