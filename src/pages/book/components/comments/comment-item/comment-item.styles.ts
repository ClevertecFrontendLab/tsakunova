import { devices } from 'consts';
import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${(props) => `${props.theme.size.default}px`};
  @media ${devices.mobile} {
    gap: ${(props) => `${props.theme.size.default / 2}px`};
  }
  & .ratingInComments {
    gap: ${(props) => `${props.theme.size.default}px`};
    @media ${devices.mobile} {
      gap: ${(props) => `${props.theme.size.default / 2}px`};
    }
    & svg {
      @media ${devices.mobile} {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const ShortInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media ${devices.mobile} {
    gap: 18px;
  }
`;

export const DateAndName = styled.div`
  display: flex;
  column-gap: 25px;
  @media ${devices.mobile} {
    flex-direction: column;
  }

  p {
    font: ${(props) => props.theme.fonts.bodyLarge};
    color: ${(props) => props.theme.color.grey.black70};
    @media ${devices.mobile} {
      font: ${(props) => props.theme.fonts.bodyMedium};
    }
  }
`;

export const CommentText = styled.p`
  font: ${(props) => props.theme.fonts.bodyLarge};
  color: ${(props) => props.theme.color.main.dark};
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.bodyMediumText};
  }
`;
