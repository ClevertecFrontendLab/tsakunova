import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  @media ${devices.tablet} {
    margin: 8px 0 13px;
  }
  @media ${devices.mobile} {
    margin: 3px 0 60px;
  }
`;
