import { devices } from 'consts';
import styled from 'styled-components';

export const TermsListContainer = styled.div`
  flex: 2;
  h5 {
    font: ${(props) => props.theme.fonts.h3};
    @media ${devices.mobile} {
      font: ${(props) => props.theme.fonts.mobileH3};
    }
  }
  ol {
    list-style: none;
    counter-reset: li;
  }
  li:before {
    counter-increment: li;
    content: counters(li, '.') '. ';
  }
  .mainList {
    font: ${(props) => props.theme.fonts.subtitleLarge};
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    gap: ${(props) => `${props.theme.size.default * 2}px`};
    @media ${devices.mobile} {
      padding-top: 25px;
    }

    .subList {
      font: ${(props) => props.theme.fonts.bodyLarge};
      padding: 16px 0 0 30px;
      display: flex;
      flex-direction: column;
      gap: ${(props) => `${props.theme.size.default}px`};
      @media ${devices.mobile} {
        font: ${(props) => props.theme.fonts.bodyMediumText};
      }
    }
  }
`;
