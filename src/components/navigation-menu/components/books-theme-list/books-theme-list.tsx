import { FC, useCallback, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useOnMount } from 'hooks/use-on-mount';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchCategories } from 'store/categories/categories-actions';
import { resetCategories } from 'store/categories/categories-slice';
import { selectErrors } from 'store/selectors';
import { RouteNames, TestIdType } from 'types/enum';
import { CategoriesDTO, NavMenuItemList } from 'types/types';

import { BooksThemeListItem } from '../books-theme-list-item';

import { BooksList } from './books-theme-list.style';

type BooksThemeListProps = {
  list: NavMenuItemList;
  isBurgerMenu: boolean;
  isListOpen: boolean;
  onPressCategory: (e: React.SyntheticEvent) => void;
};

export const BooksThemeList: FC<BooksThemeListProps> = ({ list, isBurgerMenu, isListOpen, onPressCategory }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const categories = useTypedSelector((state) => state.categories.categories || []);
  const isError = useTypedSelector(selectErrors);

  useToast(ToastType.negative, ToastMessages.mainError, isError);

  useOnMount(() => {
    dispatch(fetchCategories());
  });

  useEffect((): (() => void) => () => dispatch(resetCategories()), [dispatch]);

  const getLinkStyle = useCallback(
    (isActive: boolean) => (isActive || pathname === '/' || pathname === `/${RouteNames.books}` ? 'active' : undefined),
    [pathname]
  );

  const renderItem = useCallback(
    () =>
      categories.map((item: CategoriesDTO) => (
        <BooksThemeListItem item={item} onPress={onPressCategory} key={item.id} />
      )),
    [categories, onPressCategory]
  );

  const testId = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}-${list.testId}` : `${TestIdType.navigation}-${list.testId}`),
    [isBurgerMenu, list.testId]
  );

  if (isError) return null;

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
