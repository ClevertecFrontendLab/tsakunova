import { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Wrapper } from 'index.style';
import { BookCategory, RouteNames } from 'types/enum';

import { BookBreadcrumbsContainer, BookBreadcrumbsWrapper } from './book-breadcrumbs.style';

export const BookBreadcrumbs: FC = () => {
  const { category } = useParams<{ category: keyof typeof BookCategory }>();
  const categoryTitle = category ? BookCategory[category] : BookCategory.all;

  const currentBook = useTypedSelector((state) => state.currentBook.currentBook);
  const isLoading = useTypedSelector((state) => state.currentBook.isLoading);

  if (isLoading) return null;

  return (
    <BookBreadcrumbsContainer>
      <Wrapper>
        <BookBreadcrumbsWrapper>
          <p>
            <NavLink to={`/${RouteNames.books}/${category}`} data-test-id='breadcrumbs-link'>
              {categoryTitle}
            </NavLink>
            <span data-test-id='book-name'>{currentBook?.title}</span>
          </p>
        </BookBreadcrumbsWrapper>
      </Wrapper>
    </BookBreadcrumbsContainer>
  );
};
