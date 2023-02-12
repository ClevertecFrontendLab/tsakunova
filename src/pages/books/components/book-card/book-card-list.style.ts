import { devices } from 'consts';
import styled from 'styled-components';

import { BookImage, Container } from './book.card.style';

export const ListViewCard = styled(Container)`
  max-height: 218px;
  width: 100%;
  padding: 24px 24px 24px 16px;
  @media ${devices.tablet} {
    max-height: unset;
    padding: 16px 24px 16px 16px;
  }
  @media ${devices.mobile} {
    padding: 16px 16px 16px 8px;
  }
`;

export const ListContent = styled.div`
  flex: 1;
  gap: ${(props) => `${props.theme.size.default}px`};
  display: flex;
  justify-content: flex-start;

  @media ${devices.mobile} {
    gap: ${(props) => `${props.theme.size.default / 2}px`};
  }
`;

export const ListBookImage = styled(BookImage)`
  border-radius: 3px;
  width: 120px;
  height: 170px;
  @media ${devices.mobile} {
    width: 70px;
    height: 100px;
  }
`;

export const ListOther = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  @media ${devices.tablet} {
    gap: ${(props) => `${props.theme.size.default}px`};
  }
  @media ${devices.mobile} {
    gap: unset;
  }
`;

export const ListAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${devices.mobile} {
  }
  h5 {
    font: ${(props) => props.theme.fonts.h5};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: ${(props) => `${props.theme.size.default / 2}px`};
    @media ${devices.tablet} {
      -webkit-line-clamp: inherit;
      font: ${(props) => props.theme.fonts.h4};
      overflow: visible;
    }
    @media ${devices.mobile} {
      margin-bottom: 4px;
      font: ${(props) => props.theme.fonts.subtitleSmall};
    }
  }
  p {
    font: ${(props) => props.theme.fonts.bodyLarge};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media ${devices.tablet} {
      font: ${(props) => props.theme.fonts.bodySubtitle};
    }
    @media ${devices.mobile} {
      font: ${(props) => props.theme.fonts.bodySmallTwo};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

export const ListButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => `${props.theme.size.default}px`};
  }
  button {
    max-width: 175px;
    @media ${devices.mobile} {
      max-width: 100%;
    }
  }
  .ratingInHome {
    @media ${devices.mobile} {
      gap: ${(props) => `${props.theme.size.default / 2}px`};
    }
    & p {
      @media ${devices.mobile} {
        font: ${(props) => props.theme.fonts.bodySmallTwo};
      }
    }
    & svg {
      @media ${devices.mobile} {
        width: 14px;
        height: 14px;
      }
    }
  }
`;
