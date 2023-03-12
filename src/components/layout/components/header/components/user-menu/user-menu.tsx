import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { logout } from 'store/login/login-slice';
import { RouteNames, TitleVariant } from 'types/enum';

import { MenuItem, UserMenuContainer } from './user-menu.style';

export const UserMenu: FC<{ isOpen: boolean; setIsOpen: (value: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const burgerOpenHandler = () => {
    dispatch(logout());
    setIsOpen(!isOpen);
  };

  return (
    <UserMenuContainer isShowMenu={isOpen}>
      <MenuItem>
        <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${RouteNames.profile}`}>
          {TitleVariant.profile}
        </NavLink>
      </MenuItem>
      <MenuItem onClick={burgerOpenHandler}>{TitleVariant.exit}</MenuItem>
    </UserMenuContainer>
  );
};
