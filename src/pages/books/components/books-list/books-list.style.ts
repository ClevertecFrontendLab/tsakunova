import { devices } from 'consts';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: ${(props) => `${props.theme.size.default * 2}px`};
  flex: 1;
  @media ${devices.tablet} {
    margin-top: 24px;
  }
  @media ${devices.mobile} {
    margin-top: 19px;
  }
`;

export const WindowView = styled(Container)`
  column-gap: 21.5px;
  row-gap: 23px;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    column-gap: 35px;
    row-gap: 33px;
  }
  @media ${devices.mobile} {
    row-gap: ${(props) => `${props.theme.size.default}px`};
  }
`;

export const ListView = styled(Container)`
  column-gap: 21.5px;
  row-gap: ${(props) => `${props.theme.size.default}px`};
  flex-direction: column;
  @media ${devices.tablet} {
    gap: ${(props) => `${props.theme.size.default}px`};
  }
  @media ${devices.mobile} {
  }
`;
