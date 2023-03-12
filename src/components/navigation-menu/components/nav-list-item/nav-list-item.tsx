import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DownSVG, UpSVG } from 'assets/icons';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { logout } from 'store/login/login-slice';
import { RouteNames, TestIdType } from 'types/enum';
import { NavMenuType } from 'types/types';

import { BooksThemeList } from '../books-theme-list';

import { BeforeBlockLine, CurrentActiveLink, CurrentLink, LinkContent, NavListItemLi } from './nav-list-item.style';

type NavListItemProps = {
  item: NavMenuType;
  onPressRoute: (route: RouteNames, e: React.SyntheticEvent) => void;
  isBooksListOpen: boolean;
  activeRoute: RouteNames;
  isBurgerMenu?: boolean;
  onPressCategory: (e: React.SyntheticEvent, path: string) => void;
};

export const NavListItem: FC<NavListItemProps> = ({
  item,
  onPressRoute,
  isBooksListOpen,
  activeRoute,
  isBurgerMenu = false,
  onPressCategory,
}) => {
  const testId = isBurgerMenu ? `${TestIdType.burger}-${item.testId}` : `${TestIdType.navigation}-${item.testId}`;
  const { pathname } = useLocation();
  const getLinkStyle = (isActive: boolean) =>
    isActive || (item.route === RouteNames.books && pathname === '/') ? 'active' : undefined;
  const Arrow = isBooksListOpen ? UpSVG : DownSVG;
  const dispatch = useAppDispatch();

  if (item.isOnlyBurger && !isBurgerMenu) return null;

  return (
    <React.Fragment>
      {item.route === RouteNames.profile && <BeforeBlockLine />}
      <NavListItemLi onClick={(e) => onPressRoute(item.route, e)}>
        <CurrentLink data-test-id={testId}>
          <CurrentActiveLink data-test-id={item.route === RouteNames.signOut && 'exit-button'}>
            <NavLink
              onClick={() => (item.route === RouteNames.signOut ? dispatch(logout()) : null)}
              to={item.route === RouteNames.signOut ? `/${RouteNames.auth}` : `/${item.route}`}
              className={({ isActive }) => getLinkStyle(isActive)}
            >
              <LinkContent>
                {item.title} {item.list && activeRoute === RouteNames.books && <Arrow />}
              </LinkContent>
            </NavLink>
          </CurrentActiveLink>
        </CurrentLink>
        {item.list && (
          <BooksThemeList
            list={item.list}
            isListOpen={isBooksListOpen && activeRoute === RouteNames.books}
            isBurgerMenu={isBurgerMenu}
            onPressCategory={onPressCategory}
          />
        )}
      </NavListItemLi>
    </React.Fragment>
  );
};
