import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font: ${(props) => props.theme.fonts.desktopH5};
  .ratingInFullDescription {
    gap: ${(props) => `${props.theme.size.default}px`};
    & svg {
      @media ${devices.mobile} {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const NotRatingSpan = styled.span`
  font: ${(props) => props.theme.fonts.bodySmall};
`;
