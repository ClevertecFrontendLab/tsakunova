import { devices } from 'consts';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1110px;
  margin: 0 auto;

  @media ${devices.tablet} {
    width: 640px;
    margin: 0 auto;
  }

  @media ${devices.mobile} {
    width: 288px;
    margin: 0 auto;
  }
`;
