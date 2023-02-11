import { devices } from 'consts';
import styled from 'styled-components';

export const BookAboutContainer = styled.div`
  display: grid;
  gap: 30px;
  margin-bottom: 42px;
  @media ${devices.tablet} {
    column-gap: ${(props) => `${props.theme.size.default * 2}px`};
    row-gap: 48px;
    grid-template-columns: min-content auto;
    margin-bottom: 52px;
  }
  @media ${devices.mobile} {
    grid-template-columns: auto;
    gap: ${(props) => `${props.theme.size.default}px`};
    margin-bottom: 42px;
  }
`;

export const ContentBook = styled.p`
  font: ${(props) => props.theme.fonts.bodyLarge};
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.bodySmallTwo};
  }
  &:not(:last-child) {
    margin-bottom: 25px;
    @media ${devices.mobile} {
      margin-bottom: 0;
    }
  }
`;

export const DescriptionSection = styled.div`
  @media ${devices.tablet} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  @media ${devices.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

export const ImageContainer = styled.div`
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
    height: 100%;
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

export const ContentContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  @media ${devices.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  h3 {
    font: ${(props) => props.theme.fonts.h3};
    @media ${devices.tablet} {
      font: ${(props) => props.theme.fonts.h4};
    }
    @media ${devices.mobile} {
      font: ${(props) => props.theme.fonts.mobileH3};
    }
  }
`;

export const AboutAuthor = styled.h5`
  font: ${(props) => props.theme.fonts.desktopH5};
  color: ${(props) => props.theme.color.grey.black40};
  margin: 24px 0 32px;
  @media ${devices.tablet} {
    font: ${(props) => props.theme.fonts.subtitleSmall};
    margin: 34px 0 32px;
  }
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.bodySmallTwo};
    margin: 8px 0 42px;
  }
`;

export const ButtonContainer = styled.div`
  width: 350px;
  .buttonOnBookPage {
    padding: 14px 0;
    border-radius: 30px;
    @media ${devices.mobile} {
      padding: 11px 0;
      border-radius: 20px;
    }
    p {
      font: ${(props) => props.theme.fonts.subtitleLarge};
      @media ${devices.mobile} {
        font: ${(props) => props.theme.fonts.buttonSmall};
      }
    }
  }
  @media ${devices.tablet} {
    width: 306px;
  }
  @media ${devices.mobile} {
    width: 100%;
    margin-bottom: 26px;
  }
`;
