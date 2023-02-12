import { FC, useCallback, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useOnMount } from 'hooks/use-on-mount';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchCategories } from 'store/categories/categories-actions';
import { RouteNames, TestIdType } from 'types/enum';
import { NavMenuItemList } from 'types/types';

import { BooksThemeListItem } from '../books-theme-list-item';

import { BooksList } from './books-theme-list.style';

export const BooksThemeList: FC<{
  list: NavMenuItemList;
  isBurgerMenu: boolean;
  isListOpen: boolean;
  onPressCategory: (e: React.SyntheticEvent) => void;
}> = ({ list, isBurgerMenu, isListOpen, onPressCategory }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const categories = useTypedSelector((state) => state.categories.categories);

  useOnMount(() => {
    dispatch(fetchCategories());
  });

  const getLinkStyle = useCallback(
    (isActive: boolean) => (isActive || pathname === '/' || pathname === `/${RouteNames.books}` ? 'active' : undefined),
    [pathname]
  );

  const renderItem = useCallback(
    () => categories.map((item) => <BooksThemeListItem item={item} onPress={onPressCategory} key={item.id} />),
    [categories, onPressCategory]
  );

  const testId = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}-${list.testId}` : `${TestIdType.navigation}-${list.testId}`),
    [isBurgerMenu, list.testId]
  );

  return (
    <BooksList isListOpen={isListOpen}>
      <li>
        <NavLink
          onClick={onPressCategory}
          className={({ isActive }) => getLinkStyle(isActive)}
          to={`/${RouteNames.books}/${RouteNames.booksAll}`}
        >
          <span data-test-id={testId}>{list?.listTitle}</span>
        </NavLink>
        <ul>{renderItem()}</ul>
      </li>
    </BooksList>
  );
};
