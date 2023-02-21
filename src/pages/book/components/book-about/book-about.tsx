import { FC } from 'react';
import { PrimaryButton } from 'components/buttons/primary-button';
import { BookSectionTitle } from 'types/enum';
import { FullBookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';
import { keyExtractor } from 'utils/key-extractor';

import { BookSectionLayout } from '../book-section-layout';

import {
  AboutAuthor,
  BookAboutContainer,
  ButtonContainer,
  ContentBook,
  ContentContainer,
  DescriptionSection,
} from './book-about.style';
import { ImagesSection } from './components';

type BookAboutProps = {
  book: FullBookDTO;
  onBookedButtonPress: () => void;
};

export const BookAbout: FC<BookAboutProps> = ({
  book: { authors, title, images, description, booking, issueYear },
  onBookedButtonPress,
}) => {
  const { buttonType, buttonTitle } = getButtonStyles(booking?.order, booking?.dateOrder);

  const renderAuthors = () => authors?.map((item, index) => <span key={keyExtractor(index)}>{item}</span>);

  return (
    <BookAboutContainer>
      <ImagesSection images={images} />
      <ContentContainer>
        <h3 data-test-id='book-title'>{title}</h3>
        <AboutAuthor>
          {renderAuthors()}, {issueYear}
        </AboutAuthor>
        <ButtonContainer>
          <PrimaryButton
            stylesClass='buttonOnBookPage'
            type={buttonType}
            title={buttonTitle}
            disabled={booking?.order && !!booking.dateOrder}
          />
        </ButtonContainer>
      </ContentContainer>

      <DescriptionSection>
        <BookSectionLayout title={BookSectionTitle.about}>
          {description?.split('\n').map((item, index) => (
            <ContentBook key={`content-${keyExtractor(index)}`}>{item}</ContentBook>
          ))}
        </BookSectionLayout>
      </DescriptionSection>
    </BookAboutContainer>
  );
};
