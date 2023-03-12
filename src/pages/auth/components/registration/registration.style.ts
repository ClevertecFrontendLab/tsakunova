import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px 52px;
  @media ${devices.mobile} {
    padding: 24px 16px;
  }
`;
