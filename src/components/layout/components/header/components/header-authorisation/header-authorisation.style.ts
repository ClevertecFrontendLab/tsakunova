import { devices } from 'consts';
import styled from 'styled-components';

export const AuthorizationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${(props) => `${props.theme.size.default}px`};

  @media ${devices.tablet} {
    display: none;
  }
`;

export const Subtitle = styled.p`
  font: ${(props) => props.theme.fonts.subtitle};
  letter-spacing: 0.1px;
`;
