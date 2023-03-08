import { FC, useCallback, useState } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
import { BookBreadcrumbs } from 'components/book-breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { PrivateRouter } from 'components/private/private';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { mockUser } from 'mocks/user.mock';
import { RouteNames } from 'types/enum';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Loader } from './components/loader';
import { Toast } from './components/toast';
import { Container, MainContainer, MainWrapper, Overlay } from './layout.style';

export const Layout: FC = () => {
  const pathBook = useMatch(`/${RouteNames.books}/:category/:bookId`);
  const pathProfile = useMatch(`/${RouteNames.profile}/`);
  const withMenu = !pathBook && !pathProfile;
  const user = useTypedSelector(({ login }) => login.user);

  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const closeOverlay = useCallback(() => setIsOpenBurger(!isOpenBurger), [isOpenBurger]);

  return (
    <Container isOpenMenu={isOpenBurger}>
      <Loader />
      <Toast />
      <Overlay isShowMenu={isOpenBurger} onClick={closeOverlay} />
      {user && <Header user={user} setIsOpenBurger={setIsOpenBurger} isOpenBurger={isOpenBurger} />}
      {pathBook && <BookBreadcrumbs />}
      <MainWrapper>
        <MainContainer>
          {withMenu && <NavigationMenu isBurgerMenu={false} />}
          <PrivateRouter />
        </MainContainer>
      </MainWrapper>
      <Footer />
    </Container>
  );
};
