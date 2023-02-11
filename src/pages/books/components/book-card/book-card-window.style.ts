import { devices } from 'consts';
import styled from 'styled-components';

import { BookImage, Container } from './book.card.style';

export const WindowViewCard = styled(Container)`
  height: 470px;
  width: 190px;
  @media ${devices.mobile} {
    width: 100%;
    padding: 8px 16px 16px;
  }
`;

export const WindowContent = styled.div`
  flex: 1;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .other {
  }
`;

export const WindowBookImage = styled(BookImage)`
  border-radius: 10px;
  height: 240px;
  @media ${devices.mobile} {
    margin: 0 auto;
    width: 174px;
  }
`;

export const WindowOther = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & .ratingInCard {
    @media ${devices.tablet} {
      margin-bottom: 30px;
    }
    @media ${devices.mobile} {
      margin-bottom: 20px;
    }
  }
`;

export const WindowAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  text-overflow: ellipsis;
  @media ${devices.tablet} {
    justify-content: space-between;
  }
  @media ${devices.mobile} {
    justify-content: flex-start;
    gap: ${(props) => `${props.theme.size.default / 2}px`};
  }
  h5 {
    font: ${(props) => props.theme.fonts.subtitleSmall};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media ${devices.tablet} {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font: ${(props) => props.theme.fonts.h5Tablet};
    }
    @media ${devices.mobile} {
      -webkit-line-clamp: 3;
      font: ${(props) => props.theme.fonts.subtitleSmall};
    }
  }
  p {
    font: ${(props) => props.theme.fonts.bodySmall};
    @media ${devices.tablet} {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: ${(props) => props.theme.color.grey.black70};
      font: ${(props) => props.theme.fonts.h5Tablet};
      text-transform: uppercase;
    }
    @media ${devices.mobile} {
      font: ${(props) => props.theme.fonts.bodySmallTwo};
      text-transform: unset;
    }
  }
`;

export const WindowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 6px;
  @media ${devices.tablet} {
    margin: 24px 6px 0;
  }
  @media ${devices.mobile} {
    margin: 0;
  }
`;
