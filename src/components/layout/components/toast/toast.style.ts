import { Wrapper } from 'index.style';
import styled from 'styled-components';

export const Container = styled.div<{ isError: boolean }>`
  position: absolute;
  top: ${(props) => (props.isError ? '64px' : '-200px')};
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.1s ease-in-out;
  display: ${(props) => (props.isError ? 'flex' : 'none')};
`;
export const WrapperToast = styled(Wrapper)`
  background: ${(props) => props.theme.color.chips.negative};
  border: ${(props) => props.theme.color.chips.borderNegative};
  border-radius: 5px;
  font: ${(props) => props.theme.fonts.subtitleLarge};
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ToastInfo = styled(Wrapper)`
  display: flex;
  gap: 24px;
`;
