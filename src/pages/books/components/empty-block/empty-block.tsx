import { FC } from 'react';
import { devices } from 'consts';
import styled from 'styled-components';
import { TitleVariant } from 'types/enum';

const EmptyResult = styled.h3`
  margin: 200px auto;
  font: ${(props) => props.theme.fonts.h3};
  color: ${(props) => props.theme.color.grey.black40};
  text-align: center;
  @media ${devices.tablet} {
  }
  @media ${devices.mobile} {
    font: ${(props) => props.theme.fonts.mobileH3};
  }
`;

export const EmptyBlock: FC<{ length: number }> = ({ length }) => (
  <EmptyResult data-test-id={length ? 'search-result-not-found' : 'empty-category'}>
    {length ? TitleVariant.emptySearch : TitleVariant.emptyCategory}
  </EmptyResult>
);
