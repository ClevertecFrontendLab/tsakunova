import { devices } from 'consts';
import styled from 'styled-components';

export const ForgotSection = styled.div`
  margin-top: ${(props) => `${props.theme.size.default}px`};
  margin-bottom: 32px;
  font: ${(props) => props.theme.fonts.infoLarge};
  color: ${(props) => props.theme.color.grey.black40};
  margin-left: ${(props) => `${props.theme.size.default}px`};
  & a {
    text-decoration: none;
  }
`;

export const BlockTitleWithBG = styled.div`
  overflow: hidden;
  background: ${(props) => props.theme.color.grey.black5};
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 16px;
  gap: 16px;
  font: ${(props) => props.theme.fonts.buttonSmall};
  color: ${(props) => props.theme.color.grey.black70};
  text-transform: uppercase;
  & svg {
    & path {
      stroke: ${(props) => props.theme.color.grey.black20};
    }
  }
`;
export const StyledForm = styled.form`
  padding: 32px 56px 48px;
  & h4 {
    margin-bottom: 32px;
  }
  @media ${devices.mobile} {
    padding: 32px 16px 51px;
  }
`;
