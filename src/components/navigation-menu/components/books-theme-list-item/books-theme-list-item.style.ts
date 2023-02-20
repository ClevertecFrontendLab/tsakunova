import styled from 'styled-components';

export const BookListItemLi = styled.li`
  font: ${(props) => props.theme.fonts.normal};
  margin-bottom: ${(props) => `${props.theme.size.default}px`};
  letter-spacing: 0.1px;
  cursor: pointer;
  & a {
    &:hover {
      color: ${(props) => props.theme.color.main.accent};
    }
    span {
      color: ${(props) => props.theme.color.main.dark};
    }
    & .count {
      display: inline-block;
      padding-left: 6px;
      font: ${(props) => props.theme.fonts.span};
      color: ${(props) => props.theme.color.grey.black40};
    }
    &.active {
      & .pathName {
        color: ${(props) => props.theme.color.main.accent};
      }
    }
  }
`;
