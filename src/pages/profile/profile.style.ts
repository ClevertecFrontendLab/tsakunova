import { devices } from 'consts';
import { Wrapper } from 'index.style';
import styled from 'styled-components';

export const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 92px;
  @media ${devices.tablet} {
    margin: 8px 0 13px;
  }
  @media ${devices.mobile} {
    margin: 3px 0 60px;
  }
`;
