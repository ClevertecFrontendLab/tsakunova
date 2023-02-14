import { devices } from 'consts';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 65%;
  @media ${devices.tablet} {
    width: 100%;
  }
`;
