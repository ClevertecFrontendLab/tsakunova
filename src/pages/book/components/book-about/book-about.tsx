import { FC, useCallback, useMemo } from 'react';
import { CoverCat } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { BookSlider } from 'components/slider';
import { BookSectionTitle } from 'types/enum';
import { FullBookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';
import { getImageURL } from 'utils/get-image-url';
import { keyExtractor } from 'utils/key-extractor';

import { BookSectionLayout } from '../book-section-layout';

import {
  AboutAuthor,
  BookAboutContainer,
  ButtonContainer,
  ContentBook,
  ContentContainer,
  DescriptionSection,
  ImageContainer,
} from './book-about.style';

type BookAboutProps = {
  book: FullBookDTO;
  onBookedButtonPress: () => void;
};

export const BookAbout: FC<BookAboutProps> = ({
  book: { authors, title, images, description, booking, issueYear },
  onBookedButtonPress,
}) => {
  const { buttonType, buttonTitle } = getButtonStyles(booking?.order, booking?.dateOrder);

  const getImagesSection = useMemo(() => {
    if (!images?.length)
      return (
        <ImageContainer>
          <CoverCat />
        </ImageContainer>
      );

    return images.length > 1 ? (
      <BookSlider images={images} />
    ) : (
      <ImageContainer>
        <img alt={title} src={getImageURL(images[0].url)} />
      </ImageContainer>
    );
  }, [images, title]);
  const renderAuthors = useCallback(
    () => authors?.map((item, index) => <span key={keyExtractor(index)}>{item}</span>),
    [authors]
  );

  return (
    <BookAboutContainer>
      {getImagesSection}
      <ContentContainer>
        <h3>{title}</h3>
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
