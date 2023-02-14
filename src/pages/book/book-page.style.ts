import { devices } from 'consts';
import styled from 'styled-components';

export const BookContainer = styled.div<{ isLoading: boolean }>`
  display: ${(props) => (props.isLoading ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: flex-start;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media ${devices.tablet} {
    gap: 52px;
  }
  @media ${devices.mobile} {
    gap: 26px;
  }
`;

export const ButtonContainer = styled.div`
  width: 350px;
  margin-top: 46px;
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
    width: 100%;
  }
  @media ${devices.mobile} {
    margin: 21px auto;
  }
`;
