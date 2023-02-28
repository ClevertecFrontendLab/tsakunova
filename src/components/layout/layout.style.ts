import { devices } from 'consts';
import { Wrapper } from 'index.style';
import styled from 'styled-components';

export const Container = styled.div<{ isOpenMenu: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  display: flex;
  gap: 42px;
  overflow: ${(props) => (props.isOpenMenu ? 'hidden' : 'auto')};

  @media ${devices.tablet} {
    gap: 46px;
  }
  @media ${devices.mobile} {
    gap: unset;
  }
`;
export const MainContainer = styled.div`
  //flex: 1 0 auto;
  display: grid;
  grid-template-columns: 285px auto;
  @media ${devices.tablet} {
    grid-template-columns: auto;
  }
`;

export const Overlay = styled.div<{ isShowMenu: boolean }>`
  width: ${(props) => props.isShowMenu && '100vw'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: ${(props) => props.isShowMenu && '100vh'};
  background-color: ${(props) => props.isShowMenu && props.theme.color.main.dark30};
`;

export const MainWrapper = styled(Wrapper)`
  flex: 1;
`;
