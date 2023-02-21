import { FC } from 'react';
import { CoverCat } from 'assets/icons';
import { BookSlider } from 'components/slider';
import { devices } from 'consts';
import styled from 'styled-components';
import { ImagesType } from 'types/types';
import { getImageURL } from 'utils/get-image-url';

const ImageContainer = styled.div`
  width: 445px;
  height: 594px;
  background-color: ${(props) => props.theme.color.grey.black5};
  border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  @media ${devices.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  & img {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 136px;
    height: 198px;
    border-radius: 3px;
  }
  @media ${devices.mobile} {
    margin: 0 auto;
    width: 188px;
    height: 260px;
    border-radius: 10px;
  }
`;

export const ImagesSection: FC<{ images: ImagesType[] }> = ({ images }) => {
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
      <img alt='bookImage' src={getImageURL(images[0].url)} />
    </ImageContainer>
  );
};
