import React, { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { CoverCat } from 'assets/icons';
import { BookRating } from 'components/book-rating';
import { PrimaryButton } from 'components/buttons/primary-button';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchCurrentBook } from 'store/current-book/current-book-actions';
import { RouteNames, ViewVariant } from 'types/enum';
import { MainBookDTO } from 'types/types';
import { addComma } from 'utils/add-comma';
import { getButtonStyles } from 'utils/get-button-styles';
import { getImageURL } from 'utils/get-image-url';

import { getStyledComponentForBookCard } from './book-card.utils';
import { ListAbout, ListButtonContainer, ListOther } from './book-card-list.style';
import { WindowAbout, WindowButtonContainer, WindowOther } from './book-card-window.style';

type BookProps = {
  book: MainBookDTO;
  view: ViewVariant;
};

export const BookCard: FC<BookProps> = ({ book: { image, id, rating, title, authors, booking, categories }, view }) => {
  const { buttonType, buttonTitle } = getButtonStyles(booking?.order, booking?.dateOrder);
  const { card: Card, content: Content, image: Image } = getStyledComponentForBookCard(view);
  const dispatch = useAppDispatch();

  const currentBookHandler = () => {
    dispatch(fetchCurrentBook(id));
  };

  const renderAboutBlock = useCallback(
    () => (
      <React.Fragment>
        <h5>{title}</h5>
        <p>
          {authors?.map((author, index) => (
            <span>
              {author}
              {addComma(index, authors.length)}
            </span>
          ))}
        </p>
      </React.Fragment>
    ),
    [authors, title]
  );

  return (
    <Card data-test-id='card'>
      <Content onClick={currentBookHandler}>
        <NavLink to={`/books/all/${id}`}>
          <Image>{image?.url ? <img alt={title} src={getImageURL(image.url)} /> : <CoverCat />}</Image>
          {view === ViewVariant.window ? (
            <WindowOther>
              <BookRating rating={rating} stylesClass='ratingInCard' />
              <WindowAbout>{renderAboutBlock()}</WindowAbout>
              <WindowButtonContainer>
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={booking?.order && !!booking.dateOrder} />
              </WindowButtonContainer>
            </WindowOther>
          ) : (
            <ListOther>
              <ListAbout>{renderAboutBlock()}</ListAbout>
              <ListButtonContainer>
                <BookRating rating={rating} stylesClass='ratingInHome' />
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={booking?.order && !!booking.dateOrder} />
              </ListButtonContainer>
            </ListOther>
          )}
        </NavLink>
      </Content>
    </Card>
  );
};
