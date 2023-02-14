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
export const SeparationLine = styled.div`
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
