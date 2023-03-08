/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { logout } from 'store/login/login-slice';
import { RouteNames, TitleVariant } from 'types/enum';

import { UserMenuContainer } from './user-menu.style';

export const UserMenu: FC<{ isOpen: boolean; setIsOpen: (value: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const burgerOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserMenuContainer isShowMenu={isOpen}>
      <ul>
        <li>
          <Link to={`/${RouteNames.profile}`}>{TitleVariant.profile}</Link>
        </li>
        <li data-test-id='exit-button'>
          <a onClick={() => dispatch(logout())}>{TitleVariant.exit}</a>
        </li>
      </ul>
    </UserMenuContainer>
  );
};
