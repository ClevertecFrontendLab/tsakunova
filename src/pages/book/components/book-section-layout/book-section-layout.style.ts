import { devices } from 'consts';
import styled from 'styled-components';

export const TitleBookSection = styled.h5<{ isPadding: boolean }>`
  font: ${(props) => props.theme.fonts.desktopH5};
  display: flex;
  align-items: center;
  @media ${devices.tablet} {
    font: ${(props) => props.theme.fonts.subtitleLarge};
  }
  @media ${devices.mobile} {
    padding-top: ${(props) => props.isPadding && `${props.theme.size.default}px`};
    font: ${(props) => props.theme.fonts.mobileH3};
  }
  & span {
    margin-left: 6px;
    font: ${(props) => props.theme.fonts.span};
    color: ${(props) => props.theme.color.grey.black40};
    @media ${devices.tablet} {
      display: none;
    }
  }
  & svg {
    margin: 0 24px;
  }
`;
