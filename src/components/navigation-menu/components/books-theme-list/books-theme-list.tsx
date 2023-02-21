import { FC, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ToastMessages, ToastType } from 'components/layout/components/toast/toast.enum';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useToast } from 'hooks/use-toast';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { fetchCategories } from 'store/categories/categories-actions';
import { resetCategories } from 'store/categories/categories-slice';
import { selectBooksInCategoryWithCount } from 'store/selectors/categories-with-count';
import { selectErrors } from 'store/selectors/error-selector';
import { BookCategory, RouteNames, TestIdType } from 'types/enum';
import { CategoriesDTO, NavMenuItemList } from 'types/types';

import { BooksThemeListItem } from '../books-theme-list-item';

import { BooksList } from './books-theme-list.style';

type BooksThemeListProps = {
  list: NavMenuItemList;
  isBurgerMenu: boolean;
  isListOpen: boolean;
  onPressCategory: (e: React.SyntheticEvent, path: string) => void;
};

export const BooksThemeList: FC<BooksThemeListProps> = ({ list, isBurgerMenu, isListOpen, onPressCategory }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const categories = useTypedSelector(selectBooksInCategoryWithCount || []);
  const isError = useTypedSelector(selectErrors);

  useToast(ToastType.negative, ToastMessages.mainError, isError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect((): (() => void) => () => dispatch(resetCategories()), [dispatch]);

  const getLinkStyle = (isActive: boolean) =>
    isActive || pathname === '/' || pathname === `/${RouteNames.books}` ? 'active' : undefined;

  const testIdType = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}` : `${TestIdType.navigation}`),
    [isBurgerMenu]
  );
  const testId = `${testIdType}-${list.testId}`;

  const renderItem = () =>
    categories?.map((item: CategoriesDTO) => (
      <BooksThemeListItem dataTestId={testIdType} item={item} onPress={onPressCategory} key={item.id} />
    ));

  if (isError) return null;

  return (
    <BooksList isListOpen={isListOpen}>
      <li>
        <NavLink
          onClick={(e) => onPressCategory(e, BookCategory.all)}
          className={({ isActive }) => getLinkStyle(isActive)}
          to={`/${RouteNames.books}/${RouteNames.booksAll}`}
        >
          <span className='listTitle' data-test-id={testId}>
            {list?.listTitle}
          </span>
        </NavLink>
        <ul>{renderItem()}</ul>
      </li>
    </BooksList>
  );
};
