import { devices } from 'consts';
import styled from 'styled-components';

type InfoRow = {
  only320: boolean;
  none320: boolean;
};

export const TitleContainer = styled.h6<InfoRow>`
  display: ${(props) => props.only320 && 'none'};
  font: ${(props) => props.theme.fonts.subtitleLarge};
  color: ${(props) => props.theme.color.grey.black40};
  flex: 1;
  @media ${devices.tablet} {
    font: ${(props) => props.theme.fonts.subtitleSmall};
  }
  @media ${devices.mobile} {
    display: ${(props) => (props.none320 ? 'none' : 'block')};
    font: ${(props) => props.theme.fonts.infoLarge};
  }
`;

export const InfoContainer = styled.p<InfoRow>`
  display: ${(props) => props.only320 && 'none'};
  font: ${(props) => props.theme.fonts.bodyLarge};
  flex: 2;
  @media ${devices.tablet} {
    font: ${(props) => props.theme.fonts.bodySmall};
  }
  @media ${devices.mobile} {
    display: ${(props) => (props.none320 ? 'none' : 'block')};
    font: ${(props) => props.theme.fonts.infoSmall};
  }
`;
