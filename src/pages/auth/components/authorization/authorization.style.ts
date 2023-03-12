import { devices } from 'consts';
import styled from 'styled-components';

export const ForgotSection = styled.div`
  margin-top: ${(props) => `${props.theme.size.default}px`};
  margin-bottom: 32px;
  font: ${(props) => props.theme.fonts.infoLarge};
  color: ${(props) => props.theme.color.grey.black40};
  margin-left: ${(props) => `${props.theme.size.default}px`};
  & a {
    display: block;
    text-decoration: none;
  }
`;

export const EyeToggler = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  padding: 48px 52px;
  @media ${devices.mobile} {
    padding: 24px 16px;
  }
`;

export const ForgotText = styled.p`
  color: ${(props) => props.theme.color.main.error};
`;
