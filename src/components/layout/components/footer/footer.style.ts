import { devices } from 'consts';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: space-between;
  align-items: center;
  border-top: ${(props) => `1px solid ${props.theme.color.grey.black20}`};
  @media ${devices.mobile} {
    padding: 16px 0 8px;
    flex-direction: column;
    gap: ${(props) => `${props.theme.size.default}px`};
  }
`;

export const CopyrightText = styled.p`
  font: ${(props) => `${props.theme.fonts.bodyLarge}`};
  @media ${devices.mobile} {
    font: ${(props) => `${props.theme.fonts.bodyMediumText}`};
    text-align: center;
    padding: 0 36px;
  }
`;
