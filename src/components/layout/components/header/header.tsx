import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LogoClevertec } from 'assets/icons';
import { NavigationMenu } from 'components/navigation-menu';
import { Wrapper } from 'index.style';
import { UserDTO } from 'types/types';

import { BurgerMenu } from './components/ burger-menu';
import { HeaderAuthorization } from './components/header-authorisation';
import { HeaderContainer, LeftHeaderContainer, LogoContainer, MenuContainer, Title } from './header.style';

export const Header: FC<{ user: UserDTO; isOpenBurger: boolean; setIsOpenBurger: (value: boolean) => void }> = ({
  user,
  isOpenBurger,
  setIsOpenBurger,
}) => {
  const burgerOpenHandler = useCallback(() => {
    setIsOpenBurger(!isOpenBurger);
  }, [isOpenBurger, setIsOpenBurger]);

  return (
    <Wrapper>
      <HeaderContainer>
        <LeftHeaderContainer>
          <Link to='/'>
            <LogoContainer>
              <LogoClevertec />
            </LogoContainer>
          </Link>
          <MenuContainer onClick={burgerOpenHandler}>
            <BurgerMenu isOpen={isOpenBurger} />
            <NavigationMenu
              data-test-id='burger-navigation'
              setIsShowMenu={setIsOpenBurger}
              isShowMenu={isOpenBurger}
              isBurgerMenu={true}
            />
          </MenuContainer>

          <Title>Библиотека</Title>
        </LeftHeaderContainer>
        <HeaderAuthorization user={user} />
      </HeaderContainer>
    </Wrapper>
  );
};
