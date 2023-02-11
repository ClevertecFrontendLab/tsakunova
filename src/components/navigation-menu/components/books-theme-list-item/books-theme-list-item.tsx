import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { BookCategory, RouteNames } from 'types/enum';

import { BookListItemLi } from './books-theme-list-item.style';

type BooksThemeItemProps = {
  item: {
    name: string;
    count: number;
    category: BookCategory;
  };
  onPress: (e: React.SyntheticEvent) => void;
};

export const BooksThemeListItem: FC<BooksThemeItemProps> = ({ item, onPress }) => (
  <BookListItemLi onClick={(e) => onPress(e)}>
    <NavLink
      to={`/${RouteNames.books}/${item.category}`}
      className={({ isActive }) => (isActive ? 'active' : undefined)}
    >
      {item.name} <span>{item.count}</span>
    </NavLink>
  </BookListItemLi>
);
