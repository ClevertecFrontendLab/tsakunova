import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultButtonContainer = styled.div<{ isSearchOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => `${props.theme.size.default}px`};
  @media ${devices.mobile} {
    display: ${(props) => (props.isSearchOpen ? 'none' : 'flex')};
  }
`;

export const ButtonContainer = styled(DefaultButtonContainer)<{ isSearchOpen: boolean }>`
  display: flex;
  @media ${devices.mobile} {
    display: flex;
    gap: ${(props) => (props.isSearchOpen ? 0 : '16px')};
  }
`;
