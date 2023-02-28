import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  @media ${devices.tablet} {
    margin: 8px 0 13px;
  }
  @media ${devices.mobile} {
    margin: 3px 0 60px;
  }
`;
export const ImageContainer = styled.div<{ src: string }>`
  width: 160px;
  height: 160px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 50%;
  @media ${devices.tablet} {
    margin: 8px 0 13px;
  }
  @media ${devices.mobile} {
    margin: 3px 0 60px;
  }
`;

export const NameContainer = styled.div`
  h3 {
    font: ${(props) => props.theme.fonts.h1};
  }
`;
