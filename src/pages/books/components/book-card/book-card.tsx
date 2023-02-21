import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CoverCat } from 'assets/icons';
import { BookRating } from 'components/book-rating';
import { PrimaryButton } from 'components/buttons/primary-button';
import { RouteNames, ViewVariant } from 'types/enum';
import { MainBookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';
import { getImageURL } from 'utils/get-image-url';

import { MainAboutBlock } from './components/book-about-main';
import { getStyledComponentForBookCard } from './book-card.utils';
import { ListAbout, ListButtonContainer, ListOther } from './book-card-list.style';
import { WindowAbout, WindowButtonContainer, WindowOther } from './book-card-window.style';

type BookProps = {
  book: MainBookDTO;
  view: ViewVariant;
};

export const BookCard: FC<BookProps> = ({ book: { image, id, rating, title, authors, booking }, view }) => {
  const { buttonType, buttonTitle } = getButtonStyles(booking?.order, booking?.dateOrder);
  const { card: Card, content: Content, image: Image } = getStyledComponentForBookCard(view);
  const { category } = useParams();

  return (
    <Card data-test-id='card'>
      <Content>
        <NavLink to={`/${RouteNames.books}/${category ? category : RouteNames.booksAll}/${id}`}>
          <Image>{image?.url ? <img alt={title} src={getImageURL(image.url)} /> : <CoverCat />}</Image>
          {view === ViewVariant.window ? (
            <WindowOther>
              <BookRating rating={rating} stylesClass='ratingInCard' />
              <WindowAbout>
                <MainAboutBlock authors={authors} title={title} />
              </WindowAbout>
              <WindowButtonContainer>
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={booking?.order && !!booking.dateOrder} />
              </WindowButtonContainer>
            </WindowOther>
          ) : (
            <ListOther>
              <ListAbout>
                <MainAboutBlock authors={authors} title={title} />
              </ListAbout>
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
