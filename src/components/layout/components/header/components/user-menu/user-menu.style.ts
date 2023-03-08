import { devices } from 'consts';
import styled from 'styled-components';

export const UserMenuContainer = styled.div<{ isShowMenu: boolean }>`
  width: 270px;
  display: flex;
  max-height: 87vh;
  padding: 32px 24px;
  position: absolute;
  transition: left 0.1s;
  top: 20px;
  z-index: 10;
  background-color: ${(props) => props.theme.color.main.white};
  right: ${(props) => (props.isShowMenu ? '0' : '-2000px')};
  font-size: 24px;

  border-radius: 0px 0px 10px 10px;
  box-shadow: ${(props) => props.theme.color.shadow.header};

  @media ${devices.tablet} {
    display: none;
  }
`;
