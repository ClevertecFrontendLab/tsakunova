import { devices } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  width: 528px;
  overflow: hidden;
  border-radius: ${(props) => `${props.theme.size.default}px`};
  background-color: ${(props) => props.theme.color.main.white};
  @media ${devices.mobile} {
    width: 288px;
  }
`;
