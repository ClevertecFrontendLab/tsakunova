import { devices } from 'consts';
import styled from 'styled-components';

export const BookBreadcrumbsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grey.black5};
  padding: 23px 0;
  @media ${devices.mobile} {
    padding: 16px 0 22px;
    margin-bottom: 20px;
  }
`;
export const BookBreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.grey.black5};
  & p {
    display: flex;
    span {
      color: ${(props) => props.theme.color.grey.black40};
      font: ${(props) => props.theme.fonts.bodySmall};
      padding-right: 36px;
      @media ${devices.mobile} {
        font: ${(props) => props.theme.fonts.infoSmall};
      }
    }
    & a {
      display: block;
      position: relative;
      color: ${(props) => props.theme.color.grey.black40};
      font: ${(props) => props.theme.fonts.bodySmall};
      padding-right: 36px;
      @media ${devices.mobile} {
        font: ${(props) => props.theme.fonts.infoSmall};
      }
      &::after {
        position: absolute;
        content: '/';
        top: 0;
        right: 14px;
      }
    }
  }
`;
