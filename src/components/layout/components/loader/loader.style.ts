import styled from 'styled-components';

export const Container = styled.div<{ isLoading: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.color.main.dark30};
  backdrop-filter: blur(10px);
  display: ${(props) => (props.isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  @keyframes ring {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  svg {
    animation: ring 1.5s linear infinite;
  }
`;
