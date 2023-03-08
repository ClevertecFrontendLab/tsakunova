import styled from 'styled-components';

export const Container = styled.div``;
export const Title = styled.h4`
  font: ${(props) => props.theme.fonts.h4};
  margin-bottom: ${(props) => `${props.theme.size.default / 2}px`};
`;
export const Subtitle = styled.h5`
  font: ${(props) => props.theme.fonts.bodyLarge};
  color: ${(props) => props.theme.color.grey.black40};
  margin-bottom: ${(props) => `${props.theme.size.default * 2}px`};
`;
