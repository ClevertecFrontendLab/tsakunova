import { devices } from 'consts';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => `${props.theme.size.default * 2}px`};
  @media ${devices.mobile} {
    margin-top: 24px;
    margin-bottom: ${(props) => `${props.theme.size.default * 2}px`};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const MenuContainer = styled.div.attrs((_) => ({
  id: 'burger',
}))`
  display: none;
  width: 30px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${devices.tablet} {
    display: flex;
  }
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
  @media ${devices.tablet} {
    gap: 24px;
  }
`;

export const Title = styled.h3`
  font: ${(props) => props.theme.fonts.h3};
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.mobileH3};
  }
`;
