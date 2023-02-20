import React, { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames, TestIdType } from 'types/enum';
import { CategoriesDTO } from 'types/types';

import { BookListItemLi } from './books-theme-list-item.style';

type BooksThemeItemProps = {
  item: CategoriesDTO;
  onPress: (e: React.SyntheticEvent, path: string) => void;
  isBurgerMenu: boolean;
};

export const BooksThemeListItem: FC<BooksThemeItemProps> = ({ item, onPress, isBurgerMenu }) => {
  const testId = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}-${item.path}` : `${TestIdType.navigation}-${item.path}`),
    [isBurgerMenu, item.path]
  );
  const countTestId = useMemo(
    () =>
      isBurgerMenu
        ? `${TestIdType.burger}-book-count-for-${item.path}`
        : `${TestIdType.navigation}-book-count-for-${item.path}`,
    [isBurgerMenu, item.path]
  );

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
