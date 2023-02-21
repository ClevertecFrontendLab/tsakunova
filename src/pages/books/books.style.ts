import { devices } from 'consts';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  @media ${devices.tablet} {
    margin: 8px 0 13px;
  }
  @media ${devices.mobile} {
    margin: 3px 0 60px;
  }
`;
