import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from 'types/enum';
import { CategoriesDTO } from 'types/types';

import { BookListItemLi } from './books-theme-list-item.style';

type BooksThemeItemProps = {
  item: CategoriesDTO;
  onPress: (e: React.SyntheticEvent) => void;
};

export const BooksThemeListItem: FC<BooksThemeItemProps> = ({ item, onPress }) => (
  <BookListItemLi onClick={(e) => onPress(e)}>
    <NavLink to={`/${RouteNames.books}/${item.path}`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
      {item.name} <span>1</span>
    </NavLink>
  </BookListItemLi>
);
