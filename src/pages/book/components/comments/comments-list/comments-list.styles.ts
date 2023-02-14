import { devices } from 'consts';
import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: flex-start;
  @media ${devices.mobile} {
    gap: 30px;
  }
`;
