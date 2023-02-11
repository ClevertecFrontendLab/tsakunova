import { FC } from 'react';
import { Wrapper } from 'index.style';

import { BookBreadcrumbsContainer, BookBreadcrumbsWrapper } from './book-breadcrumbs.style';

export const BookBreadcrumbs: FC = () => (
  <BookBreadcrumbsContainer>
    <Wrapper>
      <BookBreadcrumbsWrapper>
        <p>
          <span>Бизнес книги</span>
          <span>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</span>
        </p>
      </BookBreadcrumbsWrapper>
    </Wrapper>
  </BookBreadcrumbsContainer>
);
