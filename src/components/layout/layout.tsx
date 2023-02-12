import { FC, useCallback, useState } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { BookBreadcrumbs } from 'components/book-breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { mockUser } from 'mocks/user.mock';
import { RouteNames } from 'types/enum';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Loader } from './components/loader';
import { Toast } from './components/toast';
import { Container, MainContainer, MainWrapper, Overlay } from './layout.style';

export const Layout: FC = () => {
  const pathBook = useMatch('/books/:category/:bookId');
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const closeOverlay = useCallback(() => setIsOpenBurger(!isOpenBurger), [isOpenBurger]);

  return (
    <Container isOpenMenu={isOpenBurger}>
      <Loader />
      <Toast />
      <Overlay isShowMenu={isOpenBurger} onClick={closeOverlay} />
      <Header user={mockUser} setIsOpenBurger={setIsOpenBurger} isOpenBurger={isOpenBurger} />
      {pathBook && <BookBreadcrumbs />}
      <MainWrapper>
        <MainContainer>
          {!pathBook && <NavigationMenu isBurgerMenu={false} />}
          <Outlet />
        </MainContainer>
      </MainWrapper>
      <Footer />
    </Container>
  );
};
