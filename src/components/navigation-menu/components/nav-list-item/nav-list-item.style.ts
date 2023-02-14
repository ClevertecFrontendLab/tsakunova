import { devices } from 'consts';
import styled from 'styled-components';

export const NavListItemLi = styled.li`
  margin-bottom: 40px;
  font: ${(props) => props.theme.fonts.desktopH5};
  cursor: pointer;
  position: relative;

  @media ${devices.mobile} {
    padding-left: ${(props) => `${props.theme.size.default}px}`};
    &:last-child {
      padding-bottom: ${(props) => `${props.theme.size.default}px}`};
    }
  }
`;

export const BeforeBlockLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.color.grey.black20};
  margin-bottom: ${(props) => `${props.theme.size.default * 2}px}`};
`;

export const LinkContent = styled.span`
  display: block;
`;

export const CurrentActiveLink = styled.span`
  &::after {
    display: flex;
    position: absolute;
    content: '';
    height: 1px;
    background: ${(props) => props.theme.color.main.accent};
    top: 38px;
    left: 0;
    right: 0;
    width: 0%;
    transition: 0.5s linear;
  }
  &:hover {
    &::after {
      width: 90%;
    }
  }
  & .active {
    position: relative;
    color: ${(props) => props.theme.color.main.accent};
    &::after {
      display: flex;
      position: absolute;
      content: '';
      height: 1px;
      background: ${(props) => props.theme.color.main.accent};
      top: 38px;
      left: 0;
      right: 0;
      width: 100%;
      transition: background-color 0.5s linear;
    }
  }
`;

export const CurrentLink = styled.div`
  position: relative;
  width: 255px;
  svg {
    position: absolute;
    top: 0;
    right: 12px;
    path {
      fill: ${(props) => props.theme.color.main.accent};
    }
  }
`;
