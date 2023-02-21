import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from 'types/enum';
import { CategoriesDTO } from 'types/types';

import { BookListItemLi } from './books-theme-list-item.style';

type BooksThemeItemProps = {
  item: CategoriesDTO;
  onPress: (e: React.SyntheticEvent, path: string) => void;
  dataTestId: string;
};

export const BooksThemeListItem: FC<BooksThemeItemProps> = ({ item, onPress, dataTestId }) => {
  const testId = `${dataTestId}-${item.path}`;
  const countTestId = `${dataTestId}-book-count-for-${item.path}`;

  return (
    <BookListItemLi onClick={(e) => onPress(e, item.name)}>
      <NavLink to={`/${RouteNames.books}/${item.path}`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
        <span data-test-id={testId} className='pathName'>
          {item.name}
        </span>
        <span className='count' data-test-id={countTestId}>
          {item.count}
        </span>
      </NavLink>
    </BookListItemLi>
  );
};
