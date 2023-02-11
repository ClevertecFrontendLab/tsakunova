import styled from 'styled-components';

export const BookListItemLi = styled.li`
  font: ${(props) => props.theme.fonts.normal};
  color: ${(props) => props.theme.color.main.dark};
  margin-bottom: ${(props) => `${props.theme.size.default}px`};
  letter-spacing: 0.1px;
  cursor: pointer;
  span {
    color: ${(props) => props.theme.color.grey.black40};
  }
  & .active {
    color: ${(props) => props.theme.color.main.accent};
  }
`;
