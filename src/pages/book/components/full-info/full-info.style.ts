import { devices } from 'consts';
import styled from 'styled-components';

export const FullInfoContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-column-gap: 145px;
  @media ${devices.tablet} {
    grid-column-gap: 75px;
  }
  @media ${devices.mobile} {
    grid-template-columns: auto;
    grid-row-gap: ${(props) => `${props.theme.size.default}px`};
  }
`;

export const FullInfoColumn = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: repeat(4, max-content);
  grid-column-gap: 72px;
  grid-row-gap: ${(props) => `${props.theme.size.default}px`};
  @media ${devices.tablet} {
    grid-column-gap: 34px;
    grid-row-gap: ${(props) => `${props.theme.size.default}px`};
  }
  @media ${devices.mobile} {
    grid-column-gap: 42px;
    grid-template-columns: min-content auto;
  }
`;
