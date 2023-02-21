import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NAVIGATION_MENU_LIST } from 'consts';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { setCurrentCategory } from 'store/categories/categories-slice';
import { RouteNames } from 'types/enum';

import { NavListItem } from './components/nav-list-item';
import { BurgerMenuContainer, Container } from './navigation-menu.style';

type NavMenuProps = {
  isBurgerMenu: boolean;
  setIsShowMenu?: (value: boolean) => void;
  isShowMenu?: boolean;
};

export const NavigationMenu: FC<NavMenuProps> = ({
  isBurgerMenu,
  isShowMenu = true,
  setIsShowMenu = () => undefined,
}) => {
  const [activeRoute, setActiveRoute] = useState<RouteNames>(RouteNames.books);
  const [isBooksListOpen, setIsBooksListOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeRoute === RouteNames.books) setIsBooksListOpen(true);
  }, [activeRoute]);

  useEffect(() => {
    if (params.bookId) setIsBooksListOpen(false);
  }, [params.bookId]);

  const onPressRoute = useCallback(
    (route: RouteNames, e: React.SyntheticEvent) => {
      e.stopPropagation();
      setActiveRoute(route);
      if (route === RouteNames.books) {
        setIsBooksListOpen(!isBooksListOpen);
        if (isBooksListOpen) setIsShowMenu(true);
      } else {
        setIsShowMenu(false);
      }
    },
    [isBooksListOpen, setIsShowMenu]
  );
  const onPressCategory = useCallback(
    (e: React.SyntheticEvent, path: string) => {
      e.stopPropagation();
      dispatch(setCurrentCategory(path));
      setIsShowMenu(false);
    },
    [dispatch, setIsShowMenu]
  );

  const renderMenu = () =>
    NAVIGATION_MENU_LIST.map((item) => (
      <NavListItem
        isBurgerMenu={isBurgerMenu}
        key={item.route}
        item={item}
        activeRoute={activeRoute}
        onPressRoute={onPressRoute}
        onPressCategory={onPressCategory}
        isBooksListOpen={isBooksListOpen}
      />
    ));

  const StyledComponent = isBurgerMenu ? BurgerMenuContainer : Container;

  return (
    <StyledComponent ref={ref} isShowMenu={isShowMenu} data-test-id={isBurgerMenu && 'burger-navigation'}>
      <ul>{renderMenu()}</ul>
    </StyledComponent>
  );
};
