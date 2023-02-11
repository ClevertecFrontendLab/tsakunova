import { devices } from 'consts';
import styled from 'styled-components';

export const RuleContainer = styled.div`
  width: 100%;
  flex: 2;
  margin-bottom: ${(props) => `${props.theme.size.default}px`};
  @media ${devices.tablet} {
    margin-bottom: 12px;
  }
  @media ${devices.mobile} {
    margin-bottom: 24px;
  }
`;

export const Container = styled.div`
  margin-top: 20px;
  @media ${devices.tablet} {
    margin-top: ${(props) => `${props.theme.size.default / 2}px`};
  }
  @media ${devices.mobile} {
    margin-top: ${(props) => `${props.theme.size.default}px`};
  }
`;
