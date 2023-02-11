import { FC, useCallback, useState } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { BookBreadcrumbs } from 'components/book-breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { Wrapper } from 'index.style';
import { mockUser } from 'mocks/user.mock';
import { RouteNames } from 'types/enum';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Container, MainContainer, Overlay } from './layout.style';

export const Layout: FC = () => {
  const pathBook = useMatch(`/${RouteNames.books}/:category/:bookId`);
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const closeOverlay = useCallback(() => setIsOpenBurger(!isOpenBurger), [isOpenBurger]);

  return (
    <Container isOpenMenu={isOpenBurger}>
      <Overlay isShowMenu={isOpenBurger} onClick={closeOverlay} />
      <Header user={mockUser} setIsOpenBurger={setIsOpenBurger} isOpenBurger={isOpenBurger} />
      {pathBook && <BookBreadcrumbs />}
      <Wrapper>
        <MainContainer>
          {!pathBook && <NavigationMenu isBurgerMenu={false} />}
          <Outlet />
        </MainContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
