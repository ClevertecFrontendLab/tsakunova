import { FC } from 'react';
import { devices } from 'consts';
import styled from 'styled-components';

const SeparationContainer = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.color.grey.black10};
  margin: 16px 0;
  width: 350px;
  @media ${devices.tablet} {
    width: 305px;
  }
  @media ${devices.mobile} {
    width: 209px;
    margin: 8px 0;
  }
`;

export const SeparationLine: FC = () => <SeparationContainer />;
