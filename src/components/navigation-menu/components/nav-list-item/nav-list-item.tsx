import React, { FC, useCallback, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DownSVG, UpSVG } from 'assets/icons';
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
  onPressCategory: (e: React.SyntheticEvent) => void;
};

export const NavListItem: FC<NavListItemProps> = ({
  item,
  onPressRoute,
  isBooksListOpen,
  activeRoute,
  isBurgerMenu = false,
  onPressCategory,
}) => {
  const testId = useMemo(
    () => (isBurgerMenu ? `${TestIdType.burger}-${item.testId}` : `${TestIdType.navigation}-${item.testId}`),
    [isBurgerMenu, item.testId]
  );
  const { pathname } = useLocation();
  const getLinkStyle = useCallback(
    (isActive: boolean) => (isActive || (item.route === RouteNames.books && pathname === '/') ? 'active' : undefined),
    [item.route, pathname]
  );
  const Arrow = useMemo(() => (isBooksListOpen ? UpSVG : DownSVG), [isBooksListOpen]);

  if (item.isOnlyBurger && !isBurgerMenu) return null;

  return (
    <React.Fragment>
      {item.route === RouteNames.profile && <BeforeBlockLine />}
      <NavListItemLi onClick={(e) => onPressRoute(item.route, e)}>
        <CurrentLink data-test-id={testId}>
          <CurrentActiveLink>
            <NavLink to={`/${item.route}`} className={({ isActive }) => getLinkStyle(isActive)}>
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
